import React from 'react';

import { Provider } from 'react-redux';

import store from '~/src/store';

import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap';

import Layout from '~/src/components/shared/Layout';

import { Router, Route, Switch, matchPath } from 'react-router-dom';
import history from '~/src/helpers/history';
import routes from '~/src/routes';
import prepareData from '~/src/helpers/prepareData';
import { parse } from 'qs';

const historyCb = (location, action) => {
  const state = {
    routes: [],
    params: {},
    query: {}
  };

  routes.some((route) => {
    const match = matchPath(location.pathname, route).isExact

    if (match)
    {
      state.routes.push(route);
      Object.assign(state.params, match.params);
      Object.assign(state.query, parse(location.search.substr(1)));
    }
    return match;
  });

  prepareData(store, state);
};

history.listen(historyCb);

historyCb(window.location, 'PUSH');

const RouteWithSubroutes = ({ route, key }) => (
  <Route key={key} {...route} />
);

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Container>
          <Router history={history}>
            <Switch>
              {
                routes.map((route, key) => (
                  RouteWithSubroutes({ route, key })
                ))
              }
            </Switch>
          </Router>
        </Container>
      </Layout>   
    </Provider>
  );
};

export default App;