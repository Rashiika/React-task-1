import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT, 
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,

} from "./ActionTypes";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  jwt: null, 
  success: null, 
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
  
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_USER_REQUEST:
    case LOGOUT_REQUEST:
      return { ...state, isLoading: true, error: null, success: null };

    
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
     
      return {
        ...state,
        isLoading: false,
        jwt: action.payload,
        success: "Successful",
      };

   
    case GET_USER_SUCCESS:
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        success: action.type === UPDATE_USER_SUCCESS ? "Details Updated Successfully" : null
      };
      case LOGOUT: 
    case LOGOUT_SUCCESS: 
      return initialState;

    
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case GET_USER_FAILURE:
    case LOGOUT_FAILURE: 
      const failureState = { ...state, isLoading: false, error: action.payload, success: null };

      return failureState;

    
    default:
      return state;
  }
};