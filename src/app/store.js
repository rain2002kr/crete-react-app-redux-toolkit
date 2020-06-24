import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import counterReducer2 from '../features/counter/counterSlice2';
import loginReducer from '../features/counter/loginSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    counter2: counterReducer2,
    login: loginReducer,
  },
});
