// import logo from './logo.svg';
import { useEffect, useLayoutEffect, useReducer } from 'react';
import './index.scss';
import Main from './pages/Main';
import { LoginContext } from './context/LoginContext';
// import Login from './pages/Login';
// import Signup from './pages/Signup';

function App() {
  const initialState = {
    user: {
      userName: "Isaac Adebayo",
      userEmail: "isaacadebayo@email.com",
      userPassword: "abcd4722",
      contacts: [
        
      ],
    },
    themeData: {
      darkTheme: false,
      prefersAnimations: true,
    },
    functions: {
      addContact: (contactDetails)=>{
        dispatch({type: "addContact", target:  contactDetails})
      },
      deleteContact: (contactDetails)=>{
        dispatch({type: "deleteContact", target:   contactDetails})
      },
      editContact: (contactDetails)=>{
        dispatch({type: "editContact", target:  contactDetails})
      },
      toggleTheme: ()=>{
        dispatch({type: "toggleTheme"})
      },
      toggleFavoriteFalse: (contactDetails)=>{
        dispatch({type: "toggleFavoriteFalse", target: contactDetails})
      },
      toggleFavoriteTrue: (contactDetails)=>{
        dispatch({type: "toggleFavoriteTrue", target: contactDetails})
      },
      toggleAnimationPreference: (preferenceType)=>{
        dispatch({type: "toggleAnimationPreference"}, preferenceType)
      },
      toggleFilter: (filterType)=>{
        dispatch({type: "toggleFilter"}, filterType)
      },
    }
  }

  useLayoutEffect(()=>{
    // window.localStorage.setItem("storedContacts", JSON.stringify([{
    //   name: "Bro Emmanuel",
    //   phone: "08160683442",
    //   id: "bro08160683442Akaxjaxn",
    //   email: "emma@gmail.com",
    //   address: "no 14 behind axax, Nigeria",
    //   company: "University of Ibadan",
    //   website: "https://tertiux-linktree.netlify.app",
    //   linkedin: "https://linkedin.com/in/tertiux44",
    //   bio: "MLS student at University of Ibadan",
    //   isFavorite: false,
    // },
    // {
    //   name: "Yusuf Praise",
    //   phone: "08160683442",
    //   id: "ysf08160683442Akayjaxn",
    //   email: "emma@gmail.com",
    //   address: "no 14 behind axax, Nigeria",
    //   company: "University of Ibadan",
    //   website: "https://tertiux-linktree.netlify.app",
    //   linkedin: "https://linkedin.com/in/tertiux44",
    //   bio: "MLS student at University of Ibadan",
    //   isFavorite: false,
    // },
    // {
    //   name: "Consolation Basil",
    //   phone: "08160683442",
    //   id: "ysfxxx08160683442Akayjaxn",
    //   email: "",
    //   address: "",
    //   company: "",
    //   website: "",
    //   linkedin: "",
    //   bio: "",
    //   isFavorite: true,
    // },]))
    const contactsToImport = window.localStorage.getItem("storedContacts")
    const parsedContacts = JSON.parse(contactsToImport)
    console.log(contactsToImport, parsedContacts)
    if (parsedContacts){
      if(parsedContacts.length > 0){
        dispatch({type: "updateContactsFromStorage", target: parsedContacts})
      }
    } else{
      // window.localStorage.removeItem("storedContacts")
    }
  }, [])

  function changeSomething(state, action){
    switch (action.type){
      case ("toggleTheme"):
        return ({
          ...state,
          themeData:{
            ...state.themeData,
            darkTheme: !state.themeData.darkTheme
          }
        })
      case ("addContact"):
        var thisContact = action.target
        return ({
          ...state,
          user: {
            ...state.user,
            contacts: [
              ...state.user.contacts,
              {
                name: thisContact.name,
                phone: thisContact.phone,
                id: thisContact.name + thisContact.phone + thisContact.name.length + Math.floor(Math.random()*10000)+100,
                email: thisContact.email,
                address: thisContact.address,
                company: thisContact.company,
                website: thisContact.website,
                linkedin: thisContact.linkedin,
                bio: thisContact.bio,
              }
            ]
          }
        })
      case ("deleteContact"):
        thisContact = action.target
        var newContacts = state.user.contacts
        var tempContacts = newContacts.filter((contact)=>{
          return contact.id !== thisContact.id
        })
        return ({
          ...state,
          user: {
            ...state.user,
            contacts: [
              ...tempContacts,
            ]
          }
        })
      case ("toggleFavoriteFalse"):
        thisContact = action.target
        newContacts = state.user.contacts
        tempContacts = newContacts.filter((contact)=>{
          return contact.id !== thisContact.id
        })
        return ({
          ...state,
          user: {
            ...state.user,
            contacts: [
              ...tempContacts,
              {
                ...thisContact,
                isFavorite: false
              }
            ]
          }
        })
      case ("toggleFavoriteTrue"):
        thisContact = action.target
        newContacts = state.user.contacts
        tempContacts = newContacts.filter((contact)=>{
          return contact.id !== thisContact.id
        })
        return ({
          ...state,
          user: {
            ...state.user,
            contacts: [
              ...tempContacts,
              {
                ...thisContact,
                isFavorite: true
              }
            ]
          }
        })
      case ("editContact"):
        thisContact = action.target
        newContacts = state.user.contacts
        tempContacts = newContacts.filter((contact)=>{
          return contact.id !== thisContact.id
        })
        return ({
          ...state,
          user: {
            ...state.user,
            contacts: [
              ...tempContacts,
              {
                ...thisContact
              }
            ]
          }
        })
      case ("updateContactsFromStorage"):
        var imported = action.target
        return({
          ...state,
          user: {
            ...state.user,
            contacts: [
              ...imported
            ]
          }
        })
        
      // break
      default:
        return({
          ...state
        })
    }
  }

  useEffect(()=>{
    window.addEventListener("contextmenu", (e)=>{
      e.preventDefault()
    })
    window.addEventListener("mouseover", ()=>{
      document.querySelectorAll(`.contact`).forEach((guy)=>{
        guy.classList.remove("hover")
    })
    })
  }, [])

  useEffect(()=>{
    setTimeout(()=>{
      window.localStorage.setItem("storedContacts", JSON.stringify(loginState.user.contacts))
      console.log("Done")
    }, 1000)
  })

  const [loginState, dispatch] = useReducer(changeSomething, initialState)

  return (
    <LoginContext.Provider value={loginState}>
      <div className="app">
        <button onClick={()=>{
          dispatch({type: "toggleTheme"})
          console.log(loginState.themeData.darkTheme)
        }} style={{
          position: "fixed",
          zIndex: "100",
          top: "10px",
          left: "10px",
          display: "none"
        }} className='test'>
          Click ME
        </button>
        <Main />
        {/* <Signup /> */}
        {/* <Login /> */}
      </div>
    </LoginContext.Provider>
  );
}

export default App;
