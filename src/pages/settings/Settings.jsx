import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

export default function Settings() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
    <div className="settingsTitle">
        <span className="settingsUpdtateTitle">Update Your Account</span>
        <span className="settingsDeleteTitle">Delete Account</span>
    </div>
    <form className="settingsForm">
        <label>Profile Picture</label>
        <div className="setttingsPP">
            <img className="settingsPPImg"src="https://www.shutterstock.com/image-vector/man-icon-vector-600w-1040084344.jpg" alt="place holder profile pic" />
        </div>
        <label htmlFor="fileInput">
        <i class="settingsPPIcon fa-regular fa-user"></i>
        </label>
        <input type="file" id="fileInput" style={{display:"none"}} />
        <label>Username</label>
        <input type="text" placeholder='Sam'/>
        <label>Email</label>
        <input type="email" placeholder='Sam.rebilas@gmail.com'/>
        <label>Password</label>
        <input type="password"/>
        <button className='settingsSubmit'>Submit</button>
    </form>
      </div>
      <Sidebar/>
    </div>
  )
}

