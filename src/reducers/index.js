import { combineReducers } from 'redux';
import SampleReducer from './SampleReducer';
import SamplePersistableReducer from './SamplePersistableReducer';

export default combineReducers({
  sample: SampleReducer,
  samplePersistable: SamplePersistableReducer
});
