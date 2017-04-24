/* @flow */

import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
// import get from 'lodash/get';
// import reduce from 'lodash/reduce';
// import keys from 'lodash/keys';
// import join from 'lodash/join';
// import isObject from 'lodash/isObject';
import {
  get,
  reduce,
  keys,
  join,
  isObject,
} from 'lodash';
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
type ActionCreatorType = (value?: DefaultValueType) => ActionType;
type OptionType = | TypesValue | {
  type?: TypesValue,
  defaultValue?: DefaultValueType,
  reducerHandlers?: HandlersType,
};

type ParamType = {
  reducerPath: string,
  names: {[name:string]: OptionType},
};
type ResultType = {
  actionTypes: {[name:string]: string},
  reducers: {[name:string]: HandlerType},
  actionCreators: {[name:string]: ActionCreatorType},
  selectors: {[name:string]: SelectorType},
}

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
} : ParamType): ResultType => {
  const domainSelector = (state) => get(state, reducerPath);
  const results = reduce(names, (result, nameValue, name) => {
    const option = getOption(nameValue);

    const type = get(option, 'type', 'string');
    const defaultValue = get(option, 'defaultValue', getDefaultValueByType(type));
    const reducerHandlers = get(option, 'reducerHandlers', {});

    const actionsDataSet = getActionsDataSet({
      name,
      type,
      reducerPath,
      defaultValue,
    });

    // actionsDataSet = {
    //   set: {
    //     actionCreator,
    //     actionType,
    //     reducerHandler,
    //   },
    //   update: {
    //     actionCreator,
    //     actionType,
    //     reducerHandler,
    //   }
    // }

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
      (domain) => get(domain, `${name}`),
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
  });

  const actionTypeFactory = (varName: string, type = 'set') : ActionCreatorType => {
    const actionTypesSet = get(results.actionTypes, varName);
    if (actionTypesSet === undefined) {
      console.warn('Cannot find actionType for', varName, '. Please check your code');
      return undefined;
    }
    const actionType = get(actionTypesSet, type);
    if (actionType === undefined) {
      const supportedTypes = join(keys(actionTypesSet), ', ');
      console.warn(`actionTypes type for ${reducerPath}.${varName} is just support:`, supportedTypes);
      return undefined;
    }
    return actionType;
  };

  const actionCreatorFactory = (varName: string, type = 'set') : ActionCreatorType => {
    const actionCreatorsSet = get(results.actionCreators, varName);
    if (actionCreatorsSet === undefined) {
      console.warn('Cannot find actionCreator for', varName, '. Please check your code');
      return undefined;
    }
    const actionCreator = get(actionCreatorsSet, type);
    if (actionCreator === undefined) {
      const supportedTypes = join(keys(actionCreatorsSet), ', ');
      console.warn(`actionCreator type for ${reducerPath}.${varName} is just support:`, supportedTypes);
      return undefined;
    }
    return actionCreator;
  };

  const selectorFactory = (varName: string) : SelectorType => {
    const selector = get(results.selectors, varName);
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
