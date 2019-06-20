// dependencies
const fetch = require('isomorphic-fetch');
const { ipcMain } = require('electron');
const { stringify } = require('query-string');

//  config
const { championIds, spellIds, urls, paths } = require('../config/common.json');
const regions = require('../config/regions.json');

const call = async (url) => {
  const response = await fetch(url);

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

const request = async ({ region, path, params }) => {
  const { url } = regions.find(({ code }) => region === code);
  return await call(`https://${url}${path}?api_key=${process.env.RIOT_API_TOKEN}&${stringify(params || {})}`);
};

const staticData = async ({ path }) => (
  await call(`${urls.static}${path}`)
);

// Models
const Summoner = () => ({
  async info({ summonerId, region }) {
    return await request({ region, path: paths.summoner.info.replace('{{summonerId}}', summonerId) });
  },
  async ranking({ summonerId, region }) {
    return await request({ region, path: paths.summoner.ranking.replace('{{summonerId}}', summonerId) });
  },
  async matches({ accountId, region, params }) {
    const matchList = await request({ region, path: `${paths.summoner.matches.replace('{{accountId}}', accountId)}`, params });

    return Promise.all(matchList.matches.map(match => (
      this.match({ accountId, matchId: match.gameId, region })

        .then(details => (
          Object.assign(match, {
            champion: {
              id: match.champion,
              name: championIds[match.champion],
            },
            details,
          })
        ))
    )))

      .then(matches => (
        Promise.resolve(Object.assign(matchList, {
          matches,
        }))
      ));
  },
  async match({ accountId, matchId, region }) {
    const match = await request({ region, path: `${paths.summoner.match.replace('{{matchId}}', matchId)}` });
    const { participants, participantIdentities } = match;
    const identity = participantIdentities.find(({ player }) => (
      player.currentAccountId === accountId
    ));
    const participant = participants[identity.participantId - 1];

    return Object.assign(match, {
      participant: Object.assign(identity, participant, {
        spells: {
          spell1Id: spellIds[participant.spell1Id],
          spell2Id: spellIds[participant.spell2Id],
        },
      }),
      participants: null,
      participantIdentities: null,
    });
  },
  async champion({ championName }) {
    return await staticData({ path: paths.static.champion.replace('{{champion', championName) });
  },
  async spells() {
    return await staticData({ path: paths.static.spells });
  },
  listen() {
    ipcMain.on('summoner-pull', async (event, arg) => {
      const parsedArgs = JSON.parse(arg);

      event.returnValue = await this[parsedArgs.type](parsedArgs);
    });
  },
});

module.exports = {
  Summoner,
};
