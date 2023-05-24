import React, { useContext, useState } from 'react'
import Contacts from '../main-components/Contacts'
import MainMenu from '../main-components/MainMenu'
import NewContact from '../main-components/NewContact'
import { LoginContext } from '../context/LoginContext'
import Contact from '../main-components/Contact'
import EditContact from '../main-components/EditContact'
import LockScreen from '../main-components/LockScreen'
import Search from '../main-components/Search'
import NewUser from '../main-components/NewUser'

function Main() {
  const loginContextUsed = useContext(LoginContext)
  const [mainUi, setMainUi] = useState({
    showMenu: false,
    showNewContact: false,
    showAcct: false,
    showContact: false,
    showEditContact: false,
    showSearch: false,
    showNewUser: true
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

  function toggleNewUser(value){
    setMainUi((prev)=>{
      return ({
        ...prev,
        showNewUser: value
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

  const [lockScreenData, setLockScreenData] = useState({
    showLockScreen: true,
    userPassword: "4722"
  })

  function showLockScreen(){
    setLockScreenData((prev)=>{
      return ({
        ...prev,
        showLockScreen: true
      })
    })
  }

  function toggleSearch(value){
    setMainUi((prev)=>{
      return ({
        ...prev,
        showSearch: value
      })
    })
  }

  const checkCode = (passcode)=>{
    if(passcode === loginContextUsed.user.userPasscode){
      setLockScreenData((prev)=>{
        return ({
          ...prev,
          showLockScreen: false
        })
      })
    } else{
      console.log("unsuccessful:", passcode)
    }
  }

  return (
    <div className={`main ${mainUi.showMenu && "show-menu"} ${mainUi.showNewContact && "show-new-contact"} ${mainUi.showNewUser && "show-new-user"} ${loginContextUsed.themeData.darkTheme && "dark"} ${mainUi.showContact && "show-contact-big"} ${mainUi.showEditContact && "show-edit-contact"} ${mainUi.showSearch && "show-search"} ${lockScreenData.showLockScreen && "show-lock-screen"}`}>
      <Contacts
        toggleSearch={toggleSearch}
        showLockScreen={showLockScreen}
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
      <div className="preloader">
        <div className="preloader-circle">
          <div className="dot"></div>
          <i className="fa fa-phone fa-beat-fade"></i>
        </div>
      </div>
      <LockScreen checkCode={checkCode} />
      <Search
        toggleSearch={toggleSearch}
        toggleContact={toggleContact}
        showContact={showContact}
      />
      <NewUser
        toggleNewUser={toggleNewUser}
      />
    </div>
  )
}

export default Main