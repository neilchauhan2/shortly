import { GET_URL, URL_ERROR } from "../actions/types";

const initState = {
  url: null
};

const urlReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_URL:
      return {
        ...state,
        url: action.payload
      };

    case URL_ERROR:
      return {
        url: null
      };

    default:
      return state;
  }
};

export default urlReducer;
