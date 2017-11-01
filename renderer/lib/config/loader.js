import localStorage from 'localStorage';
import Store from '../store';

export default async (type) => {
  const config = localStorage.getItem(type);

  if (config) {
    return JSON.parse(config);
  }

  const store = Store({ name: type });
  store.get();

  return new Promise((resolve, reject) => {
    store.listen('get', (storeConfig) => {
      if (!storeConfig) {
        return reject();
      }

      return resolve(storeConfig);
    });
  });
};
