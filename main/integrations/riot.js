// dependencies
const fetch = require('isomorphic-fetch');
const { ipcMain } = require('electron');

//  config
const { summoner } = require('../config/paths.json');
const regions = require('../config/regions.json');

const request = async ({ region, path }) => {
  const { url } = regions.find(({ code }) => region === code);
  const response = await fetch(`https://${url}${path}?api_key=${process.env.RIOT_API_TOKEN}`);

  try {
    const jsonRes = await response.json();
    return response.ok ? jsonRes : {
      error: jsonRes,
    };
  } catch (e) {
    return {
      error: 'Error when trying to communicate with Riot API',
    };
  }
};

// Models
const Summoner = () => ({
  async info({ summonerId, region }) {
    return await request({ region, path: summoner.info.replace('{{summonerId}}', summonerId) });
  },
  listen() {
    ipcMain.on('summoner-get-info', async (event, arg) => {
      event.returnValue = await this.info(JSON.parse(arg));
    });
  },
});

module.exports = {
  Summoner,
};
