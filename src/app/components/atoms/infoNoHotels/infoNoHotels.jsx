import React from 'react'
import { poppins } from '@/utils/fonts'
import styles from './infoNoHotels.module.css'

const InfoNoHotels = () => {
  return (
    <h2 className={`${poppins.className} ${styles.subTitle}`}>No Hotels</h2>
  )
}

export default InfoNoHotels