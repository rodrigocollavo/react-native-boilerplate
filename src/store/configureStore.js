import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import ReduxThunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import rootReducer from '../reducers'

const persistConfig = {
  key: 'root',
  blacklist: ['sample'],
  storage,
}


const middleware = [ReduxThunk];
const persistedReducer = persistReducer(persistConfig, rootReducer)
const composedStore = compose(
  applyMiddleware(...middleware)
)(createStore)(persistedReducer);

export default () => {
  let store = composedStore
  let persistor = persistStore(store)
  return { store, persistor }
}
