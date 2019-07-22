import axios from "axios";
import { returnErrors } from "./errorActions";

import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./types";

// Load User
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axios
    .get(`http://localhost:8000/api/auth/user`, tokenConfig(getState))
    .then(res => res.data)
    .then(data => {
      dispatch({
        type: USER_LOADED,
        payload: data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

// Register User
export const register = userCredentials => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  const body = JSON.stringify({
    ...userCredentials
  });

  axios
    .post(`http://localhost:8000/api/auth/signup`, body, config)
    .then(res => res.data)
    .then(data => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

// Login User
export const login = userCredentials => dispatch => {
  const body = JSON.stringify({
    ...userCredentials
  });

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  axios
    .post(
      `http://localhost:8000/api/auth/login`,

      body,
      config
    )
    .then(res => res.data)
    .then(data => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN FAIL")
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

// Setup config/headers and token
export const tokenConfig = getState => {
  // Get token from localStorage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  // if token available add it to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
