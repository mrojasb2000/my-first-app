import React from 'react'

export default function HelloWorld(props) {
  const strFormatted = (props) => {
    const name = props.name
    const age = props.age ? ' your age is ' + props.age : ''
    return 'HelloWorld ' + name + age
  }
  return <div>{strFormatted(props)}</div>
}
