import React, {useState} from 'react';

import './App.css';


function App() {
  const [username, setUsername] = useState('');
  const [resData, setResData] = useState('');

  const handleUsernameInput = (event) => {
    setUsername(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username);
    
    // methods of fetching the data
    // XMLHttpRequest
    // fetch
    // axios
    // async await
    fetch('https://api.github.com/users/' + username)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setResData(data);
    });
    
    setUsername('');
  }



  return (
    <>
      <div className='container'>
        <div className='heading'><h1>Search Github UserID</h1></div>
        <form onSubmit={handleSubmit} className='formCard'>
          <input type="text" onChange={handleUsernameInput} value={username}/>
          <button>Submit</button>
        </form>

        {resData.message}

        {/* conditional rendering */}
        { resData && (resData.message !== 'Not Found') && (
            <div className='userDetailCard'>
              <div className='userImage'>
                <img src={resData.avatar_url} alt="avatar" />
              </div>
              <div className='userDetailBody'>
                <p className='name'>Name:{resData.name}</p>
                <p className='username'>UserName : {resData.login}</p>
                <p className='username'>{resData.location}</p>
                <p className='username'>No.of Repos : {resData.public_repos}</p>

                <div className='follow'>
                  <p>Followers : {resData.followers}</p>
                  <p>Following : {resData.following}</p>
                </div>
                <div className='profDetail'>
                  <p>🏢 {resData.company}</p>
                  <p>🗒️ {resData.bio}</p>

                </div>
              </div>
              
            </div>
          )
        }

      </div>
    </>
  );
}

export default App;
