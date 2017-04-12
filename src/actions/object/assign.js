import { createAction } from 'redux-actions';
import get from 'lodash/get';
import getType from '../../utils/get-type';

export default ({
  reducerPath,
  name,
}) => {
  const actionTypePrefix = 'ASSIGN';
  const actionType = `${reducerPath}/${actionTypePrefix}_${name}`;
  const actionCreator = createAction(actionType);
  const reducerHandler = {
    [actionType]: (state = {}, action) => {
      const value = get(action, 'payload', {});
      const valueType = getType(value);

      if (valueType !== 'object') {
        console.warn(`Expected valueType: object. You can not use assign with type ${valueType}`);
        return state;
      }

      return {
        ...state,
        ...value,
      };
    },
  };

  return {
    actionType,
    actionCreator,
    reducerHandler,
  };
};
