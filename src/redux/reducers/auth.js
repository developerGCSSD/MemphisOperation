import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {removeUser, saveToken} from '../../storage/loginAuth';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({username, password}, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://staging.memphistours.info/api-auth/login',
        {
          Staff: {
            username,
            password,
          },
        },
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: async state => {
      await removeUser();
      state.user = null;
    },

    setUserFromStorage: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.user = action.payload;
      saveToken(state.user);
    });
    builder.addCase(loginUser.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {logout, setUserFromStorage} = authSlice.actions;
export default authSlice.reducer;
