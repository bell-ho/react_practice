import React from 'react';
import { increase, decrease } from '../modules/counter';
import { useDispatch, useSelector } from 'react-redux';

export function useCounter() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.counter.number);
  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };
  return { number, onIncrease, onDecrease };
}

const Counter = () => {
  const { number, onIncrease, onDecrease } = useCounter();

  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
};

export default Counter;
