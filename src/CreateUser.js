import React from 'react';


//onCreate 에 쓰일 인자들마저 props 로 받기
const CreateUser=({username, email, onChange, onCreate})=>{
    return(
        <div>
            <input type="text" name="username" placeholder='계정명' onChange={onChange
            } value={username} />
            <input type="text" name="email" placeholder='이메일' onChange={onChange
            } value={email} />

            <button onClick={onCreate}>등록</button>
        </div>
        
    )
}

export default CreateUser;