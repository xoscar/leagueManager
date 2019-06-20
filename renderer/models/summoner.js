import { ipcRenderer } from 'electron';

const sendMessage = type => (
  data => (
    ipcRenderer.sendSync(`summoner-${type}`, JSON.stringify(data))
  )
);
const pull = sendMessage('pull');

const Summoner = defaultData => ({
  ...defaultData,
  ranking() {
    return pull({ type: 'ranking', summonerId: this.id, region: this.region });
  },
  matches(params) {
    return pull({ type: 'matches', params, accountId: this.accountId, region: this.region });
  },
});

export const info = ({ summonerId, region }) => (
  pull({ type: 'info', summonerId, region })
);

export default Summoner;

