import * as React from 'react';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';

const initialState = {
  user: null,
};

if (typeof window !== 'undefined') {
  if (window.localStorage.getItem('JWTTOKEN')) {
    const decoded = jwtDecode(localStorage.getItem('JWTTOKEN'));
    if (decoded.exp * 1000 < Date.now()) {
      window.localStorage.removeItem('JWTTOKEN');
    } else {
      initialState.user = decoded;
    }
  }
}

const AuthContext = React.createContext({
  authenticated: false,
  user: null,
  logout: () => {},
  login: (data) => {},
});

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        authenticated: false,
      };
    default:
      return state;
  }
}

function AuthProvider(props) {
  const history = useRouter();

  const [state, dispatch] = React.useReducer(authReducer, initialState);
  function login(userData) {
    window.localStorage.setItem('JWTTOKEN', userData.token);
    dispatch({ type: 'LOGIN', payload: userData });
    if (userData.admin) {
      history.push('/admin/events');
    } else {
      history.push('/');
    }
  }
  function logout() {
    window.localStorage.removeItem('JWTTOKEN');
    dispatch({ type: 'LOGOUT' });
    history.push('/event');
  }
  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
}
export { AuthContext, AuthProvider };
