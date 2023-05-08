import React, { useState } from 'react'

function LogInScreen() {
  const [userName,setUserName] = useState('');
  const [password,setPassword] = useState('');

  const logInData = () =>{
    console.log(userName,password);
    setUserName('');
    setPassword('');
  }
  return (
    <div className='logInContainer'>
      <div className='logInDiv'>
      <h2>LogIn</h2>
      
<div className="page">
  <div className="field field_v1">
    <label htmlFor="first-name" className="ha-screen-reader">UserName</label>
    <input type='text' id="first-name" value={userName} className="field__input" placeholder="e.g. Stanislav" 
    onChange={(e)=>setUserName(e.target.value)}/>
    <span className="field__label-wrap" aria-hidden="true">
      <span className="field__label">UserName</span>
    </span>
  </div>
  <div className="field field_v2">
    <label htmlFor="last-name" className="ha-screen-reader">Password</label>
    <input type='password' id="last-name"  value={password} className="field__input" placeholder="*******"
    onChange={(e)=>setPassword(e.target.value)}/>
    <span className="field__label-wrap" aria-hidden="true">
      <span className="field__label">Password</span>
    </span>
  </div>  
  <button className="button-55" onClick={logInData}>Click to LogIn</button>  
</div>
    </div>
    </div>
    
  )
}

export default LogInScreen
