import { createAction } from 'redux-actions';
import {
  get,
} from '../../utils/fp';

export default ({
  reducerPath,
  name,
}) => {
  const actionType = `${reducerPath}/INCREASE_${name}`;
  const actionCreator = createAction(actionType);
  const reducerHandler = {
    [actionType]: (state, action) => state + get('payload', 1)(action),
  };

  return {
    actionType,
    actionCreator,
    reducerHandler,
  };
};
