import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";

export const fetchPost = createAsyncThunk(
  "post/fetchPostStatus",
  async () => {
    try {
      const fetchPostData = await fetch("http://localhost:3001/data");
      const data = await fetchPostData.json();
      return data;
    } catch (err) {
      return isRejectedWithValue(err.response.data);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState: {
    post: [],
    loading: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchPost.fulfilled]: (state, action) => {
      state.post = action.payload;
      state.loading = false;
    },
    [fetchPost.pending]: (state, action) => {
      state.post = null;
      state.loading = true;
    },
    [fetchPost.rejected]: (state, action) => {
      state.post = null;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
