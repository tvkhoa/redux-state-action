import { createAction } from 'redux-actions';
// import get from 'lodash/get';
import {
  get,
} from 'lodash';

export default ({
  reducerPath,
  name,
}) => {
  const actionType = `${reducerPath}/INCREASE_${name}`;
  const actionCreator = createAction(actionType);
  const reducerHandler = {
    [actionType]: (state, action) => state + get(action, 'payload', 0),
  };

  return {
    actionType,
    actionCreator,
    reducerHandler,
  };
};
