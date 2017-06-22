import { createAction } from 'redux-actions';
import {
  get,
  omit,
} from '../../utils/fp';
import getType from '../../utils/get-type';

export default ({
  reducerPath,
  name,
}) => {
  const actionTypePrefix = 'OMIT';
  const actionType = `${reducerPath}/${actionTypePrefix}_${name}`;
  const actionCreator = createAction(actionType);
  const reducerHandler = {
    [actionType]: (state = {}, action) => {
      const value = get('payload', {})(action);
      const valueType = getType(value);

      if (valueType !== 'array' && valueType !== 'string') {
        console.warn(`Expected valueType: array of string or string. You can not use omit with type ${valueType}`);
        return state;
      }

      return omit(value)(state);
    },
  };

  return {
    actionType,
    actionCreator,
    reducerHandler,
  };
};
