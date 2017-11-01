const electron = require('electron');
const { join } = require('path');
const fs = require('fs');
const { promisify } = require('util');

const { ipcMain } = require('electron');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

module.exports = ({ savePath } = {}) => {
  const storePath = savePath || (electron.app || electron.remote.app).getPath('userData');

  const save = async ({ configName, data }) => (
    writeFile(join(storePath, `${configName}.json`), JSON.stringify(data))
  );

  const get = async ({ configName }) => {
    const result = await readFile(join(storePath, `${configName}.json`));
    return JSON.parse(result.toString());
  };

  const listen = async ({ name }) => {
    ipcMain.on(`save-${name}`, async (event, config) => {
      await save({ configName: name, data: config });
      event.sender.send(`saved-${name}`, config);
    });

    ipcMain.on(`get-${name}`, async (event) => {
      event.sender.send(`get-${name}`, await get({ configName: name }));
    });

    const send = async () => {
      const content = await get({ name });

      ipcMain.send(`get-${name}`, content);
    };

    return Object.assign(ipcMain, { send });
  };

  return { listen, save, get };
};
