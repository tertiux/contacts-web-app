import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../context/LoginContext'

function NewUser(props) {
    const [passcode, setPassCode] = useState("")
    const [confirmedPasscode, setConfirmedPassCode] = useState("")
    const [pointerKeys, setPointerKeys] = useState(true)
    const loginContextUsed = useContext(LoginContext)

    const [newUserUi, setNewUserUi] = useState({
        showConfirm: false
    })

    useEffect(()=>{
        if (passcode.toString().length >= 4){
            setNewUserUi((prev)=>{
                return({
                    ...prev,
                    showConfirm: true
                })
            })
            setConfirmedPassCode(passcode)
            setPassCode("")
        } else{
            setPointerKeys(true)
        }
    }, [passcode])

    function confirmCode(){
        loginContextUsed.functions.setCode(confirmedPasscode)
        props.toggleNewUser(false)
        setTimeout(()=>{
            setNewUserUi((prev)=>{
                return({
                    ...prev,
                    showConfirm: false
                })
            })
        }, 1000)
    }

    return (
    <div className={newUserUi.showConfirm ? 'new-user show-confirm': 'new-user'}>
        <div className="confirm">
            <div className="close" onClick={()=>{
                setNewUserUi((prev)=>{
                    return({
                        ...prev,
                        showConfirm: false
                    })
                })
            }}>
                <i className="fa fa-close"></i>
            </div>
            <div className="check">
                <i className="fa fa-check"></i>
            </div>
            <p>Your 4-digit PIN is <span>{confirmedPasscode}</span> </p>
            <div className="controls">
                <button>cancel</button>
                <button onClick={confirmCode}>Confirm</button>
            </div>
        </div>
        <div className="content">
            <div className="heading">
                <div className="logo">
                    <i className="fa fa-phone"></i>
                </div>
                <h2>
                    Welcome to XO-Contacts
                </h2>
                <p>
                    setup your 4-digit pin
                </p>
            </div>
            <div className="container">
                <div className="passcode">
                {passcode}
                </div>
                <div className={pointerKeys ? "keypad" : "keypad disabled"}>
                    <div className="keys">
                        <div className="key" onClick={()=>{
                            setPassCode((prev)=>{
                                return (prev + "1")
                            })
                        }}>
                            1
                        </div>
                        <div className="key" onClick={()=>{
                            setPassCode((prev)=>{
                                return (prev + "2")
                            })
                        }}>
                            2
                        </div>
                        <div className="key" onClick={()=>{
                            setPassCode((prev)=>{
                                return (prev + "3")
                            })
                        }}>
                            3
                        </div>
                    </div>
                    <div className="keys">
                        <div className="key" onClick={()=>{
                            setPassCode((prev)=>{
                                return (prev + "4")
                            })
                        }}>
                            4
                        </div>
                        <div className="key" onClick={()=>{
                            setPassCode((prev)=>{
                                return (prev + "5")
                            })
                        }}>
                            5
                        </div>
                        <div className="key" onClick={()=>{
                            setPassCode((prev)=>{
                                return (prev + "6")
                            })
                        }}>
                            6
                        </div>
                    </div>
                    <div className="keys">
                        <div className="key" onClick={()=>{
                            setPassCode((prev)=>{
                                return (prev + "7")
                            })
                        }}>
                            7
                        </div>
                        <div className="key" onClick={()=>{
                            setPassCode((prev)=>{
                                return (prev + "8")
                            })
                        }}>
                            8
                        </div>
                        <div className="key" onClick={()=>{
                            setPassCode((prev)=>{
                                return (prev + "9")
                            })
                        }}>
                            9
                        </div>
                    </div>
                    <div className="keys">
                        <div className="key" onClick={()=>{
                            setPassCode((prev)=>{
                                return (prev)
                            })
                        }}>
                            <i className="fa fa-question"></i>
                        </div>
                        <div className="key" onClick={()=>{
                            setPassCode((prev)=>{
                                return (prev + "0")
                            })
                        }}>
                            0
                        </div>
                        <div className="key" onClick={()=>{
                            setPassCode((prev)=>{
                                return prev.slice(0, -1)
                            })
                        }}>
                            <i className="fa fa-backspace"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewUser