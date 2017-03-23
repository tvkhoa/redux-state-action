import {
  expect,
} from 'chai';
import filter from '../src/actions/array/filter';

describe('filter reducerhandler', () => {
  const reducerPath = 'reducerPath';
  const name = 'branchName';
  const {
    actionType,
    reducerHandler,
  } = filter({
    reducerPath,
    name,
  });
  const reducer = reducerHandler[actionType];

  it('should work when undefined', () => {
    const actual = reducer(undefined, {
      type: actionType,
      payload: {
        a: 2,
        b: 3,
      },
    });
    const expected = [];
    expect(expected).deep.equal(actual);
  });

  it('cannot filter if not array of object', () => {
    const actual = reducer(['1', '2'], {
      type: actionType,
      payload: {
        a: 2,
        b: 3,
      },
    });
    const expected = [];
    expect(expected).deep.equal(actual);
  });

  it('cannot filter if condition is not object', () => {
    const actual = reducer([
      {
        a: 1,
        b: 2,
      },
      {
        a: 2,
        b: 3,
      },
    ], {
      type: actionType,
      payload: 'hello',
    });
    const expected = [
      {
        a: 1,
        b: 2,
      },
      {
        a: 2,
        b: 3,
      },
    ];
    expect(expected).deep.equal(actual);
  });


  it('should filter array of object', () => {
    const actual = reducer([
      {
        a: 1,
        b: 2,
      },
      {
        a: 2,
        b: 3,
      },
    ], {
      type: actionType,
      payload: {
        a: 1,
      },
    });
    const expected = [{
      a: 1,
      b: 2,
    }];
    expect(actual).deep.equal(expected);
  });
});
