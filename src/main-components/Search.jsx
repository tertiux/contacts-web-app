import React, { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'

function Search(props) {
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
        }} className={`contact ${contact.isFavorite && "favorite"} ${contact.id}`}>
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
    <div className='search-big'>
      <div className="content">
        <div className="nav">
            <div className="go-back" onClick={()=>{
                props.toggleSearch(false)
            }}>
                <i className="fa fa-arrow-left"></i>
            </div>
            <form>
                <input type="search" minLength={"1"} required maxLength={"20"} placeholder='Search Contacts' />
                <button style={{display: "none"}} id='search-btn'>Search</button>
            </form>
            <div className='search'><i className="fa fa-magnifying-glass"></i></div>
        </div>
        <div className="container">
            {contactsEl}
        </div>
      </div>
    </div>
  )
}

export default Search
