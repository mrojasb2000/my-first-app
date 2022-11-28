import React from 'react'

export default function HelloWorld(props) {
  const strFormatted = (user) => {
    const age = user.age ? ' your age is ' + user.age : ''
    return 'HelloWorld ' + user.name + age
  }

  return (
    <div>
      {strFormatted(props.user)}
      <button onClick={props.fn}>Hello World</button>
    </div>
  )
}
