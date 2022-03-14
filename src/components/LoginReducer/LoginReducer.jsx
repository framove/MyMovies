import React, { useReducer } from "react";
import { login } from "./login";
import { MyForm, Title, Button, Title2, Input, Welcome } from "./styles";
import Movies from "../Movies/Movies"
import { useTheme } from "../ThemeContext/ThemeContext";
import LogoutIcon from '@mui/icons-material/Logout';

function reducer(state, action) {
  /* console.log(state);
  console.log(action); */
  switch (action.type) {
    case "inputFields": {
      return {
        ...state,
        [action.inputName]: action.payload, // [name]: value
      };
    }
    case "login": {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    }
    case "success": {
      return {
        ...state,
        isLoggedIn: true,
      };
    }
    case "error": {
      //debugger
      return {
        ...state,
        error: "Incorret username or password...",
        isLoading: false,
        isLoggedIn: false,
        username: "",
        password: "",
      };
    }
    case "logout": {
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        username: "",
        password: "",
      };
    }
    default:
      return state;
  }
}

const initialState = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
};

export default function LoginReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { username, password, isLoading, error, isLoggedIn } = state;

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "login" });

    try {
      await login({ username, password });
      dispatch({ type: "success" });
    } catch (error) {
      //debugger
      dispatch({ type: "error" });
    }
  };

  const darkTheme = useTheme();

    const theme = {
    color: darkTheme ? "#f8f9fa" : "#16161a",
    
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
        <Welcome>
          <Title2 style={theme}>Hello {username}</Title2>
          
          <LogoutIcon
            onClick={() => {
              dispatch({ type: "logout" });
            }}
            fontSize="medium" sx={{ color: "#00abb5" }} />
        </Welcome>
          <Movies />
        </>
          
      ) : (
        <MyForm onSubmit={onSubmit}>
          {error && <p>{error}</p>}
          <Title style={theme}>Please login!</Title>
          <Input
            type='text'
            value={username}
            onChange={(e) =>
              dispatch({
                type: "inputFields",
                inputName: "username",
                payload: e.target.value,
              })
            }
          />
          <Input
            type='password'
            value={password}
            onChange={(e) =>
              dispatch({
                type: "inputFields",
                inputName: "password",
                payload: e.target.value,
              })
            }
          />
          <Button type='submit'>{isLoading ? "Logging in..." : "Login"}</Button>
        </MyForm>
        
      )}
    </div>
    
  );
}