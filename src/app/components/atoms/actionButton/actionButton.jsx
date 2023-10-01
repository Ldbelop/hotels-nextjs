'use client'
import { useState, useEffect, useRef } from 'react';
import styles from './actionButton.module.css'
import { poppins } from "@/utils/fonts";


const ActionButton = ( { flagship, setterArray } ) => {
    const [buttonText, setButtonText] = useState(flagship == true ? 'Book It!' : 'Clear')
    const [buttonClassName, setButtonClassName] = useState(flagship == true ? 
        `${poppins.className} ${styles.actionButton} ${styles.flagship}`: 
        `${poppins.className} ${styles.actionButton}`)
  
    const clearedValues = [
      {value: "All Countries", type: "place"},
      {value: "", type: "fromDate"},
      {value: "", type: "toDate"},
      {value: "All Prices", type: "price"},
      {value: "All Sizes", type: "size"}
    ]

    const buttonRef = useRef(null)

    useEffect(() => {
      if(buttonRef && buttonRef.current){
        buttonRef.current.addEventListener("click", clickHandler);
      }
      return () => {
        if(buttonRef && buttonRef.current){
          buttonRef.current.removeEventListener('click', clickHandler)
        }
      }
    }, [buttonRef])

    const clickHandler = () => {
      setterArray.forEach((setter, index) => {
        setter(clearedValues[index])
      })
      setButtonText("Cleared!")
      setButtonClassName(`${poppins.className} ${styles.actionButton} ${styles.cleared}`)
      setTimeout(() => {
        setButtonText("Clear")
        setButtonClassName(`${poppins.className} ${styles.actionButton}`)
      }, 2000)
    }

    const button = flagship == true ? (
      <button className={buttonClassName}>
        {buttonText}
      </button>) :
      (
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