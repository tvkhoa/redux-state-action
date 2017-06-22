import { createAction } from 'redux-actions';
import {
  get,
  without,
  filter,
  matches,
} from '../../utils/fp';

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
      const condition = get('payload')(action);
      const conditionType = getType(condition);
      if (conditionType === 'object') {
        return filter((item) => !matches(condition)(item))(state);
      }
      if (conditionType === 'array') {
        return without(...condition)(state);
      }
      return without(condition)(state);
    },
  };

  return {
    actionType,
    actionCreator,
    reducerHandler,
  };
};
