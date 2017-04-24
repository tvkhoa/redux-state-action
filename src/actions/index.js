// import get from 'lodash/get';
// import mapValues from 'lodash/mapValues';
// import reduce from 'lodash/reduce';
import {
  get,
  mapValues,
  reduce,
} from 'lodash';
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

  return get(values, type, shared);
};


export const getActionsDataSet = ({
  type,
  reducerPath,
  name,
  defaultValue,
}) => {
  const actions = getActionHandlersByType(type);
  return mapValues(actions, (actionHandler) => actionHandler({
    type,
    reducerPath,
    name,
    defaultValue,
  }));
};

// Dont ask me why don't I use lodash fp.
// I like this way, it's enought
export const getActionCreatorSet = (actionDataset) => mapValues(actionDataset, 'actionCreator');
export const getActionTypeSet = (actionDataset) => mapValues(actionDataset, 'actionType');
export const getReducerHandlerSet = (actionDataset) => mapValues(actionDataset, 'reducerHandler');
export const combineReducerHanlders = (reducerHandlerSet) =>
  reduce(
    reducerHandlerSet,
    (result, value) => ({
      ...result,
      ...value,
    }),
    {},
  );

export default getActionsDataSet;
