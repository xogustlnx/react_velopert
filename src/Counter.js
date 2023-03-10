import React, { useReducer } from 'react';

const reducer=(state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return ++state;
        case 'DECREMENT':
            return --state;
        default:
            return state;
    }
}


const Counter = ()=>{
    const [number, dispatch] = useReducer(reducer,0);

    const onIncrease = () =>{
        dispatch({type : 'INCREMENT'});
    }

    const onDecrease =() =>{
        dispatch({type : 'DECREMENT'});
    }

    return (
        <>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        </>
    )
}


export default Counter;