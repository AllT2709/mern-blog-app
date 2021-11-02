import {
  LOGIN_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  UPDATE_FAILURE,
  UPDATE_START,
  UPDATE_SUCCESS,
  LOGOUT,
} from "../constants/userTypes";

let initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        user: null,
        isFetching: true,
        error: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        isFetching: false,
        error: true,
      };
    case UPDATE_START:
      return {
        ...state,
        isFetching: true,
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case UPDATE_FAILURE:
      return {
        ...state,
        user: state.user,
        isFetching: false,
        error: true,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};
