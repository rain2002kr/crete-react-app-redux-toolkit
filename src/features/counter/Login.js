import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  signup,
  selectlists
} from './loginSlice';
//import styles2 from './Counter.module2.css';

export function Login() {
  const lists = useSelector(selectlists);
  console.log(lists);
  
  const dispatch = useDispatch();
  //const [incrementAmount1, setIncrementAmount1] = useState('2');

  //const login =login
  
  
  return (
    
    <div>
      
        
        
        
        <button
          onClick={() => dispatch(signup({id:'lkh',password:'1234',dsc:'test'}))}
        > signup </button>

        <button
          onClick={() => dispatch(signup({id:'csd',password:'12'}))}
        > signup2 </button>


        
      
    </div>
  );
}


