import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async function(page, {rejectWithValue}) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
      
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

export const fetchAllPosts = createAsyncThunk(
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
    page: 1,
    status: null,
    error: null,
  },
  reducers: {
    getPage: (state, prevPage) => {
      console.log(1);
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
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.posts = action.payload;
    },
    [fetchPosts.rejected]: setError,
    
    //All posts
    [fetchAllPosts.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchAllPosts.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.allPosts = action.payload;
      state.amountPosts = action.payload.length;
    },
    [fetchAllPosts.rejected]: setError,
  },
});

export const {getPage, increment, decrement} = postsSlice.actions;

export default postsSlice.reducer;
