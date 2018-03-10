import { TEMPLATE_ACTION_TYPE } from './types';

export const templateFunction = () => {
  return (dispatch) => {
    dispatch({ type: TEMPLATE_ACTION_TYPE });
  }
};
