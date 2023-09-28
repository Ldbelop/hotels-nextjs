import ActionButton from "@/app/components/atoms/actionButton/actionButton.jsx"
import HotelInfo from '@/app/components/atoms/hotelInfo'
import styles from './cardInfo.module.css'
import {inter, poppins} from '@/utils/fonts'

const CardInfo = ({ hotelName, hotelInfo }) => {
  return (
    <>
        <h2 className={`${styles.hotelName} ${poppins.className}`}>{hotelName}</h2>
        <div className={styles.infoDiv}>
            <HotelInfo rooms={hotelInfo.rooms} price={hotelInfo.price}/>
            <ActionButton flagship={true}/>
        </div>
    </>
  )
}

export default CardInfo