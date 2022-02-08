import { AUTHENTICATE, LOGOUT } from '../actions/Auth';

const initialState = {
  token: null,
  isAuthenticated: false,
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        token: action.token,
        isAuthenticated: true,
        isLoading: false,
        // userId: action.userId,
      };
    case 'RESTORE_TOKEN':
      return {
        token: action.token,
        isAuthenticated: true,
        isLoading: false,
        // userId: action.userId,
      };
    case LOGOUT:
      return {
        token: null,
        isAuthenticated: false,
      };
    // case SIGNUP:
    //   return {
    //     token: action.token,
    //     userId: action.userId
    //   };
    default:
      return state;
  }
};
