import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
  'posts/fetchAllPosts',
  async function(_, {rejectWithValue}) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      
      if (!response.ok) {
        throw new Error('Server Error!');
      }
      
      const data = await response.json();
      
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
}

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    allPosts: [],
    amountPosts: null,
    limitPost: 10,
    page: 1,
    byId: false,
    byTitle: false,
    byDesc: false,
    status: null,
    error: null,
  },
  reducers: {
    getPage: (state, prevPage) => {
      state.page = prevPage.payload;
    },
    increment: (state) => {
      if (state.page < state.amountPosts / 10) {
        state.page += 1
      }
    },
    decrement: (state) => {
      if (state.page > 1) {
        state.page -= 1
      }
    },
    sortById: (state) => {
      state.byId = !state.byId;
      state.byDesc = false;
      state.byTitle = false;
    },
    sortByTitle: (state) => {
      state.byTitle = !state.byTitle;
      state.byDesc = false;
      state.byId = false;
    },
    sortByDesc: (state) => {
      state.byDesc = !state.byDesc;
      state.byId = false;
      state.byTitle = false;
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.posts = action.payload;
      state.amountPosts = action.payload.length;
    },
    [fetchPosts.rejected]: setError,
  },
});

export const {
  getPage, increment, decrement,
  sortByTitle, sortById, sortByDesc
} = postsSlice.actions;

export default postsSlice.reducer;
