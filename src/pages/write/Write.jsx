import './write.css'

export default function Write() {
  return (
    <div className='write'>
        <img className="writeImg"src="https://images.pexels.com/photos/2906849/pexels-photo-2906849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fa-regular fa-square-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
        <textarea PlaceHolder="Tell us about your car!" type="text" className='writeInput writeText'></textarea>
        </div>
        <button className="writeSubmit">Post!</button>
      </form>
    </div>
  )
}
