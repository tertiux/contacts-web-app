import React from 'react'

function Search(props) {
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
            <div className="contact">
                <div className="first-letter">
                    B
                </div>
                <div className="contact-name">
                    Bro Emmanuel
                </div>
            </div>
            <div className="contact">
                <div className="first-letter">
                    B
                </div>
                <div className="contact-name">
                    Bro Emmanuel
                </div>
            </div>
            <div className="contact">
                <div className="first-letter">
                    B
                </div>
                <div className="contact-name">
                    Bro Emmanuel
                </div>
            </div>
            <div className="contact">
                <div className="first-letter">
                    B
                </div>
                <div className="contact-name">
                    Bro Emmanuel
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Search
