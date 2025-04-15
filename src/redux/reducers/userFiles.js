import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {retrieveUser} from '../../storage/loginAuth';
// import {retrieveToken} from '../../storage/loginAuth'; // Import the AsyncStorage retrieval function

// AsyncThunk to fetch user files based on staff_id
export const fetchUserFiles = createAsyncThunk(
  'files/fetchUserFiles',
  async (_, thunkAPI) => {
    try {
      const user = await retrieveUser();
      if (!user || !user.id || !user.token) {
        throw new Error('User not found or missing token');
      }
      console.log('hhhhh', user);
      // console.log('ASAS', token, profileId);
      // Make the API request
      const response = await axios.get(
        `https://staging.memphistours.info/api-operation/user-files/${user.id}`,
        {
          headers: {
            JWToken: user.token,
          },
        },
      );
      console.log('oooo', response);
      const formattedFiles = response.data.user_files.map(item => ({
        id: item.OperationFile.id,
        file_no: item.OperationFile.file_no,
        request_id: item.OperationFile.request_id,
        arrival_date: item.Request.arrival_date,
        departure_date: item.Request.departure_date,
        client_name: item.Client.name,
        department: item.Department.name,
      }));

      return formattedFiles;
    } catch (error) {
      console.log('errorrrrrrrrr', error);
      // return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  },
);

const filesSlice = createSlice({
  name: 'files',
  initialState: {
    files: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUserFiles.fulfilled, (state, action) => {
      state.loading = false;
      state.files = action.payload; // Store the fetched files
      state.error = null;
    });
    builder.addCase(fetchUserFiles.pending, state => {
      state.loading = true; // Set loading to true when the request is in progress
    });
    builder.addCase(fetchUserFiles.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload; // Store the error message
    });
  },
});

export default filesSlice.reducer;
