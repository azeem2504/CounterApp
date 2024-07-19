import React from 'react'

const Message = (props) => {
  return (
    <h1 className={props.color}>{props.msg} {props.count}</h1>
  )
}

export default Message
