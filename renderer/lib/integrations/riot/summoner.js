export default ({ defaultRegion = null, paths, request }) => {
  const info = ({ summonerId = null, region = defaultRegion }) => (
    request({ region, path: paths.info, query: [summonerId] })
  );

  return {
    info,
  };
};
