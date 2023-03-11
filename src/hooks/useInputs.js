import { useState, useCallback, useReducer } from 'react';

const reducer=(state,{type, name, value, initialForm})=>{
    switch (type){
        case 'CHANGE_INPUT':
            return{
                ...state,[name]:value
            };
        case 'RESET_INPUT':
            return initialForm;
    }
}

const useInputs=(initialForm)=>{
    const [state, dispatch] = useReducer(reducer, initialForm)
    const onChange = useCallback(e=>{
        const {name, value} = e.target;
        dispatch({
            type: "CHANGE_INPUT",
            name,
            value
        });
    },[])

    const reset = useCallback(()=>{
        dispatch({
            type: "RESET_INPUT",
            initialForm
        })
    },[initialForm])

    return [state, onChange, reset]
}

export default useInputs;