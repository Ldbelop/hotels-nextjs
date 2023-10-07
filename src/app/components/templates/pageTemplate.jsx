'use client'
import Header from '@/app/components/organisms/header/header.jsx'
import Searcher from '@/app/components/organisms/searcher/searcher.jsx'
import MainCards from '@/app/components/organisms/mainCards/mainCards.jsx'
import { createContext, useContext, useState } from 'react'
import InfoTab from '@/app/components/molecules/infoTab/infoTab.jsx'
const HotelsFilterContext = createContext(null);


const PageTemplate = () => {
    const [hotelNumber, setHotelNumber] = useState(0)
    const [hotelPlace, setHotelPlace] = useState({value: "All Countries", type: "place"});
    const [hotelFromDate, setHotelFromDate] = useState({value: "", type: "fromDate"})
    const [hotelToDate, setHotelToDate] = useState({value: "", type: "toDate"})
    const [hotelPrice, setHotelPrice] = useState({value: "All Prices", type: "price"})
    const [hotelSize, setHotelSize] = useState({value: "All Sizes", type: "size"})
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
          <Header>
            <InfoTab />
          </Header>
          <main>
            <Searcher />
            <MainCards />
          </main>
        </HotelsFilterContext.Provider>
      </>
    )
}

export default PageTemplate

export const useHotelsFilterContext = () => {
    const context = useContext(HotelsFilterContext);
    if(!context){
      throw new Error("useHotelsFilterContext must be used within a HotelsFilterContextProvider")
    }
    return context
  }