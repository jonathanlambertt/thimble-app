import createDataContext from "../createDataContext";
import * as SecureStore from "expo-secure-store";

const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { isLoading: false, token: action.payload };
    case "logout":
      return { ...state, token: null };
    case "set_is_loading":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

const logIn = (dispatch) => (token) => {
  dispatch({ type: "login", payload: token });
};

const logOut = (dispatch) => async () => {
  try {
    await SecureStore.deleteItemAsync("token");
  } catch (error) {}
  dispatch({ type: "logout" });
};

const setIsLoading = (dispatch) => (bool) => {
  dispatch({ type: "set_is_loading", payload: bool });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { logIn, setIsLoading, logOut },
  { isLoading: true, token: null }
);
