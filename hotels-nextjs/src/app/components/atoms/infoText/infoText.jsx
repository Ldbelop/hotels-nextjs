import React from 'react'
import { poppins } from '@/utils/fonts'
import styles from './infoText.module.css'


const InfoText = ({
    hotelNumber,
    place
}) => {
  return (
    <h2 className={`${poppins.className} ${styles.subTitle}`}>
        Check all of our 
        <span>
        &nbsp;
            {hotelNumber}
            &nbsp;
        
        </span>
        hotels in 
        <span>
        &nbsp;
            {place}
        </span>
    </h2>
  )
}

export default InfoText