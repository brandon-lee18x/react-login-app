import React from 'react';
import './App.css';

function authenticate() {
  window.open("https:/reddit.com", "_self");
}

function App() {
  return (
    <div className="App">
      <body>
      <p>Email</p>
      <input id = "EmailBox" placeholder = "Email"></input>
      <br></br>
      <p>Password</p>
      <input id = "PasswordBox" placeholder = "Password"></input>
      <br></br>
      <button onClick={authenticate}>Login</button>
      </body>
    </div>
  );
}

export default App;