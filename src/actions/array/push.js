import { createAction } from 'redux-actions';
import {
  get,
} from '../../utils/fp';

export default ({
  reducerPath,
  name,
}) => {
  const actionTypePrefix = 'PUSH';
  const actionType = `${reducerPath}/${actionTypePrefix}_${name}`;
  const actionCreator = createAction(actionType);
  const reducerHandler = {
    [actionType]: (state = [], action) => ([
      ...state,
      get('payload')(action),
    ]),
  };

  return {
    actionType,
    actionCreator,
    reducerHandler,
  };
};
