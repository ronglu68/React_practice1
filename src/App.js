import React, {useState} from 'react';

import UserInput from './Components/UserInput';
import UserList from './Components/UserList';
// import {User} from './Model/User';

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (user) => {
    setUserList ( (existUsers) => {
      return [...existUsers, user];
   });
  }

  return (
    <div>
      <h2>Test</h2>
      <UserInput onAddUser={addUserHandler} />
      <UserList users={userList}/>
    </div>
  );
}

export default App;
