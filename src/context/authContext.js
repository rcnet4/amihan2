import { createContext, useMemo, useState } from "react";
import { USR_TOKEN_KEY } from "constants/constants";
import useStorage from "hooks/useStorage";
import { useNavigate } from "react-router-dom";
import AuthService from "services/authService";
import Config from "./../config";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  // Note: We can improve this, by using a Reducer instead of useState
  const [user, setUser] = useStorage(USR_TOKEN_KEY, null);
  const [loggingIn, setLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState();

  const navigate = useNavigate();

  /**
   * Login
   */
  const login = async (data) => {
    const { userName, password } = data;

    setLoggingIn(true);

    const payload = new URLSearchParams();
    payload.append("username", userName);
    payload.append("password", password);
    payload.append("client_id", Config.clientId);
    payload.append("grant_type", "password");

    try {
      let token = await AuthService().login(payload);

      setUser(token.data);

      navigate("/");
    } catch (err) {
      setLoginError(
        err?.response?.data?.error_description ?? "Oopss... unable to login."
      );
    } finally {
      setLoggingIn(false);
    }
  };

  /**
   * Logout
   */
  const logout = () => {
    setUser(null);
    navigate("/auth", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      loggingIn,
      loginError,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user, loggingIn, loginError]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
