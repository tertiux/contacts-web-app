import React from 'react'

function MainMenu(props) {
  return (
    <div className='main-menu'>
      <div className="theme-toggle" onClick={()=>{
        props.toggleDarkTheme()
      }}>
        <i className="fa fa-adjust"></i>
      </div>
      <div className="content">
        <div className="links-holder">
          <div className='link'><i className="fa fa-play"></i> Tutorial</div>
          <div className='link'><i className="fa fa-upload"></i> Import Contacts</div>
          <div className='link'><i className="fa fa-download"></i> Export Contacts</div>
          <div className='link'><i className="fa fa-gear"></i> Options</div>
        </div>
        <a href="https://wa.me/+2347035658853"><i className="fa-brands fa-whatsapp"></i></a>
        <div className='logout'>Logout <i className="fa fa-"></i></div>
      </div>
    </div>
  )
}

export default MainMenu
