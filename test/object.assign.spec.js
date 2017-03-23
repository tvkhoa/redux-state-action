import {
  expect,
} from 'chai';
import assign from '../src/actions/object/assign';

describe('Assign reducerhandler', () => {
  const reducerPath = 'reducerPath';
  const name = 'branchName';
  const {
    actionType,
    reducerHandler,
  } = assign({
    reducerPath,
    name,
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
    expect(actual).deep.equal(expected);
  });

  it('should add item to existance object', () => {
    const actual = reducer({
      a: 1,
    }, {
      type: actionType,
      payload: {
        b: 2,
      },
    });
    const expected = {
      a: 1,
      b: 2,
    };
    expect(expected).deep.equal(actual);
  });

  it('should not add item if item is not object', () => {
    const actual = reducer({
      a: 1,
    }, {
      type: actionType,
      payload: 2,
    });
    const expected = {
      a: 1,
    };
    expect(expected).deep.equal(actual);
  });

  it('should override item if have same prop', () => {
    const actual = reducer({
      a: 1,
    }, {
      type: actionType,
      payload: {
        a: 2,
      },
    });
    const expected = {
      a: 2,
    };
    expect(expected).deep.equal(actual);
  });
});
