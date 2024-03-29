import React, { Component } from 'react'
// import './App.css'
import './ViewPhoto.css'
// import './ph.css'


export class ViewPhoto extends Component {
    state={
        profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
      }
      imageHandler = (e) =>{
        const reader = new FileReader();
        reader.onload = () => {
          if(reader.readyState === 2){
            this.setState({profileImg: reader.result})
          }
        }
        reader.readAsDataURL(e.target.files[0])
      }
    render() {
        const {profileImg} = this.state
        return (
            <div className="viewpages">
        <div className='viewcontainer1'>
          {/* <h1 className='viewheading1'>Profile Pic</h1> */}
          <div className='viewimg-holder1'>
            <img src={profileImg} alt='' id='img' className='viewimg1'/> 
          </div>
          {/* <input type="file" name="image-upload" id='input' accept='image/*' onChange={this.imageHandler}/>
          <div className='label1'>
            <label htmlFor='input' className='image-upload1'>
              <i className='material-icons'>add_photo_alternate</i>
              Select a Photo
            </label>
      
          </div> */}
  
        </div>
        
      </div>
        )
    }
}

export default ViewPhoto
