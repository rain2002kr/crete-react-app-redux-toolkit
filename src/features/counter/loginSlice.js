import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login_signup',
  initialState: {
    mode:'login',
    log_id:null,
    log_pass:null,  
    lists:[
        {id:'',password:'',dsc:''}
    ],
    
  },
  reducers: {
    signup: (state,action) => {
      let _id  = action.payload.id;
      let _password  = action.payload.password;
      let _dsc  = action.payload.dsc;
      if(_dsc==null){
        _dsc="아무입력안됨";
      }
      state.lists.push({id:_id,password:_password,dsc:_dsc})
    }
    
  },
});

export const {  signup } = loginSlice.actions;

//액션 타입 내보내기
export const selectlists = state => state.counter.lists;

export default loginSlice.reducer;
