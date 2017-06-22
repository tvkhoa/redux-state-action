import {
  get,
} from './utils/fp';

const getDefaultValueByType = (type) => {
  const values = {
    string: '',
    number: 0,
    boolean: false,
    array: [],
    object: {},
  };

  return get(type, '')(values);
};

export default getDefaultValueByType;
