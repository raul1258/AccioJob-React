import React, {useState} from 'react'

import logo from './logo.svg';
import './App.css';

function App() {
  const [username, SetUsername] = useState('');
  
  const handleUsernameInput = (event) => {
    SetUsername(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username);
  }
  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleUsernameInput}/>
      <button>Search</button>
      </form>
    </div>
    </>
  );
}

export default App;
