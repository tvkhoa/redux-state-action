import { createAction } from 'redux-actions';
import {
  get,
  filter,
  matches,
} from 'lodash';
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
      const condition = get(action, 'payload');
      const conditionType = getType(condition);
      if (conditionType === 'object') {
        return filter(state, matches(condition));
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
