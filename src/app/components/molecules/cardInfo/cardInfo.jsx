import ActionButton from "@/app/components/atoms/actionButton/actionButton.jsx"
import HotelInfo from '@/app/components/atoms/hotelInfo'
import styles from './cardInfo.module.css'
import {inter, poppins} from '@/utils/fonts'

const CardInfo = ({ hotelName, hotelInfo, flagship = true, reserve = false, cardData }) => {
  return (
    <>
        <h2 className={`${styles.hotelName} ${poppins.className}`}>{hotelName}</h2>
        <div className={styles.infoDiv}>
            <HotelInfo rooms={hotelInfo.rooms} price={hotelInfo.price}/>
            <ActionButton flagship={flagship} reserve={reserve} cardData={cardData}/>
        </div>
    </>
  )
}

export default CardInfo