import * as types from "./types";

/*================================================================================
Auth
================================================================================*/

// Register

export function setRegisterField(key, value){
  return {
    type: types.SET_REGISTER_FIELD,
    payload: {
      [key]: value
    }
  };
}

export function registerRequest(deviceUniqueId) {
  return {
    type: types.REGISTER_REQUEST,
    payload: {
      deviceUniqueId
    }
  };
}

export function registerSucess(user, token) {
  return {
    type: types.REGISTER_SUCCESS,
    payload: {
      user,
      token
    }
  };
}

export function registerFailure(error) {
  return {
    type: types.REGISTER_FAILURE,
    payload: {
      error
    }
  };
}


// Login
export function setLoginField(key, value) {
  return {
    type: types.SET_LOGIN_FIELD,
    payload: {
      [key]: value
    }
  };
}

export function loginRequest(deviceUniqueId) {
  return {
    type: types.LOGIN_REQUEST,
    payload: {
      deviceUniqueId,
    },
  };
}

export function loginSucess(user, token) {
  return {
    type: types.LOGIN_SUCCESS,
    payload: {
      user,
      token,
    },
  };
}

export function loginFailure(error) {
  return {
    type: types.LOGIN_FAILURE,
    payload: {
      error,
    },
  };
}

