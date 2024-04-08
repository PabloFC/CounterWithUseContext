/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react"


export const CounterContext = createContext({
    counter: 0,
    setCounter: () => {}
})

export default function CounterContextProvider({ children }) {
    const [counter, setCounter] = useState(0)   

   

    return <CounterContext.Provider 
    value={{counter, setCounter}}>
        {children}
        </CounterContext.Provider>

}

export function useCounterContext() {
    return useContext(CounterContext)
}