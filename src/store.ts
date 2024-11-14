import { configureStore, createSlice } from '@reduxjs/toolkit';
import initialData from './seed';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: initialData,
  },
  reducers: {
    addPerson: (state, action) => {
      state.data.push({ ...action.payload, id: Date.now().toString() });
      sessionStorage.setItem('data', JSON.stringify(state.data));
    },
    editPerson: (state, action) => {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index > -1) state.data[index] = action.payload;
      sessionStorage.setItem('data', JSON.stringify(state.data));
    },
    removePerson: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload.id);
      sessionStorage.setItem('data', JSON.stringify(state.data));
    },
  },
});

export const { addPerson, editPerson, removePerson } = dataSlice.actions;

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});

export default store;
