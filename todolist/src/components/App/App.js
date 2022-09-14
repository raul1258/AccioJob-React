import React from 'react'
import List from '../util/List'

const bodyContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    // backgroundColor: '#283564',
    backgroundImage :  "url('https://1.bp.blogspot.com/-J7gtzbn8W7M/VQg0llDzhoI/AAAAAAAAGos/ddvshP89ODI/s1600/wallpapers-color-wallpaper-cave.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: '10px',
}

const todoListContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#79608a',
    borderRadius: '10px',
    width: '600px',
    boxShadow: '0 0 10px 0 rgba(255,255,255,.5)',
    background: 'linear-gradient(135deg, #14fc25, #ffeb3b, #ff00e0)',
}

function App() {
  return (
    <div style={bodyContainer}>
      
        <div style={todoListContainer}>
          
            <h1>Accio Todo</h1>

            
            <List/>
        </div>
    </div>
  )
}

export default App