import './register.css'

export default function Register() {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
      <form className="registerForm">
      <label>Username</label>
      <input type="text" className='registerInput' placeholder='Please Enter a username...' />
      <label>Email</label>
      <input type="text" className='registerInput' placeholder='Please Enter your email...' />
      <label>Password</label>
      <input type="password" className="registerInput" placeholder='Please enter an 8 digit password...'/>
      <button className='registerButton'>Register</button>
      </form>
     
      <button className='registerLoginButton'>Login</button>
    </div>
  )
}
