import React from 'react'
import './Chat.css'
function Chat() {
  return (
    <div className="chat">
        <div className="chat__header">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
            <div className="chat__headerInfo">
                <h2>Room name</h2>
                <p>Last seen at...</p>
            </div>
        </div>
    </div>
  )
}

export default Chat