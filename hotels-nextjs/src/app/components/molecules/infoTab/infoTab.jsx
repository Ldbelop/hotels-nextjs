import InfoText from '@/app/components/atoms/infoText/infoText.jsx'
import InfoNoHotels from '@/app/components/atoms/infoNoHotels/infoNoHotels.jsx'
import styles from './infoTab.module.css'

const InfoTab = ({ hotelNumber, place }) => {
    const noHotels = hotelNumber == 0;
    console.log(noHotels)

    // pasar los dos html a componentes
  return (
    <div className={styles.banner}>
        {noHotels == false ? (
            <InfoText hotelNumber={hotelNumber} place={place}/>
        ) : (
            <InfoNoHotels />
        )}
    </div>
  )
}

export default InfoTab