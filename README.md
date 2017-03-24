# Make state action

Make your life easier when using react redux.

Just one command to create reducers, action creators and selectors.

## Getting started

```
npm install redux-state-action --save

```

```
yarn add redux-state-action

```

## How to use

### Example

```javascript

// state.js

import makeStateAction from 'redux-state-action';

...
const reducerPath = 'eh/sharingOptionModal';
const names = {
  isOpen: 'boolean',
  content: 'string',
  count: {
    type: 'number',
    defaultValue: 0,
  },
};

export const {
  branch,
  reducers,
  actionCreatorFactory,
  selectorFactory,
} = makeStateAction({
  reducerPath,
  names,
});


// branch is the same with code below

// Reducer
export const reducer = combineReducers({
  ...reducers,
});

export default { [reducerPath]: reducer };

```

You will need to use `actionCreatorFactory` and `selectorFactory` in your component

```javascript

// actionCreatorFactory
const setIsOpenActionCreator = actionCreatorFactory('isOpen');
const toggleIsOpenActionCreator = actionCreatorFactory('isOpen', 'toggle');
const setContentActionCreator = actionCreatorFactory('content');

// selectorFactory

const isOpenSelector = actionCreatorFactory('isOpen');
const contentSelector = actionCreatorFactory('content');
const countSelector = actionCreatorFactory('count');

```


## makeStateAction spec

### Params


```javascript

makeStateAction({
  reducerPath,
  names,
});

```

#### reducerPath

This is branch name in your redux store

#### names

This is an object with

> key: name of variable you want to have

> value: options for this variable

Example:

```javascript
const names = {
  isOpen: 'boolean', // Short hand of type boolean
  content: 'string', // Short hand of type string
  count: {
    type: 'number',
    defaultValue: 0,
  },
};

```

### Supported variable types

> string

> boolean

> number

> array

> object


## Result of makeStateAction

### reducers

Object with key is names and combined reducer of them.

Notes:

> Just only use reducers when you want to extend it. If not, use branch instead

> reducerPath must be the same

```javascript
// Reducer
export const reducer = combineReducers({
  ...reducers,
});

export default { [reducerPath]: reducer };
```

### branch

makeStateAction also return branch.

It is an object with key is reducerPath and value is reducers.

You can import `branch` into `rootReducer` ( same as what you do with `{ [reducerPath]: reducer }` )


### actionCreatorFactory,

Function that return actionCreator

```javascript
const actionCreatorFactory = (varName: string, actionType = 'set') => {
  ...
}

```

> varName: name of variable

> type: With each variable type, there is a set of default actionType that makeStateAction is supported. See the section `Supported action types` below.


### actionTypeFactory

Function that return action type

```javascript
const actionTypeFactory = (varName: string, actionType = 'set') => {
  ...
}

```

> varName: name of variable

> type: With each variable type, there is a set of default actionType that makeStateAction is supported. See the section `Supported action types` below.


### selectorFactory,

Function that return selector

```javascript
const selectorFactory = (varName: string) : SelectorType => {
  ...
}

```

> varName: name of variable

## Supported action types

### For all

> set

### object

> assign

> omit

### array

> push

> pushToFirst

> remove

> filter

### number

> increase

> decrease
