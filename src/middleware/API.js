import request from 'superagent';
import { stringify } from 'qs';

import { API_ROOT } from '~/src/constants/API';

export const API_CALL = 'API_CALL';

const APICall = (root = API_ROOT, endpoint, method, query, payload) => {
  let r = request[method.toLowerCase()](`${API_ROOT}${endpoint}`);

  if (query)
    r = r.query(stringify(query));

  if (payload)
    r = r.send(payload);

  return r;
};

export default store => next => action => {
  if (!action[API_CALL]) {
    next(action);
    return;
  }

  const {
    root,
    endpoint,
    method,
    types,
    query,
    payload
  } = action[API_CALL];

  const [requestType, successType, failureType] = types;

  const nextAction = (action, data) => (
    Object.assign({}, action, data, { [API_CALL]: undefined })
  );

  store.dispatch(nextAction(action, { type: requestType }));

  const promise = APICall(
    root,
    endpoint,
    method,
    query,
    payload
  );

  promise
    .then((response) => {
      store.dispatch(nextAction(action, { type: successType, response }))
    })
    .catch((error) => {
      store.dispatch(nextAction(action, { type: failureType, error }))
    });

  return promise;
};