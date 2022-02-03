import { createSlice } from "@reduxjs/toolkit";

export const faceSlice = createSlice({
  name: "faceSlice",
  initialState: {
    isShowMessage: false,
  },
  reducers: {
    onClickMessage: (state) => {
      state.isShowMessage = !state.isShowMessage;
    },
  },
});

export const { onClickMessage } = faceSlice.actions;

export default faceSlice.reducer;
