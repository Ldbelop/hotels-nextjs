import styles from './hotelInfo.module.css'
import { inter } from '@/utils/fonts'

const HotelInfo = ({ rooms, price }) => {
    let formattedPrice = '$';
    for(let i = 1; i < price; i++){
        formattedPrice += '$';
    }

    return (
        <h3 className={`${styles.text} ${inter.className}`}>
            {rooms} Habitaciones -
            <span>
                &nbsp;
                {formattedPrice}
            </span>
        </h3>
    )
}

export default HotelInfo