'use client'
import Header from '@/app/components/organisms/header/header.jsx'
import Searcher from '@/app/components/organisms/searcher/searcher.jsx'
import MainCards from '@/app/components/organisms/mainCards/mainCards.jsx'
import InfoTab from '@/app/components/molecules/infoTab/infoTab.jsx'
import { useEffect, useState } from "react"
import Card from '@/app/components/molecules/card/card.jsx'
import { useHotelsFilterContext } from '@/app/components/providers/HotelsFilterProvider.jsx'
import filterService from '@/app/services/filterService'
import Loading from '../../loading'

const fetchData = async (API_URL) => {
  return (await fetch(API_URL, { method: 'GET'})).json()
}

const PageTemplate = () => {
    const { filterList ,setFilterList, hotelPlace, hotelFromDate, hotelToDate, hotelPrice, hotelSize,setHotelNumber } = useHotelsFilterContext();
    const [cardList, setCardList] = useState([])
    const [unmutableCardList, setUnmutableCardList] = useState([])
    const [API_URL, setAPI_URL] = useState('https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels');
    const cardsToRender = cardList.map((card, index) => <Card flagship={true} reserve={false} key={`${index}${card.slug}`} cardData={card}/>);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        async function fillCardList(){
            if(!ignore){
                let fetchedData = await fetchData(API_URL);
                setLoading(false)
                setCardList(fetchedData)
                setUnmutableCardList(fetchedData)
            }
        }
        let ignore = false;
        fillCardList()
        return () => {
            ignore = true
        }
    },[])

    useEffect(() => {
        setHotelNumber(cardList.length)
    }, [cardList])

    useEffect(() => {
        console.log("unmutableCardList")
        console.log(unmutableCardList)
        console.log("useEffect")
        setCardList(filterService.filterHotels(unmutableCardList, filterList))
    }, [filterList])

    useEffect(()=>{
        const newFilterList = filterService.addFilter(filterList, hotelPlace);
        setFilterList(newFilterList)
    }, [hotelPlace])

    useEffect(()=>{
        const newFilterList = filterService.addFilter(filterList, hotelFromDate);
        setFilterList(newFilterList)
    }, [hotelFromDate])

    useEffect(()=>{
        const newFilterList = filterService.addFilter(filterList, hotelToDate);
        setFilterList(newFilterList)
    }, [hotelToDate])

    useEffect(()=>{
        const newFilterList = filterService.addFilter(filterList, hotelPrice);
        setFilterList(newFilterList)
    }, [hotelPrice])

    useEffect(()=>{
        const newFilterList = filterService.addFilter(filterList, hotelSize);
        setFilterList(newFilterList)
    }, [hotelSize])

    const mainCards = isLoading == true ? <Loading /> : <MainCards cardList={cardsToRender}/>

    return (
      <>
            <Header>
              <InfoTab loading={true}/>
            </Header>
            <main>
                <Searcher />
                {mainCards}
            </main>
      </>
    )
}

export default PageTemplate