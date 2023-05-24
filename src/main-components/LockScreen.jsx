import React, { useEffect, useState } from 'react'

function LockScreen(props) {
    const [passcode, setPassCode] = useState("")
    const [pointerKeys, setPointerKeys] = useState(true)
    useEffect(()=>{
        if (passcode.toString().length >= 4){
            props.checkCode(passcode)
            setPointerKeys(false)
            setTimeout(()=>{
                setPassCode("")
                setPointerKeys(true)
            }, 500)
        } else{
            setPointerKeys(true)
        }
    }, [passcode, props])
  return (
    <div className='lock-screen'>
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
  )
}

export default LockScreen
