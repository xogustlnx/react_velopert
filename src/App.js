import logo from './logo.svg';
import './App.scss';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';
import React, { useEffect, useRef, useState, useMemo, useCallback, useReducer} from 'react';

const countActiveUsers=(users)=>{
  console.log('활성 사용자 수 세는중')
  return users.filter(user=>user.active).length;
}

const initialState = {
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: false
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ],

};

const reducer=(state, {type, user, id})=>{
  switch (type){
    case 'CREATE_USER':
      return{
          users: state.users.concat(user)
      }
    case 'TOGGLE_USER':
      return{
        ...state,
        users: state.users.map(user=>
          user.id===id ? {...user,active:!user.active} : user 
        )
      }
    case 'REMOVE_USER':
      return{
        ...state,
        users: state.users.filter(user=>
          user.id!==id)
      }

    default:
    return state;
  }
}

//context api 기본 
export const UserDispatch =React.createContext(null);


function App() {


  const [state, dispatch] = useReducer(reducer, initialState)
  const {users} = state;
  const count = useMemo(()=>countActiveUsers(users),[users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser></CreateUser>
      <UserList users={users} ></UserList>
      <div>활성 사용자 수 : {count}</div>
    </UserDispatch.Provider>

  );
}

export default App;
