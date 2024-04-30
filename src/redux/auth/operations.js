import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';;

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

// POST @ /users/signup
export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', userData);
      // Після успішної реєстрації додаємо token до HTTP-заголовка
      setToken(data.token);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

// POST @ /users/login
export const logIn = createAsyncThunk('auth/login', async (userData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/login', userData);
    // Після успішного входу додаємо token до HTTP-заголовка
    setToken(data.token);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// POST @ /users/logout
export const logOut = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await axios.post('/users/logout');
    // После успішного логаута, прибираєм token з HTTP-заголовка
    clearToken();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// GET @ /users/current 
export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Забираємо token зі стейту через getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {      
      return thunkAPI.rejectWithValue('Не вдалося отримати користувача');
    }
    // Якщо token є додаємо його до HTTP-заголовка
    setToken(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);