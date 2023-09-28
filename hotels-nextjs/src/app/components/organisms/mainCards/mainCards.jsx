'use client'
import { useEffect, useState } from "react"
import Card from '@/app/components/molecules/card/card.jsx'
import styles from './mainCards.module.css'
import { useHotelsFilterContext } from "@/app/page"
import filterService from '@/app/services/filterService'

const fetchData = async (API_URL) => {
    return (await fetch(API_URL, { method: 'GET'})).json()
}   

const MainCards = () => {
    const { filterList ,setFilterList, hotelPlace, hotelFromDate, hotelToDate, hotelPrice, hotelSize,setHotelNumber } = useHotelsFilterContext();
    const [cardList, setCardList] = useState([])
    const [unmutableCardList, setUnmutableCardList] = useState([])
    const [API_URL, setAPI_URL] = useState('https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels');
    
    const cardsToRender = cardList.map((card, index) => <Card key={`${index}${card.slug}`} cardData={card}/>);
    
    useEffect(() => {
        async function fillCardList(){
            if(!ignore){
                let fetchedData = await fetchData(API_URL);
                setCardList(fetchedData)
                setUnmutableCardList(fetchedData)
            }
        }
        let ignore = false;
        fillCardList()
        return () => {
            ignore = true
        }
    },[API_URL])

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

    return (
        <section className={styles.cardsSection}>
            {cardList.length > 0 ? (
                cardsToRender
            ) : (
                <h1>No Hotels :(</h1>
            )  
            }
        </section>
    )
}

export default MainCards