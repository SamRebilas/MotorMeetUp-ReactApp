import './NavBar.css'

export default function NavBar() {
  return (
    <div className="top">
      <div className='topLeft'>
        <i className="topIcon fa-brands fa-facebook-f"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
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
        <img className="topImage" src="" alt="" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
