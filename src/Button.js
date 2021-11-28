import React from 'react'
import { context } from './state'

const Button = (props, operation) => {
    console.log('button')
    const setCount = React.useContext(context)[1]
    return <button onClick={() => setCount(operation)}>{props.children}</button>
}

export const Add = p => Button(p, prev => ({ ...prev, count: prev.count + 1}))
export const Subtract = p => Button(p, prev => ({ ...prev, count: prev.count - 1}))
export const Half = p => Button(p, prev => ({ ...prev, count: prev.count / 2}))