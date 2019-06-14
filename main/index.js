// libs
const { join } = require('path');
const { format } = require('url');

// depedencies
const { BrowserWindow, app } = require('electron');
const isDev = require('electron-is-dev');
const prepareNext = require('electron-next');

// workflow
const Store = require('./integrations/store');
const { Summoner } = require('./integrations/riot');

app.on('ready', async () => {
  await prepareNext('./renderer');
  const store = Store();
  const summoner = Summoner();

  const userConfig = await store.listen({
    name: 'userConfig',
  });
  summoner.listen();

  userConfig.send();

  const mainWindow = new BrowserWindow({
    width: 1220,
    height: 768,
  });

  const url = isDev ? 'http://localhost:8000/start' : format({
    pathname: join(__dirname, '../renderer/start/index.html'),
    protocol: 'file:',
    slashes: true,
  });

  mainWindow.loadURL(url);
});

app.on('window-all-closed', async () => app.quit);
