import React, { useContext, useState } from 'react'
import Contacts from '../main-components/Contacts'
import MainMenu from '../main-components/MainMenu'
import NewContact from '../main-components/NewContact'
import { LoginContext } from '../context/LoginContext'
import Contact from '../main-components/Contact'
import EditContact from '../main-components/EditContact'

function Main() {
  const loginContextUsed = useContext(LoginContext)
  const [mainUi, setMainUi] = useState({
    showMenu: false,
    showNewContact: false,
    showAcct: false,
    showContact: false,
    showEditContact: false
  })

  function toggleMenu(value){
    setMainUi((prev)=>{
      return ({
        ...prev,
        showMenu: value
      })
    })
  }

  function toggleNewContact(value){
    setMainUi((prev)=>{
      return ({
        ...prev,
        showNewContact: value
      })
    })
  }

  function toggleContact(value){
    setMainUi((prev)=>{
      return ({
        ...prev,
        showContact: value
      })
    })
  }
  
  function toggleEditContact(value){
    setMainUi((prev)=>{
      return ({
        ...prev,
        showEditContact: value
      })
    })
  }

  function toggleDarkTheme(){
    loginContextUsed.functions.toggleTheme()
  }

  const [contactBigData, setContactBigData] = useState({
    name: "...",
    phone: "...........",
    id: "..................",
    email: "..........",
    address: "....................",
    company: ".................",
    website: ".....................",
    linkedin: "..............................",
    bio: "...................."
  })

  const [editContactBigData, setEditContactBigData] = useState({
    name: "...",
    phone: "...........",
    id: "..................",
    email: "..........",
    address: "....................",
    company: ".................",
    website: ".....................",
    linkedin: "..............................",
    bio: "...................."
  })

  function showContact(contact){
    setContactBigData(contact)
  }


  const [newContactData, setNewContactData] = useState({
    name: "...",
    phone: "...........",
    id: "..................",
    email: "..........",
    address: "....................",
    company: ".................",
    website: ".....................",
    linkedin: "..............................",
    bio: "...................."
  })

  function showEditContact(contact){
    setEditContactBigData(contact)
    setNewContactData(contact)
  }
  
  function updateContact(contact){
    loginContextUsed.functions.editContact(contact)
    setContactBigData(contact)
  }

  return (
    <div className={`main ${mainUi.showMenu && "show-menu"} ${mainUi.showNewContact && "show-new-contact"} ${loginContextUsed.themeData.darkTheme && "dark"} ${mainUi.showContact && "show-contact-big"} ${mainUi.showEditContact && "show-edit-contact"}`}>
      <Contacts
        showContact={showContact}
        toggleMenu={toggleMenu}
        toggleNewContact={toggleNewContact}
        toggleContact={toggleContact}
      />
      <MainMenu
        toggleDarkTheme={toggleDarkTheme}
      />
      <NewContact
        toggleNewContact={toggleNewContact}
      />
      <EditContact
        updateContact={updateContact}
        toggleEditContact={toggleEditContact}
        editContactBigData={editContactBigData}
        newContactData={newContactData}
        setNewContactData={setNewContactData}
      />
      <Contact toggleEditContact={toggleEditContact} contactBigData={contactBigData} toggleContact={toggleContact} showEditContact={showEditContact} />
      <div className="backdrop" onClick={()=>{
        toggleMenu(false)
      }}></div>
    </div>
  )
}

export default Main