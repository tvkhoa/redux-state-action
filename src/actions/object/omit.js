import { createAction } from 'redux-actions';
// import get from 'lodash/get';
// import omit from 'lodash/omit';
import {
  get,
  omit,
} from 'lodash';
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
      const value = get(action, 'payload', {});
      const valueType = getType(value);

      if (valueType !== 'array' && valueType !== 'string') {
        console.warn(`Expected valueType: array of string or string. You can not use omit with type ${valueType}`);
        return state;
      }

      return omit(state, value);
    },
  };

  return {
    actionType,
    actionCreator,
    reducerHandler,
  };
};
