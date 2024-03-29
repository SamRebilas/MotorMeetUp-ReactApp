import "./Header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
      <span className="headerTitleSm">React & Node</span>
      <span className="headerTitleLg">MotorMeetUp</span>
      </div>
      <img className="headerImg"src="https://images.pexels.com/photos/1834403/pexels-photo-1834403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Winding road surrounded by trees" />
    </div>
  )
}
