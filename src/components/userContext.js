
import React from 'react'

const UserContext = React.createContext()

const UserProviver = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProviver, UserConsumer }
