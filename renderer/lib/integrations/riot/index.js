// dependencies
import fetch from 'isomorphic-fetch';

// config
import paths from '../../config/paths.json';
import regions from '../../config/regions.json';

// Models
import Summoner from './summoner';

export default ({ defaultRegion = null }) => {
  const request = async ({ region = defaultRegion, path, query = [] }) => {
    const regionInfo = regions.filter(reg => (
      region === reg.code
    ))[0];

    const requestPath = query.reduce((acc, param, index) => (
      acc.replace(`{{${index}}}`, param)
    ), path);

    const response = await fetch(`https://${regionInfo.url}${requestPath}`, {
      headers: {
        'X-Riot-Token': process.env.RIOT_API_TOKEN,
        'Accept-Language': 'es-419,es;q=0.8,en;q=0.6,en-US;q=0.4,de;q=0.2,gl;q=0.2',
      },
    });

    const jsonRes = await response.json();

    return response.ok ? jsonRes : {
      error: jsonRes,
    };
  };

  return {
    summoner: Summoner({ defaultRegion, paths: paths.summoner, regions, request }),
    request,
  };
};
