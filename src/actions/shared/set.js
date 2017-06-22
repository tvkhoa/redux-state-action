import { createAction } from 'redux-actions';
// import get from 'lodash/get';
import {
  get,
} from '../../utils/fp';
import getType from '../../utils/get-type';

export default ({
  type,
  reducerPath,
  name,
  defaultValue,
}) => {
  const actionType = `${reducerPath}/SET_${name}`;
  const actionCreator = createAction(actionType);
  const reducerHandler = {
    [actionType]: (state = defaultValue, action) => {
      const value = get('payload', defaultValue)(action);
      const valueType = getType(value);
      if (type !== valueType) {
        console.warn(`Expected type: ${type}, but you pass ${valueType} type. So it wont change value`);
        return state;
      }
      return value;
    },
  };

  return {
    actionType,
    actionCreator,
    reducerHandler,
  };
};
