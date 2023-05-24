import React, { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'

function Contacts(props) {
  const loginContextUsed = useContext(LoginContext)
    const contactsx = loginContextUsed.user.contacts    
    const sortedContacts = contactsx.sort((a, b)=>a.name.localeCompare(b.name))
  const contactsEl = sortedContacts.map((contact)=>{
    return (
        <div onClick={()=>{
            props.toggleContact(true)
            props.showContact(contact)
        }} key={contact.id} onContextMenu={()=>{
            document.querySelectorAll(`.contact`).forEach((guy)=>{
                guy.classList.remove("hover")
            })
            document.querySelector(`.${contact.id}`).classList.add("hover")
        }} onMouseEnter={(event)=>{
            event.stopPropagation()
            document.querySelectorAll(`.contact`).forEach((guy)=>{
                guy.classList.remove("hover")
            })
        }} onMouseOver={(event)=>{
            event.stopPropagation()
        }} className={`contact ${contact.id}`}>
            <div className="first-letter">
                <h2>{contact.name[0]}</h2>
            </div>
            <div className="contact-name">
                {contact.name}
            </div>
            <div className="delete-contact" onClick={(event)=>{
                event.stopPropagation()
                loginContextUsed.functions.deleteContact(contact)
            }}>
                <i className="fa fa-trash"></i>
            </div>
        </div> 
    )
  })
  return (
    <div className='contacts'>
      <div className="nav">
        <div className="user-img" onClick={props.showLockScreen}>
            <i className="fa fa-lock-open"></i>
        </div>

        <div className="extras">
            <div className="search">
                <i className="fa fa-magnifying-glass"></i>
            </div>
            <div className="hamburger" onClick={()=>{
                props.toggleMenu(true)
            }}>
                <i className="fa fa-bars"></i>
            </div>
        </div>
      </div>

      <div className="contacts-holder">
        <div className="heading">
            <h3>ALL CONTACTS</h3>
            <div className="filter">
                <img src="img/sort.png" alt="order" />
            </div>
        </div>
        <div className="container">
            {contactsEl}
            {loginContextUsed.user.contacts.length < 1 && <div className='empty'><img src="img/empty-box.png" alt='empty'></img></div>}
        </div>
      </div>
      <div className="new-contact" onClick={()=>{
        props.toggleNewContact(true)
      }}>
        <i className="fa fa-plus"></i>
      </div>
    </div>
  )
}

export default Contacts
