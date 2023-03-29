import './login.css'

export default function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
      <form className="loginForm">
      <label>Email</label>
      <input type="text" className='loginInput' placeholder='Please Enter your email...' />
      <label>Password</label>
      <input type="password" className="loginInput" placeholder='Please enter your password...'/>
      </form>
      <button className='loginButton'>Login</button>
      <button className='loginRegisterButton'>Register</button>
    </div>
  )
}
