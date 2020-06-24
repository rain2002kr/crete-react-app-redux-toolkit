import { createSlice } from '@reduxjs/toolkit';

export const counterSlice2 = createSlice({
  name: 'counter2',
  initialState: {
    value:0,
    value2 :0,
    value3 :0
    
  },
  reducers: {
    increment1: state => {
      state.value += 1;
    },
    decrement1: state => {
      state.value -= 1;
    },
    incrementByAmount1: (state, action) => {
      state.value += action.payload;
    },
    increment2: state => {
      state.value2 += 1;
    },
    decrement2: state => {
      state.value2 -= 1;
    },
    
  },
});

export const {  increment1, decrement1, incrementByAmount1,
                increment2, decrement2 } = counterSlice2.actions;

export const incrementAsync1 = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount1(amount));
  }, 1000);
};

export const selectCount2 = state => state.counter2.value2;
export const selectValues = state => state.counter2;

export default counterSlice2.reducer;
