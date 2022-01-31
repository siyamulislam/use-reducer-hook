import React, { useReducer } from 'react';

const initialState = {count: 0};
function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1}; 
      default:
        throw new Error();
    }
  }
const ReducerCount = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
           <h1>Count: {state.count}</h1>
           <br /> 
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </div>
    );
};

export default ReducerCount;