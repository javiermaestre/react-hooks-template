import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './reducers/reducers';
import { State } from '../shared/models';

const middlewares = composeWithDevTools(applyMiddleware(thunk));

export default function createReduxStore(): Store<State> {
  return createStore(rootReducer, middlewares);
}
