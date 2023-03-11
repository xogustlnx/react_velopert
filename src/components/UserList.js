import React, { useContext } from 'react';
import { useEffect} from 'react';
import { UserDispatch } from '../App';


const User=({user})=>{
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

    const dispatch = useContext(UserDispatch)
    return(
        <div>
            <b
            style={{
                cursor: 'pointer',
                color: user.active ? 'green' : 'black',
            }}
            onClick={()=>{dispatch({type: 'TOGGLE_USER', id: user.id})}}
            >{user.username}</b> <span>({user.email})</span>
            <button onClick={() => {dispatch({type: 'REMOVE_USER', id: user.id})}}>삭제</button>
        </div>
    )
}

const UserList=({users})=>{
    return(
        <div>
            {users.map((user)=>
                <User user={user} key={user.id}></User>
            )}
        </div>
    )
}

export default UserList;