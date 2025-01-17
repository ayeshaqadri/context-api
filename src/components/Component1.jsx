import React from 'react'
import { GlobalContext } from '../context'
import { useContext } from 'react'


export const component1 = () => {
    let { state, dispatch } = useContext(GlobalContext);
    return (
        <>    <h1>component1 {state.MyNum}</h1>
            <button onClick={() => dispatch({ type: "ADD" })}>add a num</button></>
    )
}

