import { createAction } from 'redux-actions';
import {
  get,
  filter,
  matches,
} from '../../utils/fp';

import getType from '../../utils/get-type';

export default ({
  reducerPath,
  name,
}) => {
  const actionTypePrefix = 'FILTER_ITEM_IN_ARRAY';
  const actionType = `${reducerPath}/${actionTypePrefix}_${name}`;
  const actionCreator = createAction(actionType);
  const reducerHandler = {
    [actionType]: (state = [], action) => {
      const condition = get('payload')(action);
      const conditionType = getType(condition);
      if (conditionType === 'object') {
        return filter(matches(condition))(state);
      }
      console.warn('You may not need to use filter');
      console.warn('Just recommend to use filter with array of object');
      return state;
    },
  };

  return {
    actionType,
    actionCreator,
    reducerHandler,
  };
};
