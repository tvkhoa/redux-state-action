/* @flow */

import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

import {
  get,
  reduce,
  isObject,
  keys,
  join,
} from './utils/fp';


import getDefaultValueByType from './default-values';
import {
  getActionsDataSet,
  getActionCreatorSet,
  getActionTypeSet,
  getReducerHandlerSet,
  combineReducerHanlders,
} from './actions';

type TypesValue = | 'string' | 'number' | 'boolean' | 'object' | 'array';
type DefaultValueType = | string | number | boolean | {} | [] ;
type ActionType = {
  type: string,
  payload: DefaultValueType,
};
type HandlerType = (state?: DefaultValueType, action?: ActionType) => DefaultValueType;
type HandlersType = {
  [name:string]: HandlerType
};

type SelectorType = (rootState?: {}) => DefaultValueType;
type OptionType = | TypesValue | {
  type?: TypesValue,
  defaultValue?: DefaultValueType,
  reducerHandlers?: HandlersType,
};

type ParamType = {
  reducerPath: string,
  names: {[name:string]: OptionType},
};

const getOption = (nameValue) => {
  if (isObject(nameValue)) {
    return nameValue;
  }
  return {
    type: nameValue,
  };
};

const makeStateAction = ({
  reducerPath,
  names,
} : ParamType) => {
  const domainSelector = (state) => get(reducerPath)(state);
  const results = reduce(
    (result, nameValue, name) => {
      const option = getOption(nameValue);

      const type = get('type', 'string')(option);
      const defaultValue = get('defaultValue', getDefaultValueByType(type))(option);
      const reducerHandlers = get('reducerHandlers', {})(option);

      const actionsDataSet = getActionsDataSet({
        name,
        type,
        reducerPath,
        defaultValue,
      });

      const actionCreatorSet = getActionCreatorSet(actionsDataSet);
      const actionTypeSet = getActionTypeSet(actionsDataSet);
      const reducerHandlerSet = getReducerHandlerSet(actionsDataSet);

      const typeReducerHandlers = combineReducerHanlders(reducerHandlerSet);

      const reducer = handleActions({
        ...typeReducerHandlers,
        ...reducerHandlers,
      }, defaultValue);

      const selector = createSelector(
        domainSelector,
        (domain) => get(`${name}`)(domain),
      );

      const reducers = {
        ...result.reducers,
        [name]: reducer,
      };

      const actionTypes = {
        ...result.actionTypes,
        [name]: actionTypeSet,
      };

      const actionCreators = {
        ...result.actionCreators,
        [name]: actionCreatorSet,
      };

      const selectors = {
        ...result.selectors,
        [name]: selector,
      };

      return {
        reducers,
        actionTypes,
        actionCreators,
        selectors,
      };
    }, {
      reducers: {},
      actionTypes: {},
      actionCreators: {},
      selectors: {},
    }
  )(names);

  const actionTypeFactory = (varName: string, type: string = 'set') => {
    const actionTypesSet = get(varName)(results.actionTypes);
    if (actionTypesSet === undefined) {
      console.warn('Cannot find actionType for', varName, '. Please check your code');
      return undefined;
    }
    const actionType = get(type)(actionTypesSet);
    if (actionType === undefined) {
      const supportedTypes = join(', ', keys(actionTypesSet));
      console.warn(`actionTypes type for ${reducerPath}.${varName} is just support:`, supportedTypes);
      return undefined;
    }
    return actionType;
  };

  const actionCreatorFactory = (varName: string, type : string = 'set') => {
    const actionCreatorsSet = get(varName)(results.actionCreators);
    if (actionCreatorsSet === undefined) {
      console.warn('Cannot find actionCreator for', varName, '. Please check your code');
      return undefined;
    }
    const actionCreator = get(type)(actionCreatorsSet);
    if (actionCreator === undefined) {
      const supportedTypes = join(', ', keys(actionCreatorsSet));
      console.warn(`actionCreator type for ${reducerPath}.${varName} is just support:`, supportedTypes);
      return undefined;
    }
    return actionCreator;
  };

  const selectorFactory = (varName: string) : ?SelectorType => {
    const selector = get(varName)(results.selectors);
    if (selector === undefined) {
      console.warn('Cannot find selector for', varName, '. Please check your code');
      return undefined;
    }
    return selector;
  };

  const branch = {
    [reducerPath]: combineReducers({
      ...results.reducers,
    }),
  };

  return {
    reducers: results.reducers,
    branch,
    actionTypeFactory,
    actionCreatorFactory,
    selectorFactory,
  };
};

export default makeStateAction;
