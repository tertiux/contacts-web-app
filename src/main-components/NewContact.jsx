import React, { useContext, useState } from 'react'
import { LoginContext } from '../context/LoginContext'

function NewContact(props) {
  const loginContextUsed = useContext(LoginContext)
  const [newContactData, setNewContactData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    company: "",
    website: "",
    linkedin: "",
    bio: "",
    isFave: false
  })

  function handleSubmit(event){
    event.preventDefault()
    props.toggleNewContact(false)
    loginContextUsed.functions.addContact(newContactData)

    setTimeout(()=>{
      setNewContactData({
        name: "",
        phone: "",
        email: "",
        address: "",
        company: "",
        website: "",
        linkedin: "",
        bio: "",
        isFave: false
      })
    }, 1500)
  }

  function saveContact(){
    document.getElementById("submit-new-contact").click()
  }

  return (
    <div className='new-contact-big'>
      <div className="heading">
        <button className='go-back' onClick={()=>{
        props.toggleNewContact(false)
      }}><i className="fa fa-close"></i></button>
        <span>Create contact</span>
        <button className='save-contact' onClick={saveContact}>Save</button>
        <div className="hamburger">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <button id='submit-new-contact'>Save</button>
          <div>
            <i className="fa fa-user fa-regular"></i>
            <input value={newContactData.name} onChange={(event)=>{
              setNewContactData((prev)=>{
                return ({
                  ...prev,
                  name: event.target.value
                })
              })
            }} type="text" placeholder='Name' required />
          </div>
          {/* <div>
            <i className="fa fa-axax fa-regular"></i>
            <input value={newContactData.name} onChange={(event)=>{
              setNewContactData((prev)=>{
                return ({
                  ...prev,
                  name: event.target.value
                })
              })
            }} type="text" placeholder='Surname' />
          </div> */}
          {/* <div>
            <i className="fa fa-heart fa-regular"></i>
            <input value={newContactData.name} onChange={(event)=>{
              setNewContactData((prev)=>{
                return ({
                  ...prev,
                  name: event.target.value
                })
              })
            }} type="text" placeholder='Nick Name' />
          </div> */}
          <div>
            <i className="fa fa-phone"></i>
            <input required minLength={"5"} value={newContactData.phone} onChange={(event)=>{
              setNewContactData((prev)=>{
                return ({
                  ...prev,
                  phone: event.target.value
                })
              })
            }} type="tel" placeholder='Phone' />
          </div>
          <div>
            <i className="fa fa-envelope fa-regular"></i>
            <input value={newContactData.email} onChange={(event)=>{
              setNewContactData((prev)=>{
                return ({
                  ...prev,
                  email: event.target.value
                })
              })
            }} type="email" placeholder='Email' />
          </div>
          {/* <div>
            <i className="fa fa-user fa-regular"></i>
            <input value={newContactData.name} onChange={(event)=>{
              setNewContactData((prev)=>{
                return ({
                  ...prev,
                  name: event.target.value
                })
              })
            }} type="date" placeholder='Email' />
          </div> */}
          <div>
            <i className="fa fa-map fa-regular"></i>
            <input value={newContactData.address} onChange={(event)=>{
              setNewContactData((prev)=>{
                return ({
                  ...prev,
                  address: event.target.value
                })
              })
            }} placeholder='Address' />
          </div>
          <div>
            <i className="fa fa-users"></i>
            <input value={newContactData.company} onChange={(event)=>{
              setNewContactData((prev)=>{
                return ({
                  ...prev,
                  company: event.target.value
                })
              })
            }} type="text" placeholder='Company' />
          </div>
          <div>
            <i className="fa fa-globe"></i>
            <input value={newContactData.website} onChange={(event)=>{
              setNewContactData((prev)=>{
                return ({
                  ...prev,
                  website: event.target.value
                })
              })
            }} type='url' placeholder='Website' />
          </div>
          <div>
            <i className="fa-brands fa-linkedin-in fa-regular"></i>
            <input value={newContactData.linkedin} onChange={(event)=>{
              setNewContactData((prev)=>{
                return ({
                  ...prev,
                  linkedin: event.target.value
                })
              })
            }} type='url' placeholder='LinkedIn' />
          </div>
          <div>
            <i className="fa fa-info"></i>
            <textarea  value={newContactData.bio} onChange={(event)=>{
              setNewContactData((prev)=>{
                return ({
                  ...prev,
                  bio: event.target.value
                })
              })
            }} placeholder='Bio' maxLength={"500"} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewContact
