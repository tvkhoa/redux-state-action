import {
  expect,
} from 'chai';
import {
  get,
} from '../src/utils/fp';

describe('Get function', () => {
  it('should work with path is one element', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
    };
    const path = 'a';
    const actual = get(path)(obj);
    const expected = 1;
    expect(actual).equal(expected);
  });

  it('should work with path is 2 elements', () => {
    const obj = {
      a: {
        d: 1,
      },
      b: 2,
      c: 3,
    };
    const path = 'a.d';
    const actual = get(path, undefined, obj);
    const expected = 1;
    expect(actual).equal(expected);
  });

  it('should work with path is 2 elements and default value', () => {
    const obj = {
      a: {
        d: 1,
      },
      b: 2,
      c: 3,
    };
    const path = 'a.e';
    const actual = get(path, 'default')(obj);
    const expected = 'default';
    expect(actual).equal(expected);
  });

  it('should work with path is 2 elements without default value', () => {
    const obj = {
      a: {
        d: 1,
      },
      b: 2,
      c: 3,
    };
    const path = 'a.e';
    const actual = get(path)(obj);
    const expected = undefined;
    expect(actual).equal(expected);
  });

  it('should work with array element', () => {
    const obj = [
      {
        d: 1,
      },
      2,
      3,
    ];
    const path = '[1]';
    const actual = get(path)(obj);
    const expected = 2;
    expect(actual).equal(expected);
  });

  it('should work with invalid array element', () => {
    const obj = [
      {
        d: 1,
      },
      2,
      3,
    ];
    const path = '[a]';
    const actual = get(path)(obj);
    const expected = undefined;
    expect(actual).equal(expected);
  });

  it('should work with combination obj path and array element', () => {
    const obj = [
      {
        d: [
          6,
          7,
          8,
        ],
      },
      2,
      3,
    ];
    const path = '[0].d[2]';
    const actual = get(path)(obj);
    const expected = 8;
    expect(actual).equal(expected);
  });

  it('should work with complex obj path and array element', () => {
    const obj = [
      {
        d: {
          e: [
            6,
            7,
            8,
          ],
        },
      },
      2,
      3,
    ];
    const path = '[0].d.e[2]';
    const actual = get(path)(obj);
    const expected = 8;
    expect(actual).equal(expected);
  });
});
