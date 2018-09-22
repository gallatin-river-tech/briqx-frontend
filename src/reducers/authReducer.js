import * as types from "./../actions/types";

function authState() {
  return {
    user: null,
    token: null,
    registerXHR: false,
    registerError: null,
    loginXHR: false,
    loginError: null,
    register: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordCheck: '',
    },
    login: {
      email: '',
      password: '',
    },
  };
}

export default function reducer(state = authState(), action) {
  let { type, payload } = action;

  switch(type) {
    // Register
    case types.SET_REGISTER_FIELD: 
      return {
        ...state,
        register: {
          ...state.register,
          ...payload,
        },
      };

    case types.REGISTER_REQUEST:
      return {
        ...state,
        registerXHR: true,
      };

    case types.REGISTER_SUCCESS:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        registerXHR: false,
        registerError: null,
      };

    case types.REGISTER_SUCCESS:
      return {
        ...state,
        registerXHR: false,
        registerError: payload.error,
      };

    // Login
    case types.SET_LOGIN_FIELD:
      return {
        ...state,
        login: {
          ...state.login,
          ...payload,
        },
      };

    case types.LOGIN_REQUEST:
      return {
        ...state,
        loginXHR: true,
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        loginXHR: false,
        loginError: null,
      };


    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loginXHR: false,
        loginError: payload.error,
      };

  }
}
