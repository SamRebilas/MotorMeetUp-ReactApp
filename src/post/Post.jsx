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
        <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda facilis tenetur sequi nihil nisi ratione doloribus officiis? Sapiente dolores expedita veritatis, voluptas delectus nisi laboriosam facere repellat nemo quasi quidem! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur dicta soluta repellat sunt aperiam iste ullam, veritatis temporibus laboriosam tempore praesentium blanditiis facere itaque libero ipsum asperiores. Nisi, maxime architecto.</p>
        <hr />
        
        <span className="postDate">1 Day Ago</span>
      </div>
      
    </div>
  )
}
