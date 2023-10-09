import CardImg from '@/app/components/molecules/cardImg/cardImg.jsx'
import CardInfo from '@/app/components/molecules/cardInfo/cardInfo.jsx'
import styles from './card.module.css'

const Card = ({ cardData, flagship, reserve}) => {
  return (
    <div className={styles.card}>
        <CardImg 
            imgSrc={cardData.photo} 
            imgAlt={`${cardData.slug} photo`} 
            descText={cardData.description}
            country={cardData.country}
        />
        <CardInfo hotelName={cardData.name} hotelInfo={{price: cardData.price, rooms: cardData.rooms}} flagship={flagship} reserve={reserve} cardData={cardData}/>
    </div>
  )
}

export default Card