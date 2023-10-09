'use client'
import Header from "@/app/components/organisms/header/header"
import Card from '@/app/components/molecules/card/card.jsx'
import { useReservesContext } from '@/app/components/providers/ReservesProvider'
import MainCards from '@/app/components/organisms/mainCards/mainCards.jsx'
import { useEffect } from 'react';

const ReservasTemplate = () => {
  let { reservesList, setReservesList } = useReservesContext()

  useEffect(() => {
    setReservesList(JSON.parse(localStorage.getItem('reservesList')))
  },[])

  const cardsToRender = reservesList.map((card, index) => <Card flagship={false} reserve={true} key={`${index}${card.card.slug}`} cardData={card.card}/>)

  return (
    <>
        <Header>
        </Header>
        <MainCards cardList={cardsToRender} />
    </>
  )
}

export default ReservasTemplate