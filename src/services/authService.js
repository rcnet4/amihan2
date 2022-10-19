import Http from "core/http";

const AuthService = () => {
  let http = Http();

  const login = (payload) =>
    http.post(`/token`, payload);

  return { login };
};

export default AuthService;
