import {
  isValidNumber,
  isString,
  isBoolean,
  isArray,
  isObject,
} from './fp';

const getType = (value) => {
  if (isValidNumber(value)) {
    return 'number';
  }
  if (isBoolean(value)) {
    return 'boolean';
  }
  if (isString(value)) {
    return 'string';
  }
  if (isArray(value)) {
    return 'array';
  }
  if (isObject(value)) {
    return 'object';
  }
  return 'unknown';
};

export default getType;
