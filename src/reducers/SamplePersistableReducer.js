import { INCREMENT_COUNTER } from '../actions/types';

const INITIAL_STATE = {
  counter: 0
};

const SamplePersistableReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { counter: state.counter + 1 };
    default:
      return state;
  }
};

export default SamplePersistableReducer;
