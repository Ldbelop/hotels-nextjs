'use client'

const HotelsFilterContext = createContext(null);
import { createContext, useContext, useState } from 'react'

const HotelsFilterProvider = ({ children }) => {
    const [hotelNumber, setHotelNumber] = useState(0)
    const [hotelPlace, setHotelPlace] = useState({value: "All Countries", type: "place"});
    const [hotelFromDate, setHotelFromDate] = useState({value: "", type: "fromDate"})
    const [hotelToDate, setHotelToDate] = useState({value: "", type: "toDate"})
    const [hotelPrice, setHotelPrice] = useState({value: "All Prices", type: "price"})
    const [hotelSize, setHotelSize] = useState({value: "All Sizes", type: "size"})
    const [filterList, setFilterList] = useState([])

    return (
        <HotelsFilterContext.Provider
        value={
            {
                hotelNumber,
                setHotelNumber,
                hotelPlace,
                setHotelPlace,
                hotelFromDate,
                setHotelFromDate,
                hotelToDate,
                setHotelToDate,
                hotelPrice,
                setHotelPrice,
                hotelSize,
                setHotelSize,
                filterList,
                setFilterList
            }
        }>
            {children}
        </HotelsFilterContext.Provider>
  )
}

export default HotelsFilterProvider

export const useHotelsFilterContext = () => {
    const context = useContext(HotelsFilterContext);
    if(!context){
      throw new Error("useHotelsFilterContext must be used within a HotelsFilterContextProvider")
    }
    return context
  }