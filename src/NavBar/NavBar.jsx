import './NavBar.css'

export default function NavBar() {
  return (
    <div className="top">
      <div className='topLeft'>
        <i className="topIcon fa-brands fa-facebook-f"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i src="./assets/MotorMeetUp.png" alt=""></i><i/>
        </div>

      <div className='topCenter'>
        <ul className='topList'>
        <li className='topListItem'>HOME</li>
        <li className='topListItem'>ABOUT</li>
        <li className='topListItem'>CONTACT</li>
        <li className='topListItem'>WRITE</li>
        <li className='topListItem'>LOGOUT</li>
        </ul>
        </div>

      <div className='topRight'>
        <img className="topImg" src="https://www.shutterstock.com/image-vector/man-icon-vector-600w-1040084344.jpg" alt="Place holder user profile pic" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
