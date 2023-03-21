import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
     <div className="singlePostWrapper">
        <img src="https://images.pexels.com/photos/235222/pexels-photo-235222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="singlePostImg" />
    <h1 className="singlePostTitle">Lorem ipsum dolor sit amet consectetur 
    <div className="singlePostEdit">
    <i className="singlePostEditIcon fa-regular fa-pen-to-square"></i>
    <i className="singlePostEditIcon fa-regular fa-trash-can"></i>
   
    </div>
    </h1>
    <div className="singlePostInfo">
        <span className='singlePostAuthor'>Author:<b>Sam</b></span>
        <br />
        <span className='singlePostDate'>Date:<b>3/21/2023</b></span>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos reprehenderit sunt, suscipit sed inventore itaque, reiciendis hic sit nam repudiandae commodi asperiores dolorum deserunt minus soluta eligendi illo consequatur optio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nam aperiam, consequatur quisquam nobis illo ut laboriosam, alias veniam repudiandae incidunt amet dicta commodi maiores pariatur porro! Eveniet, minus nostrum?</p>
     </div>
    </div>
  )
}
