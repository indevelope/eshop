export default (store, state) => {
  const { query, params, routes } = state;

  const prepareDataFns = routes.map(route => route.prepareData).filter(fn => fn != undefined);

  return Promise.all(prepareDataFns.map(fn => fn(store, query, params, routes)));
};