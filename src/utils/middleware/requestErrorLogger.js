import { isRejectedWithValue } from "@reduxjs/toolkit";

export const requestErrorLogger = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const { method, headers } = action.meta.baseQueryMeta.request;

    console.group("ERROR " + action.meta.baseQueryMeta.request.url);
    console.log({
      request: {
        method,
        headers,
      },
      payload: {
        ...action.payload,
      },
    });
    console.groupEnd();
  }

  return next(action);
};
