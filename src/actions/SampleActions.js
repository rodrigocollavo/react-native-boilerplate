import { INCREMENT_COUNTER } from './types';

export const incrementCounter = () => {
  return (dispatch) => {
    dispatch({ type: INCREMENT_COUNTER });
  }
};
