import { createAction } from 'redux-actions';
// import get from 'lodash/get';
import {
  get,
} from '../../utils/fp';

export default ({
  reducerPath,
  name,
}) => {
  const actionType = `${reducerPath}/DECREASE_${name}`;
  const actionCreator = createAction(actionType);
  const reducerHandler = {
    [actionType]: (state, action) => state - get('payload', 1)(action),
  };

  return {
    actionType,
    actionCreator,
    reducerHandler,
  };
};
