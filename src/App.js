import logo from './logo.svg';
import './App.scss';
import InputSample from './InputSample';
import CreateUser from './CreateUser';
import UserList from './UserList';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [users, setUsers] = useState([
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
  ]);

  const [inputs, setInputs] = useState({username: '', email: ''})
  const {username, email} = inputs;

  const onChange=(e)=>{
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    })
  }


  //useRef는 DOM 선택용도 외에도 컴포넌트 안에서 조회 수정이 바로 가능
  const nextId = useRef(4);

  
  const onCreate=()=>{
    const user = {
      id: nextId.current,
      username,
      email,
      active:false,
    };
    setUsers([...users,user]);
    setInputs({username: '', email: ''});
    nextId.current++;
  }

  const onRemove=id=>{
    setUsers(users.filter(user=>user.id !== id));
  }

  const onToggle=id=>{
    
    setUsers(
      users.map(user=>
        user.id===id ? {...user,active : !user.active}:user
      )
    )
  }
  

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}></CreateUser>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}></UserList>
    </>

  );
}

export default App;
