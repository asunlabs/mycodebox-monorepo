import * as React from 'react';
import { loginStyle } from '../styles/styles';


export function LoginForm () {

  const handleSubmit = (e:React.MouseEvent) => {
    e.preventDefault()
    console.log("submitted")
  }

  return (
    <div>
      <form action="" style={loginStyle.form}>
          <div className="id">
            <label htmlFor="email">
            <input id="email" 
                    name="email" 
                    type="email"
                    placeholder='Enter your email' />
            </label>
          </div>
          <div className="pw">
            <label htmlFor="password">
            <input id="password" 
                    name="password" 
                    type="password"
                    placeholder='Enter your password' />  
            </label>
          </div>
          <button 
            style={loginStyle.form.formItem}
            onClick={(event:React.MouseEvent) => handleSubmit(event)}
            >Login</button>
      </form>
    </div>
  );
}
