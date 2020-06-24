import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//key 값 가져오기 
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';

import styles from './Counter.module.css';

export function Counter() {
  //get state value 값 가져오기
  //보여주기 위한것 출력
  const count = useSelector(selectCount);

  const dispatch = useDispatch();
  //초기값 세팅하기 주는값 
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
    
        <span className={styles.value}>{count}</span>
        
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          //여기서 주는값 
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}

          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}

          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
