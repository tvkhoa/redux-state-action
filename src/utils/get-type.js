import {
  isNumber,
  isString,
  isBoolean,
  isArray,
  isObject,
} from 'lodash';

const getType = (value) => {
  if (isNumber(value)) {
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
