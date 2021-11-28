import React from 'react'
import { context } from './state'

function Display() {
  console.log('display')
  const [state] = React.useContext(context)
  return <h1>{state.count}</h1>
}

export default Display