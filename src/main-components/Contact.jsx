import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../context/LoginContext'

function Contact(props) {
  const contact = props.contactBigData
  const loginContextUsed = useContext(LoginContext)
  const [isFavorite, setIsFavorite] = useState(false)
  const [copySuccessful, setCopySuccessful] = useState(false)
  const [showCopied, setshowCopied] = useState(false)
  useEffect(()=>{
    loginContextUsed.user.contacts.forEach((contactx)=>{
    if(contactx.id === contact.id){
        setIsFavorite(contactx.isFavorite)
    }
    })
  })
  return (
    <div className='contact-big'>
      <div className={`copied ${copySuccessful ? "normal" : "red"}  ${showCopied && "animate"}`}>
        {copySuccessful ? "Copied Successfully" : "Failed to Copy"} {copySuccessful ? <i className="fa fa-check"></i> : <i className="fa fa-exclamation"></i>}
      </div>
      <div className="nav">
        <div className="go-back" onClick={()=>{
            props.toggleContact(false)
        }}>
            <i className="fa fa-arrow-left"></i>
        </div>
        <div className="edit-contact" onClick={()=>{
            props.toggleEditContact(true)
            props.showEditContact(contact)
        }}>
            <i className="fa fa-pencil"></i>
        </div>
        <div onClick={()=>{
            if(isFavorite === true){
                loginContextUsed.functions.toggleFavoriteFalse(contact)
            }
            else{
                loginContextUsed.functions.toggleFavoriteTrue(contact)
            }
        }} className={isFavorite ? "favourite-contact isFave" : "favourite-contact"}>
            <i className="fa fa-star"></i>
        </div>
      </div>
      <div className="content">
        <div className="heading">
            <div className="first-letter">
                {contact.name[0]}
            </div>
            <div className="contact-name">
                {contact.name}
            </div>
            {contact.company.length > 1 && <div className="contact-company">
            {contact.company}
            </div>}
        </div>
        <div className="connect">
            <a href={`tel:${contact.phone}`} rel='noreferrer' target="_blank" className="call">
                <i className="fa fa-phone"></i>
            </a>
            <a href={`https://wa.me/${contact.phone}`} rel='noreferrer' target="_blank" className="whatsapp">
                <i className="fa-brands fa-whatsapp fa-solid"></i>
            </a>
            <a  href={`sms://${contact.phone}`} rel='noreferrer' target="_blank" className="message">
                <i className="fa fa-message fa-solid"></i>
            </a>
            <div className="delete" onClick={()=>{
                loginContextUsed.functions.deleteContact(contact)
                props.toggleContact(false)
            }}>
                <i className="fa fa-trash"></i>
            </div>
        </div>
        <div className="contact-info">
            <h3>Contact info</h3>
            <div className="info">
                <i className="fa fa-phone"></i>
                <span>
                    {contact.phone}
                </span>
            </div>
            {contact.company.length > 0 && <div className="info">
                <i className="fa fa-users"></i>
                <span>
                    {contact.company}
                </span>
            </div>}
            {contact.address.length > 0 && <div className="info">
                <i className="fa fa-map"></i>
                <span>
                    {contact.address}
                </span>
            </div>}
            {contact.email.length > 0 && <div className="info">
                <i className="fa fa-envelope"></i>
                <span>
                    {contact.email}
                </span>
                <a href={`mailto:${contact.email}`} target="_blank" rel='noreferrer'>
                    <i className="fa fa-link"></i>
                </a>
            </div>}
            {contact.website.length > 0 && <div className="info">
                <i className="fa fa-globe"></i>
                <span>
                    {contact.name}'s website
                </span>
                <a href={contact.website} target="_blank" rel='noreferrer'>
                    <i className="fa fa-link"></i>
                </a>
            </div>}
            {contact.bio.length > 0 && <div className="info bio">
                <i className="fa fa-info"></i>
                <span>
                    {contact.bio}
                </span>
                <button onClick={()=>{
                    let timeout
                    try {
                        navigator.clipboard.writeText(contact.bio)
                        setCopySuccessful(true)
                        setshowCopied(true)
                        clearTimeout(timeout)
                        
                        timeout = setTimeout(()=>{
                            setshowCopied(false)
                        }, 1500)
                    } catch (error) {
                        console.log(error)
                        setCopySuccessful(false)
                        setshowCopied(true)
                        clearTimeout(timeout)
                        
                        timeout = setTimeout(()=>{
                            setshowCopied(false)
                        }, 1500)
                    }
                }}>
                    <i className="fa fa-copy"></i>
                </button>
            </div>}
        </div>
      </div>
    </div>
  )
}

export default Contact
