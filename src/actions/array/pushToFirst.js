import { createAction } from 'redux-actions';
import {
  get,
} from 'lodash';

export default ({
  reducerPath,
  name,
}) => {
  const actionTypePrefix = 'PUSH_TO_FIRST';
  const actionType = `${reducerPath}/${actionTypePrefix}_${name}`;
  const actionCreator = createAction(actionType);
  const reducerHandler = {
    [actionType]: (state = [], action) => ([
      get(action, 'payload'),
      ...state,
    ]),
  };

  return {
    actionType,
    actionCreator,
    reducerHandler,
  };
};
