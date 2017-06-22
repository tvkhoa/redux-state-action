// Basic
const fold = (fn, initial, arr) => arr.reduce(fn, initial);

const keys = (obj) => Object.keys(obj);
const isArray = (value) => (value !== null && Array.isArray(value));
const isObject = (value) => (value !== null && typeof value === 'object');
const isString = (value) => (value !== null && typeof value === 'string');
const isFunction = (value) => (value !== null && typeof value === 'function');
const isBoolean = (value) => (value !== null && typeof value === 'boolean');
const isNumber = (value) => (value !== null && typeof value === 'number');
const join = (fn, arg) => (arg ? arg.join(fn) : arg2 => arg2.join(fn));
const split = (matcher, arg) => (arg ? arg.split(matcher) : arg2 => arg2.split(matcher));
const map = (fn, arg) => (arg ? arg.map(fn) : arg2 => arg2.map(fn));
const filter = (fn, arg) => (arg ? arg.filter(fn) : arg2 => arg2.filter(fn));
const isValidNumber = (value) => (
  value !== null && !isNaN(value) && typeof value === 'number'
);
const property = (prop, arg) => (arg ? arg[prop] : arg2 => arg2[prop]);


// Transform multisteps
const omitObject = (props, obj) => {
  const normalizedProps = isArray(props) ? props : [props];
  return normalizedProps.reduce(
    (newObj, val) => (({ [val]: dropped, ...rest }) => rest)(newObj),
    obj
  );
};

const subGet = (subPath, origin) => {
  const elements = subPath.split('[');
  const prop = elements[0];
  const arrayIndex = elements[1] ? parseInt(elements[1].replace(']', ''), 10) : undefined;
  if (!prop && !isValidNumber(arrayIndex)) {
    return undefined;
  }
  if (prop && !isValidNumber(arrayIndex)) {
    return origin[prop];
  }
  if (!prop && isValidNumber(arrayIndex)) {
    return origin[arrayIndex];
  }
  return origin[prop][arrayIndex];
};

export const getCollection = (pathString, defaultValue, origin) => {
  const value = pathString.split('.').reduce((result, subPath) => (
    isObject(result) ? subGet(subPath, result) : undefined
  ), origin);

  return value !== undefined ? value : defaultValue;
};

const reduceCollection = (fn, initialValue, arg) => {
  if (isArray(arg)) {
    return fold(fn, initialValue, arg);
  }
  const newFn = (result, key) => fn(result, arg[key], key);
  return fold(newFn, initialValue, keys(arg));
};

const mapValuesObject = (fn, arg) => {
  const mapFn = isFunction(fn) ? fn : property(fn);
  return reduceCollection(
    (result, value, key) => ({
      ...result,
      [key]: mapFn(value),
    }),
    {},
    arg,
  );
};

const matches = (object) => (origin) => reduceCollection(
  (result, value, key) => (
    result ? origin[key] === value : false
  ),
  true,
  object,
);

const without = (...args) => (arrOrigin) => reduceCollection(
  (result, value) => (
    args.includes(value) ? result :
    [
      ...result,
      value,
    ]
  ),
  [],
  arrOrigin,
);
// Export with curry
export {
  keys,
  isArray,
  isBoolean,
  isObject,
  isString,
  isFunction,
  join,
  split,
  map,
  isValidNumber,
  isNumber,
  property,
  filter,
  matches,
  without,
};

export const omit = (props, arg) => (
  arg ? omitObject(props, arg) : arg2 => omitObject(props, arg2)
);

export const mapValues = (fn, arg) => (
  arg ? mapValuesObject(fn, arg) : arg2 => mapValuesObject(fn, arg2)
);

export const get = (path, defaultValue, arg) =>
  (arg ? getCollection(path, defaultValue, arg) :
  arg2 => getCollection(path, defaultValue, arg2));

export const reduce = (fn, initialValue, arg) =>
  (arg ? reduceCollection(fn, initialValue, arg) :
  arg2 => reduceCollection(fn, initialValue, arg2));
