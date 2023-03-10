import React from 'react';
import { useEffect} from 'react';

const User=({user, onRemove, onToggle, })=>{
    // useEffect(()=>{
    //     console.log('user 값이 설정 됨');
    //     console.log(user);
    //     return ()=>{ //clean up 함수(useEffect 뒷정리, 컴포넌트 바뀔 때 이전 상태 호출)
    //         console.log('user 값 바뀌기 전');
    //         console.log(user);
    //     }
    // }, [user])
    // useEffect(()=>{
    //     console.log(user);   
    // })
    return(
        <div>
            <b
            style={{
                cursor: 'pointer',
                color: user.active ? 'green' : 'black',
            }}
            onClick={()=>onToggle(user.id)}
            >{user.username}</b> <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
}

const UserList=({users, onRemove, onToggle })=>{
    return(
        <div>
            {users.map((user)=>
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} ></User>
            )}
        </div>
    )
}

export default UserList;