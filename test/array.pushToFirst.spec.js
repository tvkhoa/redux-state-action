import {
  expect,
} from 'chai';
import pushToFirst from '../src/actions/array/pushToFirst';

describe('pushToFirst reducerhandler', () => {
  const reducerPath = 'reducerPath';
  const name = 'branchName';
  const {
    actionType,
    reducerHandler,
  } = pushToFirst({
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
    const expected = ['2', '1'];
    expect(expected).deep.equal(actual);
  });
});
