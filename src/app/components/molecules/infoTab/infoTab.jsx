import InfoText from '@/app/components/atoms/infoText/infoText.jsx'
import InfoNoHotels from '@/app/components/atoms/infoNoHotels/infoNoHotels.jsx'
import styles from './infoTab.module.css'
import { useHotelsFilterContext } from '@/app/page'

const InfoTab = () => {
  const { hotelNumber, hotelPlace } = useHotelsFilterContext();

  return (
    <div className={styles.banner}>
        {hotelNumber > 0 ? (
            <InfoText hotelNumber={hotelNumber} place={hotelPlace.value}/>
        ) : (
            <InfoNoHotels />
        )}
    </div>
  )
}

export default InfoTab