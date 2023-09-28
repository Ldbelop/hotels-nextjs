'use client'
import Header from '@/app/components/organisms/header/header.jsx'
import Searcher from '@/app/components/organisms/searcher/searcher.jsx'
import MainCards from '@/app/components/organisms/mainCards/mainCards.jsx'
import { createContext, useContext, useState } from 'react'

const HotelsFilterContext = createContext(null);

export default function Home() {

  const [hotelNumber, setHotelNumber] = useState(0)
  const [hotelPlace, setHotelPlace] = useState({value: "All Countries", type: "place"});
  const [hotelFromDate, setHotelFromDate] = useState(null)
  const [hotelToDate, setHotelToDate] = useState(null)
  const [hotelPrice, setHotelPrice] = useState("All Prices")
  const [hotelSize, setHotelSize] = useState("All Sizes")
  const [filterList, setFilterList] = useState([])


  return (
    <>
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
        <Header />
        <main>
          <Searcher />
          <MainCards />
        </main>
      </HotelsFilterContext.Provider>
    </>
  )
}

export const useHotelsFilterContext = () => {
  const context = useContext(HotelsFilterContext);
  if(!context){
    throw new Error("useHotelsFilterContext must be used within a HotelsFilterContextProvider")
  }
  return context
}