import { Cookie } from "@/utils/lib/cookies.lib";

export const removeToken = (token) => {
  Cookie.remove("token");
};
