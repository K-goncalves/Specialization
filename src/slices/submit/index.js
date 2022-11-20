import { createSlice } from "@reduxjs/toolkit";

export const submitSlice = createSlice({
  name: "submit",
  initialState: {
    loading: false,
    error: null,
    list: [],
    //success: false
  },
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    errorMessage: (state, { payload }) => {
      return {
        ...state,
        loading: false,
        error: {
          message: payload,
        },
      };
    },
  },
});
