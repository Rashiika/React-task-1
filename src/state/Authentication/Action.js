import axios from "axios";
import {
  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE,
  LOGOUT,
} from "./ActionTypes";
import { api, API_URL } from "../../Config/api";


export const registerUser = (reqData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
      const { data } = await axios.post(
        `${API_URL}/user/register`,
        reqData.userData
      );
      if (data.jwt) localStorage.setItem("jwt", data.jwt);
      reqData.navigate("/");
      dispatch({type:REGISTER_SUCCESS, payload: data.jwt})
      console.log("register success", data)
    } catch (error) {
      dispatch({type:REGISTER_FAILURE, payload:error.response.data.message || error.message})
      console.log("error", error);
    }
  };
  
  export const loginUser = (reqData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const { data } = await axios.post(
        `${API_URL}/user/login`,
        reqData.userData
      );
      if (data.jwt) localStorage.setItem("jwt", data.jwt);
      reqData.navigate("/")
      dispatch({type:LOGIN_SUCCESS, payload: data.jwt})
      console.log("Login success", data)
    } catch (error) {
      dispatch({type:LOGIN_FAILURE, payload:error.response.data.message || error.message})
      console.log("error", error);
    }
  };
  
  export const getUser = (jwt) => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    try {
      const { data } = await api.get(
        `/user/getUser`,{
          headers:{
              Authorization:`Bearer ${jwt}`
          }
        }
      );
      dispatch({type:GET_USER_SUCCESS, payload: data.data})
      console.log("user profile", data)
    } catch (error) {
      dispatch({type:GET_USER_FAILURE, payload:error.response.data.message || error.message})
      console.log("error", error);
    }
  };
  
  
  export const logout = (navigate) => async (dispatch) => {
    try {
      localStorage.clear()
      dispatch({type:LOGOUT})
      if(navigate) navigate("/login") 
      console.log("logout success")
    } catch (error) {
      console.log("error during local logout", error);
    }
  };
  
