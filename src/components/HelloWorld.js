import React from 'react'

export default function HelloWorld(props) {
  const strFormatted = (props) => {
    const age = props.age ? ' your age is ' + props.age : ''
    return 'HelloWorld ' + props.name + age
  }
  return <div>{strFormatted(props)}</div>
}
