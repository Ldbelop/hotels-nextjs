'use client'
import { useEffect, useState } from "react"
import Card from '@/app/components/molecules/card/card.jsx'

const fetchData = async () => {
    const API_URL = 'https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels';
    return (await fetch(API_URL, { method: 'GET'})).json()
}   

const MainCards = () => {
    const [cardList, setCardList] = useState([])
    useEffect(() => {
        async function fillCardList(){
            if(!ignore){
                let fetchedData = await fetchData();
                console.log(fetchedData)
                setCardList(fetchedData)
                console.log(cardList)
            }
        }
        let ignore = false;
        fillCardList()
        return () => {
            ignore = true
        }
    },[])
    return (
        <section>
            {cardList.map((card, index) => <Card key={`${index}${card.slug}`} cardData={card}/>)}
        </section>
    )
}

export default MainCards