import { createAction } from 'redux-actions';
import {
  get,
} from '../../utils/fp';

export default ({
  reducerPath,
  name,
}) => {
  const actionTypePrefix = 'CONCAT';
  const actionType = `${reducerPath}/${actionTypePrefix}_${name}`;
  const actionCreator = createAction(actionType);
  const payload = get('payload')(action) || [];
  const reducerHandler = {
    [actionType]: (state = [], action) => ([
      ...state,
      ...payload,
    ]),
  };

  return {
    actionType,
    actionCreator,
    reducerHandler,
  };
};
