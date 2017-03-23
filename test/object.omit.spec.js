import {
  expect,
} from 'chai';
import omit from '../src/actions/object/omit';

describe('omit reducerhandler', () => {
  const reducerPath = 'reducerPath';
  const name = 'branchName';
  const {
    actionType,
    reducerHandler,
  } = omit({
    reducerPath,
    name,
  });
  const reducer = reducerHandler[actionType];

  it('should work when undefined', () => {
    const actual = reducer(undefined, {
      type: actionType,
      payload: '1',
    });
    const expected = {};
    expect(actual).deep.equal(expected);
  });

  it('should omit item from existance object when condition is string', () => {
    const actual = reducer({
      a: 1,
      b: 2,
    }, {
      type: actionType,
      payload: 'a',
    });
    const expected = {
      b: 2,
    };
    expect(expected).deep.equal(actual);
  });

  it('should omit item if condition is array of string', () => {
    const actual = reducer({
      a: 1,
      b: 2,
      c: 3,
    }, {
      type: actionType,
      payload: ['a', 'b'],
    });
    const expected = {
      c: 3,
    };
    expect(expected).deep.equal(actual);
  });

  it('should not item if condition has wrong type', () => {
    const actual = reducer({
      a: 1,
      b: 2,
      c: 3,
    }, {
      type: actionType,
      payload: 1,
    });
    const expected = {
      a: 1,
      b: 2,
      c: 3,
    };
    expect(expected).deep.equal(actual);
  });
});
