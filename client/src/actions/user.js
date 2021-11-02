import {
  LOGIN_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_FAILURE,
  UPDATE_START,
  UPDATE_SUCCESS,
} from "../constants/userTypes";

import { login } from "../services/auth.services";
import { putUser } from "../services/users.services";

export const loginStart = () => {
  return {
    type: LOGIN_START,
  };
};

export const loginSuccess = (user) => async (dispatch) => {
  try {
    const data = await login(user);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
    });
  }
};

//////**********ALTERNATIVE USAGE*******///////
/* export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
}; */

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const updateStart = () => {
  return {
    type: UPDATE_START,
  };
};

export const updateSuccess = (id, user) => async (dispatch) => {
  try {
    const data = await putUser(id, user);
    dispatch({
      type: UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_FAILURE,
    });
  }
};

export const updateFailure = () => {
  return {
    type: UPDATE_FAILURE,
  };
};
