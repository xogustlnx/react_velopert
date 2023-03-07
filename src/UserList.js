import React from 'react';
import { useEffect, useRef } from 'react';

const User=({user, onRemove, onToggle, })=>{
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