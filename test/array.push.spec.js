import {
  expect,
} from 'chai';
import push from '../src/actions/array/push';

describe('push reducerhandler', () => {
  const reducerPath = 'reducerPath';
  const name = 'branchName';
  const {
    actionType,
    reducerHandler,
  } = push({
    reducerPath,
    name,
  });
  const reducer = reducerHandler[actionType];

  it('should work when undefined', () => {
    const actual = reducer(undefined, {
      type: actionType,
      payload: 'hello',
    });
    const expected = ['hello'];
    expect(expected).deep.equal(actual);
  });

  it('should add item to existance array', () => {
    const actual = reducer(['1'], {
      type: actionType,
      payload: '2',
    });
    const expected = ['1', '2'];
    expect(expected).deep.equal(actual);
  });
});
