import { combineReducers } from 'redux';

import { resourcesReducer } from './resources';
import { sermonsReducer } from './sermons';

export const rootReducer = combineReducers({
  resources: resourcesReducer,
  sermons: sermonsReducer,
});
