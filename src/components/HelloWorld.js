import React from 'react'

export default function HelloWorld(props) {
  const { user, fn } = props

  const strFormatted = (user) => {
    const age = user.age ? ' your age is ' + user.age : ''
    return 'HelloWorld ' + user.name + age
  }

  return (
    <div>
      {strFormatted(user)}
      <button onClick={() => fn(user.name)}>Hello World</button>
    </div>
  )
}
