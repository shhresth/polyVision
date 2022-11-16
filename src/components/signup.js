import React from 'react'
import '../components/signup.css'

const signup = (props) => {
  return (
    <div className={`${props.isShowLogin ? "active3" : ""} show`}>
        
      <div className="login-form">
        <div className="form-box solid">
          <form>
            <h1 className="login-text">Sign In</h1>
            <label classname="labels">Username</label>
            <br></br>
            <input type="text" name="username" className="login-box" />
            <br></br>
            <label  classname="labels">Password</label>
            <br></br>
            <input type="password" name="password" className="login-box" />
            <br></br>
            <input type="submit" value="LOGIN" className="login-btn" />
          </form>
        </div>
      </div>
    </div>
    
  )
}

export default signup