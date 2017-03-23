import {
  expect,
} from 'chai';
import makeStateAction from '../src';

describe('makeStateAction', () => {
  describe('Type: Default as string', () => {
    const reducerPath = 'reducerPath';
    const names = [
      'varOne',
      'varTwo',
    ];
    const state = {
      [reducerPath]: {
        varOne: 'varOneText',
        varTwo: 'varTwotext',
      },
    };

    const {
      reducers,
      actionTypeFactory,
      actionCreatorFactory,
      selectorFactory,
    } = makeStateAction({
      reducerPath,
      names,
    });
    it('should have reducers', () => {
      expect(reducers).to.have.property('varOne');
      expect(reducers).to.have.property('varTwo');
      const reducer = reducers.varOne;
      const actual = reducer(undefined, {
        type: 'reducerPath/SET_varOne',
        payload: 'hello',
      });
      const expected = 'hello';
      expect(actual).equal(expected);
    });

    it('should have actionTypeFactory', () => {
      const actual = actionTypeFactory('varOne');
      const expected = 'reducerPath/SET_varOne';
      expect(actual).equal(expected);
    });

    it('should have actionCreatorFactory', () => {
      const actual = actionCreatorFactory('varOne')('hello');
      const expected = {
        type: 'reducerPath/SET_varOne',
        payload: 'hello',
      };
      expect(actual).deep.equal(expected);
    });

    it('should have selectorFactory', () => {
      const actual = selectorFactory('varOne')(state);
      const expected = 'varOneText';
      expect(actual).equal(expected);
    });
  });

  describe('Type: number', () => {
    const reducerPath = 'reducerPath';
    const names = [
      'varOne',
      'varTwo',
    ];
    const options = {
      varOne: {
        type: 'number',
      },
    };
    const state = {
      [reducerPath]: {
        varOne: 1,
        varTwo: 2,
      },
    };

    const {
      reducers,
      actionTypeFactory,
      actionCreatorFactory,
      selectorFactory,
    } = makeStateAction({
      reducerPath,
      names,
      options,
    });

    it('should have reducers work right', () => {
      expect(reducers).to.have.property('varOne');
      expect(reducers).to.have.property('varTwo');
      const reducer = reducers.varOne;
      const actual = reducer(undefined, {
        type: 'reducerPath/SET_varOne',
        payload: 1,
      });
      const expected = 1;
      expect(actual).equal(expected);
    });

    it('should have reducers throw exception when provide wrong value type', () => {
      const reducer = reducers.varOne;
      const actual = reducer(1, {
        type: 'reducerPath/SET_varOne',
        payload: 'hello',
      });
      const expected = 1;
      expect(actual).equal(expected);
    });

    it('should have actionTypeFactory to get SET', () => {
      const actual = actionTypeFactory('varOne');
      const expected = 'reducerPath/SET_varOne';
      expect(actual).equal(expected);
    });

    it('should have actionTypeFactory to get INCREASE', () => {
      const actual = actionTypeFactory('varOne', 'increase');
      const expected = 'reducerPath/INCREASE_varOne';
      expect(actual).equal(expected);
    });

    it('should have actionTypeFactory to get DECREASE', () => {
      const actual = actionTypeFactory('varOne', 'decrease');
      const expected = 'reducerPath/DECREASE_varOne';
      expect(actual).equal(expected);
    });

    it('should have actionTypeFactory to return undefined when get wrong varName', () => {
      const actual = actionTypeFactory('lala', 'set');
      const expected = undefined;
      expect(actual).equal(expected);
    });

    it('should have actionTypeFactory to return undefined when get wrong types', () => {
      const actual = actionTypeFactory('varOne', 'unknown');
      const expected = undefined;
      expect(actual).equal(expected);
    });

    it('should have actionCreatorFactory to get SET', () => {
      const actual = actionCreatorFactory('varOne')(1);
      const expected = {
        type: 'reducerPath/SET_varOne',
        payload: 1,
      };
      expect(actual).to.deep.equal(expected);
    });

    it('should have actionCreatorFactory to get INCREASE', () => {
      const actual = actionCreatorFactory('varOne', 'increase')(1);
      const expected = {
        type: 'reducerPath/INCREASE_varOne',
        payload: 1,
      };
      expect(actual).to.deep.equal(expected);
    });

    it('should have actionCreatorFactory to return undefined when get wrong varName', () => {
      const actual = actionCreatorFactory('lala', 'set');
      const expected = undefined;
      expect(actual).equal(expected);
    });

    it('should have actionCreatorFactory to return undefined when get wrong types', () => {
      const actual = actionCreatorFactory('varOne', 'unknown');
      const expected = undefined;
      expect(actual).equal(expected);
    });

    it('should have selectorFactory work right', () => {
      const actual = selectorFactory('varOne')(state);
      const expected = 1;
      expect(actual).equal(expected);
    });

    it('should have selectorFactory return undefined when get wrong varName', () => {
      const actual = selectorFactory('unknown');
      const expected = undefined;
      expect(actual).equal(expected);
    });
  });
});
