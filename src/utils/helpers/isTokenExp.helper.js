import { _localStorage } from "@/utils/lib/localstorage.lib";
import jwt_decode from "jwt-decode";

export const isTokenHasExpired = (token) => {
  const decodeToken = jwt_decode(token);
  const expToken = new Date(decodeToken.exp * 1000).getTime();

  const currentDate = new Date().getTime();

  if (currentDate > expToken) {
    _localStorage.remove("persist:root");
    return true;
  }

  return false;
};
