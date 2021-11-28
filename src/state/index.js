import React from 'react'
import initialState from './initialStates'

// DO NOT MODIFY ANYTHING IN THIS FILE. 
// This is boilerplate for react context.
// (initialState.js can be modified instead).

export const context = React.createContext()

function Provider (props) {
    const stateHook = React.useState(initialState)
    return <context.Provider value={stateHook}>
        {props.children}
    </context.Provider>
}

export default Provider