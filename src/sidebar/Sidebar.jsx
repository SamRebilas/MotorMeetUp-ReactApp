import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="" alt="" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores earum voluptatum iure deserunt aperiam rem, maxime hic quaerat eaque voluptates soluta beatae totam ea dolore, eum voluptas atque minima fuga.</p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className='sidebarList'>
        <li className="sidebarListItem">LIFE</li>
        <li className="sidebarListItem">CARS</li>
        <li className="sidebarListItem">MEETS</li>
        <li className="sidebarListItem">MORE</li>
      </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
      </div>
    </div>
  )
}
