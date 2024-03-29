import React, { useRef, useContext } from 'react';
import { UserDispatch } from '../App';
import useInputs from '../hooks/useInputs';


//onCreate 에 쓰일 인자들마저 props 로 받기
const CreateUser=()=>{
    const dispatch = useContext(UserDispatch)
    const [{username, email}, onChange, reset] = useInputs({
        username: '',
        email: ''
    });
    const nextId = useRef(4);

    const onCreate=()=>{
        dispatch({
            type: 'CREATE_USER',
            user : {
                id:nextId.current,
                username,
                email
            }
        })
        reset();
        nextId.current++;
    }

    return(
        <div>
            <input type="text" name="username" placeholder='계정명' onChange={onChange} value={username} />
            <input type="text" name="email" placeholder='이메일' onChange={onChange} value={email} />
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

export default React.memo(CreateUser);