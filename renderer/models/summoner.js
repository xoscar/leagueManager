import { ipcRenderer } from 'electron';

const Summoner = () => ({
  info({ summonerId, region }) {
    return ipcRenderer.sendSync('summoner-get-info', JSON.stringify({ summonerId, region }));
  },
});

export default Summoner;
