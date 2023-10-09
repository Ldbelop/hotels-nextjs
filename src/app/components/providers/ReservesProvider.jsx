'use client'

import { createContext, useContext, useState } from 'react'
const ReservesContext = createContext(null);

const ReservesProvider = ({ children }) => {
  const [reservesList, setReservesList] = useState([])

  return (
    <ReservesContext.Provider
      value={
        {
          reservesList,
          setReservesList
        }
      }
    >
      {children}
    </ReservesContext.Provider>
  )
}

export default ReservesProvider

export const useReservesContext = () => {
  const context = useContext(ReservesContext);
  if(!context){
    throw new Error("useReservesContext must be used within a HotelsFilterContextProvider")
  }
  return context
}