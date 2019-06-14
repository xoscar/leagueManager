import { ipcRenderer } from 'electron';

let Store = null;
if (!process.browser) {
  Store = require('../../main/integrations/store');
}

const serverSide = ({ name }) => ({
  async listen(type, callback) {
    const store = Store();
    const config = await store.get({ configName: name });
    callback(config);
  },
  send() {
    return null;
  },
  get() {
    return null;
  },
});

const clientSide = ({ name }) => {
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

export default ({ name }) => (
  process.browser ? clientSide({ name }) : serverSide({ name })
);
