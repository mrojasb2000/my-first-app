import React from 'react'

export default function HelloWorld(props) {
  const strFormatted = (user) => {
    const age = user.age ? ' your age is ' + user.age : ''
    return 'HelloWorld ' + user.name + age
  }
  const greeting = () => {
    alert('Hello World!')
  }
  return (
    <div>
      {strFormatted(props.user)}
      <button onClick={greeting}>Hello World</button>
    </div>
  )
}
