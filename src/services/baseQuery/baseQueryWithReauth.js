import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { tokenReceived } from "@/store/auth/auth.slice";
import { logout } from "@/store/auth/auth.action";

const baseQuery = fetchBaseQuery({ baseUrl: "/" });

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery("/refreshToken", api, extraOptions);
    if (refreshResult.data) {
      api.dispatch(tokenReceived(refreshResult.data));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};
