import React, { useState, useRef } from 'react';

const InputSample=()=>{
    const [inputs, setInputs] = useState({
        name:'',
        nickname:'',
    });

    const {name, nickname} = inputs;

    //useRef 개체 생성, ref에 해당 개체가 들어있으면 이벤트 작동됨
    const nameInput = useRef();

    const onChange= e=>{
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]:value
        });
    }

    const onReset = e=>{
        setInputs({
            name:'', nickname:'',
        });
        nameInput.current.focus();
    }
    return (
        <>
            <div>
                {/*ref={nameInput}으로 name input이 nameInput 의 ref를 가지고, onReset 될 때 focus 된다.*/}
                <input placeholder='이름' name='name' onChange={onChange} value={name} ref={nameInput}/>
                <input placeholder='닉네임' name='nickname' onChange={onChange} value={nickname}/>
                <button onClick={onReset}>초기화</button>
                <div>
                    <b>값:{name} ({nickname})</b>
                </div>
            </div>
        </>
    )
}

export default InputSample;