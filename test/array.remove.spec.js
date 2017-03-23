import {
  expect,
} from 'chai';
import remove from '../src/actions/array/remove';

describe('Remove reducerhandler', () => {
  const reducerPath = 'reducerPath';
  const name = 'branchName';
  const {
    actionType,
    reducerHandler,
  } = remove({
    reducerPath,
    name,
  });
  const reducer = reducerHandler[actionType];

  it('should work when undefined', () => {
    const actual = reducer(undefined, {
      type: actionType,
      payload: 'hello',
    });
    const expected = [];
    expect(expected).deep.equal(actual);
  });

  it('should remove item from existance array', () => {
    const actual = reducer(['1', '2'], {
      type: actionType,
      payload: '2',
    });
    const expected = ['1'];
    expect(expected).deep.equal(actual);
  });

  it('should remove multiple items from existance array', () => {
    const actual = reducer(['1', '2', '3'], {
      type: actionType,
      payload: ['1', '3'],
    });
    const expected = ['2'];
    expect(actual).deep.equal(expected);
  });

  it('should remove object from existance array', () => {
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
      a: 2,
      b: 3,
    }];
    expect(actual).deep.equal(expected);
  });
});
