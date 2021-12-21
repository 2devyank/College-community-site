
import React, { useState } from 'react'

import '../../styles/messageSection.css'
function Chatinput() {
    const [input, setinput] = useState("")
    const sendMessage=(e)=>{
        e.preventDefaults();
    }
    return (
        <div className='Chatinputcontainer'>
            <form >
                <input value={input} onChange={(e)=>setinput(e.target.value)} placeholder={`message #room`} />
                <button hidden type='submit' onClick={sendMessage}>SEND</button>
            </form>
        </div>
    )
}

export default Chatinput
