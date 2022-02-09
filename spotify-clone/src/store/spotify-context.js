import React, { createContext, useContext, useReducer } from 'react'

const SpotifyContext = createContext({

})
export const SpotifyContextProvider = ({ children, initialState, reducer }) => {
  return (
    <SpotifyContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </SpotifyContext.Provider>

  )
}

export default SpotifyContext