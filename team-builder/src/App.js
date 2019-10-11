import React, { useState } from 'react';
import './App.css';

import MemberForm from './components/Form';
import Team from './components/Team';

function App() {
  const [members, setMembers] = useState([]);

  const addMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <h1>Team List</h1>
      <MemberForm addMemberFn={addMember} />
      <Team teamList={members} />
    </div>
  );
}

export default App;
