import { createSlice } from '@reduxjs/toolkit';
//카운터 슬라이스는 (액션+리듀서) 이다. 
export const counterSlice = createSlice({
  //액션 타입 문자열의 prefix 로 들어간다. ex)counter
  //
  name: 'counter',
  //초기값
  initialState: {
    value: 0,
  },
  //리듀서 맵 
  reducers: 
  {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

//액션 타입 내보내기
export const { increment, decrement, incrementByAmount } 
= counterSlice.actions;

//액션 타입 내보내기
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

//액션 타입 내보내기
export const selectCount = state => state.counter.value;


export default counterSlice.reducer;
