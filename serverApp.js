import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { Provider } from 'react-redux';

import { Container } from 'reactstrap';

import Layout from './src/components/shared/Layout';

import routes from './src/routes';
import prepareData from './src/helpers/prepareData';
import store from './src/store';
import { StaticRouter, Switch, matchPath, Route } from 'react-router';

const RouteWithSubroutes = ({ route, key }) => (
  <Route key={key} {...route} />
);

export default (req, res) => {
  const state = {
    routes: [],
    params: {},
    query: {}
  };

  routes.some((route) => {
    const match = matchPath(req.path, route);

    if (match)
    {
      state.routes.push(route);
      Object.assign(state.params, match.params);
      Object.assign(state.query, req.query);
    }
    return match;
  });

  const App = () => (
    <Provider store={store}>
      <Layout>
        <Container>
          <StaticRouter>
            <Switch>
              {
                routes.map((route, key) => (
                  RouteWithSubroutes({ route, key })
                ))
              }
            </Switch>
          </StaticRouter>
        </Container>
      </Layout>   
    </Provider>
  );

  return prepareData(store, state).then(() => {
    return {
      content: ReactDOMServer.renderToString(<App />),
      initialState: JSON.stringify(store.getState())
    };
  });
};