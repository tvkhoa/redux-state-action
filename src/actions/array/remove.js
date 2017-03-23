import { createAction } from 'redux-actions';
import {
  get,
  without,
  filter,
  matches,
} from 'lodash';
import getType from '../../utils/get-type';

export default ({
  reducerPath,
  name,
}) => {
  const actionTypePrefix = 'REMOVE_ITEM_IN_ARRAY';
  const actionType = `${reducerPath}/${actionTypePrefix}_${name}`;
  const actionCreator = createAction(actionType);
  const reducerHandler = {
    [actionType]: (state = [], action) => {
      const condition = get(action, 'payload');
      const conditionType = getType(condition);
      if (conditionType === 'object') {
        return filter(state, (item) => !matches(condition)(item));
      }
      if (conditionType === 'array') {
        return without(state, ...condition);
      }
      return without(state, condition);
    },
  };

  return {
    actionType,
    actionCreator,
    reducerHandler,
  };
};
