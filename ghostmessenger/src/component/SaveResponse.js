import React from 'react'

function SaveResponse() {

    const [userName, setUserName]= React.useState('');
    const [userMessage, setUserMessage] = React.useState('');

    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    }
    
    const handleUserMessageChange = (event) => {
        setUserMessage(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();  //prevent our form to reload it
        console.log('userName : ', userName)
        console.log('userMessage: ', userMessage);

        // create  (crud)

        fetch('https://accio-learning-default-rtdb.asia-southeast1.firebasedatabase.app/messages.json',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                    userName: userName,
                    userMessage: userMessage
                })
        }
        )
        .then(res => res.json())   
        .then(data => console.log(data))
rahul jaiswal
    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Name" onChange={handleUserNameChange}/>
        <input type="text" placeholder="Enter Your Message" onChange={handleUserMessageChange}/>
        <button type='submit'>Submit</button>
        
      </form>
    </div>
  )
}

export default SaveResponse
