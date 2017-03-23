import {
  expect,
} from 'chai';
import set from '../src/actions/shared/set';

describe('set reducerhandler for string', () => {
  const type = 'string';
  const reducerPath = 'reducerPath';
  const name = 'branchName';
  const defaultValue = '';

  const {
    actionType,
    reducerHandler,
  } = set({
    reducerPath,
    name,
    type,
    defaultValue,
  });
  const reducer = reducerHandler[actionType];

  it('should work when undefined', () => {
    const actual = reducer(undefined, {
      type: actionType,
      payload: 'hello',
    });
    const expected = 'hello';
    expect(expected).deep.equal(actual);
  });

  it('should not set number', () => {
    const actual = reducer(undefined, {
      type: actionType,
      payload: 1,
    });
    const expected = '';
    expect(expected).deep.equal(actual);
  });
});

describe('set reducerhandler for number', () => {
  const type = 'number';
  const reducerPath = 'reducerPath';
  const name = 'branchName';
  const defaultValue = 0;

  const {
    actionType,
    reducerHandler,
  } = set({
    reducerPath,
    name,
    type,
    defaultValue,
  });
  const reducer = reducerHandler[actionType];

  it('should work when undefined', () => {
    const actual = reducer(undefined, {
      type: actionType,
      payload: 1,
    });
    const expected = 1;
    expect(expected).deep.equal(actual);
  });

  it('should not set boolean', () => {
    const actual = reducer(undefined, {
      type: actionType,
      payload: true,
    });
    const expected = 0;
    expect(expected).deep.equal(actual);
  });
});

describe('set reducerhandler for boolean', () => {
  const type = 'boolean';
  const reducerPath = 'reducerPath';
  const name = 'branchName';
  const defaultValue = false;

  const {
    actionType,
    reducerHandler,
  } = set({
    reducerPath,
    name,
    type,
    defaultValue,
  });
  const reducer = reducerHandler[actionType];

  it('should work when undefined', () => {
    const actual = reducer(undefined, {
      type: actionType,
      payload: true,
    });
    const expected = true;
    expect(expected).deep.equal(actual);
  });

  it('should not set array', () => {
    const actual = reducer(undefined, {
      type: actionType,
      payload: [true],
    });
    const expected = false;
    expect(expected).deep.equal(actual);
  });
});

describe('set reducerhandler for array', () => {
  const type = 'array';
  const reducerPath = 'reducerPath';
  const name = 'branchName';
  const defaultValue = [];

  const {
    actionType,
    reducerHandler,
  } = set({
    reducerPath,
    name,
    type,
    defaultValue,
  });
  const reducer = reducerHandler[actionType];

  it('should work when undefined', () => {
    const actual = reducer(undefined, {
      type: actionType,
      payload: [1, 2, 3],
    });
    const expected = [1, 2, 3];
    expect(expected).deep.equal(actual);
  });

  it('should not set object', () => {
    const actual = reducer(undefined, {
      type: actionType,
      payload: { a: 1 },
    });
    const expected = [];
    expect(expected).deep.equal(actual);
  });
});

describe('set reducerhandler for object', () => {
  const type = 'object';
  const reducerPath = 'reducerPath';
  const name = 'branchName';
  const defaultValue = {};

  const {
    actionType,
    reducerHandler,
  } = set({
    reducerPath,
    name,
    type,
    defaultValue,
  });
  const reducer = reducerHandler[actionType];

  it('should work when undefined', () => {
    const actual = reducer(undefined, {
      type: actionType,
      payload: {
        a: 1,
      },
    });
    const expected = {
      a: 1,
    };
    expect(expected).deep.equal(actual);
  });

  it('should not set array', () => {
    const actual = reducer(undefined, {
      type: actionType,
      payload: [1, 2, 3],
    });
    const expected = {};
    expect(actual).deep.equal(expected);
  });
});
