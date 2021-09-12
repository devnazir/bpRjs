import { Cookie } from "@/utils/lib/cookies.lib";
import jwt_decode from "jwt-decode";

export const saveToken = (token) => {
  const decode = jwt_decode(token);
  const expToken = new Date(decode.exp * 1000).getTime();

  Cookie.set({
    key: "token",
    value: token,
    path: "",
    secure: true,
    expires: new Date(expToken).getDate(),
  });
};
