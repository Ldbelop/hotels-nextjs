'use client'
import { useState, useEffect, useRef } from 'react';
import styles from './actionButton.module.css'
import { poppins } from "@/utils/fonts";
import { useReservesContext } from '../../providers/ReservesProvider';


const ActionButton = ( { flagship, setterArray, reserve, cardData  } ) => {
    const [buttonText, setButtonText] = useState(flagship == true && reserve == false ? 'Book It!' : (flagship == false && reserve == true) ? 'Remove' : 'Clear')
    const [buttonClassName, setButtonClassName] = useState(flagship == true && reserve == false ? 
        `${poppins.className} ${styles.actionButton} ${styles.flagship}`: (flagship == false && reserve == true) ? `${poppins.className} ${styles.actionButton} ${styles.reserve}` : `${poppins.className} ${styles.actionButton}`)

    const clearedValues = [
      {value: "All Countries", type: "place"},
      {value: "", type: "fromDate"},
      {value: "", type: "toDate"},
      {value: "All Prices", type: "price"},
      {value: "All Sizes", type: "size"}
    ]

    const buttonRef = useRef(null)
    const reserveRef = useRef(null)
    const flagshipRef = useRef(null)

    const {reservesList, setReservesList} = useReservesContext()

    useEffect(() => {
      const clickHandler = () => {
        setterArray.forEach((setter, index) => {
          setter(clearedValues[index])
        })
        setButtonClassName(`${poppins.className} ${styles.actionButton} ${styles.cleared}`)
        setButtonText("Cleared!")
        setTimeout(() => {
          setButtonClassName(`${poppins.className} ${styles.actionButton}`)
          setButtonText("Clear")
        }, 2000)
      }

      if(buttonRef && buttonRef.current){
        buttonRef.current.addEventListener("click", clickHandler);
      }
      return () => {
        if(buttonRef && buttonRef.current){
          buttonRef.current.removeEventListener('click', clickHandler)
        }
      }
    }, [buttonRef])

    useEffect(() => {
      const clickHandler = () => {
        setReservesList(
          [...reservesList, {
            card: cardData,
            id: `${cardData.slug}${cardData.avaliabilityFrom}`
          }]
        )
        localStorage.setItem('reservesList', JSON.stringify([...reservesList, {
          card: cardData,
          id: `${cardData.slug}${cardData.avaliabilityFrom}`
        }]))
        setButtonClassName(`${poppins.className} ${styles.actionButton} ${styles.flagship} ${styles.cleared}`)
        setButtonText("Booked!")
        setTimeout(() => {
          setButtonClassName(`${poppins.className} ${styles.actionButton} ${styles.flagship}`)
          setButtonText("Book It")
        }, 2000)
      }

      if(flagshipRef && flagshipRef.current){
        flagshipRef.current.addEventListener("click", clickHandler);
      }
      return () => {
        if(flagshipRef && flagshipRef.current){
          flagshipRef.current.removeEventListener('click', clickHandler)
        }
      }
    }, [flagshipRef])

    useEffect(() => {
      const clickHandler = () => {
        console.log(cardData)
        let helperArray = reservesList.filter((reservedCard) => reservedCard.id != `${cardData.slug}${cardData.avaliabilityFrom}`)
        localStorage.setItem('reservesList', JSON.stringify(helperArray))
        setReservesList(helperArray)
        setButtonText("Removed!")
        setTimeout(() => {
          setButtonText("Remove")
        }, 2000)
      }
      
      if(reserveRef && reserveRef.current){
        reserveRef.current.addEventListener("click", clickHandler);
      }
      return () => {
        if(reserveRef && reserveRef.current){
          reserveRef.current.removeEventListener('click', clickHandler)
        }
      }
    }, [reserveRef])

    const button = flagship == true && reserve == false ? (
      <button className={buttonClassName} ref={flagshipRef}>
        {buttonText}
      </button>) :
      (flagship == false && reserve == true) ? (
      <button ref={reserveRef} className={buttonClassName}>
        {buttonText}
      </button>
      ) :(
      <button ref={buttonRef} className={buttonClassName}>
        {buttonText}
      </button>)
  return (
    <>
      {button}
    </>
  )
}

export default ActionButton