import { createAction } from 'redux-actions';

export default ({
  reducerPath,
  name,
}) => {
  const actionType = `${reducerPath}/TOGGLE_${name}`;
  const actionCreator = createAction(actionType);
  const reducerHandler = {
    [actionType]: (state) => !state,
  };

  return {
    actionType,
    actionCreator,
    reducerHandler,
  };
};
