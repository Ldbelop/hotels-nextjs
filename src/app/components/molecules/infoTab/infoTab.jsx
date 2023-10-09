'use client'
import InfoText from '@/app/components/atoms/infoText/infoText.jsx'
import InfoNoHotels from '@/app/components/atoms/infoNoHotels/infoNoHotels.jsx'
import styles from './infoTab.module.css'
import { poppins } from '@/utils/fonts'
import { useHotelsFilterContext } from '@/app/components/providers/HotelsFilterProvider.jsx'

const InfoTab = ({ loading }) => {
  const { hotelNumber, hotelPlace } = useHotelsFilterContext();

  return (
    <div className={styles.banner}>
        {hotelNumber > 0 ? (
            <InfoText hotelNumber={hotelNumber} place={hotelPlace.value}/>
        ): loading == true ? (
          <h1 className={`${poppins.className} ${styles.loading}`}>Loading Hotels...</h1>
        )
        : (
            <InfoNoHotels />
        )}
    </div>
  )
}

export default InfoTab