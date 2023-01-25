import algoliaSearch from 'algoliasearch';

const client = algoliaSearch(
  'OFCNCOG2CU',
  'f54e21fa3a2a0160595bb058179bfb1e',
  {
    protocol: 'https:'
  },
);
const init = client.initIndex('npm-search');

class NpmPackages {
  search(name, page, hitsPerPage = 10) {
    const options = {
      page,
      hitsPerPage,
      attributesToHighlight: [],
      attributesToRetrieve: ['description', 'created', 'name', 'owner', 'version'],
      analyticsTags: ['jsdelivr'],
    };
    return init.search(name, options)
      .then((res) => res)
      .catch(() => ({ hits: [] }));
  }
  getByName(name) {
    return init.getObject(name)
      .then((res) => res)
  }
}

export default new NpmPackages();
