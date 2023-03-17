import './post.css'

export default function Post() {
  return (
    <div className='post'>
      <img className="postImg" src="https://images.pexels.com/photos/687653/pexels-photo-687653.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      <div className="postInfo">
        <div className="postCats">
            <spam className="postCat">My Car</spam>
          
        </div>
        <span className="postTitle">Title Placeholder</span>
        <p className='postDesc'>Post Description placeholder. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo veritatis quia suscipit labore?</p>
        <hr />
        
        <span className="postDate">1 Day Ago</span>
      </div>
      
    </div>
  )
}
