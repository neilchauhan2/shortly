import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";
const initState = {
  msg: {},
  status: null,
  id: null
};

const errorReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.msg,
        id: action.payload.id
      };
    case CLEAR_ERRORS:
      return {
        msg: null,
        status: null,
        id: null
      };
    default:
      return state;
  }
};

export default errorReducer;
