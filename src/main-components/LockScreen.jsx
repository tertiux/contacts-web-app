import React, { useEffect, useState } from 'react'
// import { LoginContext } from '../context/LoginContext'

function LockScreen({checkCode}) {
    const [passcode, setPassCode] = useState("")
    const [pointerKeys, setPointerKeys] = useState(true)
    useEffect(()=>{
        if (passcode.toString().length >= 4){
            checkCode(passcode)
            // setPointerKeys(false)
            setPassCode("")
        } else{
            setPointerKeys(true)
        }
    }, [passcode, checkCode])
    const [lockScreenUi, setLockScreenUi] = useState({
        showConfirm: false
    })

    // const loginContextUsed = useContext(LoginContext)

    function clearData(){
        // loginContextUsed.functions.reset()
        window.localStorage.setItem("isLoggedIn", "false")
        window.localStorage.removeItem("storedContacts")
        window.localStorage.removeItem("userPasscode")
        window.localStorage.removeItem("userPreferences")
        setTimeout(()=>{
            window.location.reload()
        }, 700)
    }
  return (
    <div className={lockScreenUi.showConfirm ? 'lock-screen show-confirm' : 'lock-screen'}>
        <div className="confirm">
            <div className="close" onClick={()=>{
                setLockScreenUi((prev)=>{
                    return({
                        ...prev,
                        showConfirm: false
                    })
                })
            }}>
                <i className="fa fa-close"></i>
            </div>
            <div className="check">
                <i className="fa fa-triangle-exclamation fa-beat-fade"></i>
            </div>
            <p>This action will <span>Clear ALL</span> your contacts.</p>
            <div className="controls">
                <button onClick={clearData}>I Know</button>
            </div>
        </div>
      <div className="content">
        <div className="heading">
            <i className="fa fa-lock"></i>
            <p>Enter your passcode</p>
        </div>
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
                    setLockScreenUi((prev)=>{
                        return ({
                            ...prev,
                            showConfirm: true
                        })
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
  )
}

export default LockScreen
