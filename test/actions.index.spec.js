import {
  expect,
} from 'chai';
import {
  getActionCreatorSet,
  getActionTypeSet,
  getReducerHandlerSet,
  combineReducerHanlders,
} from '../src/actions';


const actionsDataSet = {
  set: {
    actionCreator: () => ({
      type: 'set',
    }),
    actionType: 'setType',
    reducerHandler: {
      setType: () => 'setHandler',
    },
  },
  update: {
    actionCreator: () => ({
      type: 'update',
    }),
    actionType: 'updateType',
    reducerHandler: {
      updateType: () => 'updateHandler',
    },
  },
};

describe('getActionCreatorSet', () => {
  it('should work', () => {
    const actual = getActionCreatorSet(actionsDataSet);
    const expected = {
      set: () => ({
        type: 'set',
      }),
      update: () => ({
        type: 'update',
      }),
    };
    expect(actual.set()).to.deep.equal(expected.set());
    expect(actual.update()).to.deep.equal(expected.update());
  });
});

describe('getActionTypeSet', () => {
  it('should work', () => {
    const actual = getActionTypeSet(actionsDataSet);
    const expected = {
      set: 'setType',
      update: 'updateType',
    };
    expect(actual).to.deep.equal(expected);
  });
});

describe('getReducerHandlerSet', () => {
  it('should work', () => {
    const actual = getReducerHandlerSet(actionsDataSet);
    const expected = {
      set: {
        setType: () => 'setHandler',
      },
      update: {
        updateType: () => 'updateHandler',
      },
    };
    expect(actual.set.setType()).to.deep.equal(expected.set.setType());
    expect(actual.update.updateType()).to.deep.equal(expected.update.updateType());
  });
});

describe('combineReducerHanlders', () => {
  it('should work', () => {
    const reducerHandlerSet = getReducerHandlerSet(actionsDataSet);
    const actual = combineReducerHanlders(reducerHandlerSet);
    const expected = {
      setType: () => 'setHandler',
      updateType: () => 'updateHandler',
    };
    expect(actual.setType()).to.deep.equal(expected.setType());
    expect(actual.updateType()).to.deep.equal(expected.updateType());
  });
});
