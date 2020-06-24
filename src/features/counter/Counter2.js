import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment1,
  decrement1,
  incrementByAmount1,
  decrement2,
  increment2,
  incrementAsync1,
  selectCount2,
  selectValues
} from './counterSlice2';
import styles2 from './Counter.module2.css';

export function Counter2() {
  const count2 = useSelector(selectCount2);
  const values = useSelector(selectValues);
  const dispatch = useDispatch();
  const [incrementAmount1, setIncrementAmount1] = useState('2');

  console.log(values);
  console.log(values['value']);
  console.log(values['value2']);
  console.log(values['value3']);

  const cnt1 =values['value'];
  const cnt2 =values['value2'];
  
  
  return (
    <div>
      <div className={styles2.row}>
        <button
          onClick={() => dispatch(increment1())}
        > + </button>

        <span>{cnt1}</span>

        <button
          onClick={() => dispatch(decrement1())}
        > - </button>

        <br></br>
        <button
          onClick={() => dispatch(increment2())}
        > + </button>

        <span>{cnt2}</span>

        <button
          onClick={() => dispatch(decrement2())}
        > - </button>

        <br></br>
        <button
          onClick={() => dispatch(increment2())}
        > + </button>

        <span>{count2}</span>

        <button
          onClick={() => dispatch(decrement2())}
        > - </button>
        </div>



      <div className={styles2.row}>
        <input
          className={styles2.textbox}
          aria-label="Set increment amount"
          value={incrementAmount1}
          onChange={e => setIncrementAmount1(e.target.value)}
        />
        <button
          className={styles2.button}
          onClick={() =>
            dispatch(incrementByAmount1(Number(incrementAmount1) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles2.asyncButton}
          onClick={() => dispatch(incrementAsync1(Number(incrementAmount1) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
