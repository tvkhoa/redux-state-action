import {
  get,
  mapValues,
  reduce,
} from '../utils/fp';
import shared from './shared';
import number from './number';
import boolean from './boolean';
import array from './array';
import object from './object';

export const getActionHandlersByType = (type) => {
  const values = {
    string: {
      ...shared,
    },
    number: {
      ...shared,
      ...number,
    },
    boolean: {
      ...shared,
      ...boolean,
    },
    array: {
      ...shared,
      ...array,
    },
    object: {
      ...shared,
      ...object,
    },
  };

  return get(type, shared)(values);
};


export const getActionsDataSet = ({
  type,
  reducerPath,
  name,
  defaultValue,
}) => {
  const actions = getActionHandlersByType(type);
  return mapValues((actionHandler) => actionHandler({
    type,
    reducerPath,
    name,
    defaultValue,
  }))(actions);
};


export const getActionCreatorSet = mapValues('actionCreator');
export const getActionTypeSet = mapValues('actionType');
export const getReducerHandlerSet = mapValues('reducerHandler');
export const combineReducerHanlders = reduce(
  (result, value) => ({
    ...result,
    ...value,
  }),
  {},
);

export default getActionsDataSet;
