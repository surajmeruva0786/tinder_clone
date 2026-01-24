import React from 'react'
import './Chats.css'
import Chat from './Chat'
function Chats() {
  return (
    <div className="chats">
        <Chat 
        name = "Elon Musk"
        message = "Hello"
        timestamp = "20 minutes ago"
        profilePic = "https://www.w3schools.com/howto/img_avatar.png"
        />
        <Chat 
        name = "Mark Zuckerberg"
        message = "Hello"
        timestamp = "20 minutes ago"
        profilePic = "https://www.w3schools.com/howto/img_avatar.png"
        />
        <Chat 
        name = "Bill Gates"
        message = "Hello"
        timestamp = "20 minutes ago"
        profilePic = "https://www.w3schools.com/howto/img_avatar.png"
        />
        <Chat
        name = "Ellen DeGeneres"
        message = "Hello"
        timestamp = "20 minutes ago"
        profilePic = "https://www.w3schools.com/howto/img_avatar.png"
        />

    </div>
  )
}

export default Chats