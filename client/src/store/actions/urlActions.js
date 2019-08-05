import axios from "axios";
import { returnErrors } from "./errorActions";
import { GET_URL, URL_ERROR } from "./types";

export const getUrl = longUrl => dispatch => {
  axios
    .post(`/api/url/shorten`, {
      longUrl
    })
    .then(res => res.data)
    .then(data => {
      dispatch({
        type: GET_URL,
        payload: data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, "URL_ERROR"));
      dispatch({
        type: URL_ERROR
      });
    });
};
