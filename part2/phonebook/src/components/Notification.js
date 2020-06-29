import React from 'react'

const Notification = ({ message}) => {
    if (message[0] === null) {
        return null
    }
    const className = message[1] ? "errorMessage" : "notification"
    return (
        <div className={className}>
            {message}
        </div>
    )
}


export default Notification