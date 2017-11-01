import { ipcRenderer } from 'electron';

export default ({ name }) => {
  const listen = (type, callback) => {
    ipcRenderer.on(`${type}-${name}`, (event, content) => {
      callback(content);
    });
  };

  const save = async content => (
    ipcRenderer.send(`save-${name}`, content)
  );

  const get = async () => (
    ipcRenderer.send(`get-${name}`)
  );

  return { listen, save, get };
};
