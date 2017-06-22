import { createAction } from 'redux-actions';
import {
  get,
} from '../../utils/fp';

export default ({
  reducerPath,
  name,
}) => {
  const actionTypePrefix = 'PUSH_TO_FIRST';
  const actionType = `${reducerPath}/${actionTypePrefix}_${name}`;
  const actionCreator = createAction(actionType);
  const reducerHandler = {
    [actionType]: (state = [], action) => ([
      get('payload')(action),
      ...state,
    ]),
  };

  return {
    actionType,
    actionCreator,
    reducerHandler,
  };
};
