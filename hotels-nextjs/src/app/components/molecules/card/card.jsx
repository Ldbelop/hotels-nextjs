import CardImg from '@/app/components/molecules/cardImg/cardImg.jsx'

const Card = ({ cardData }) => {
  return (
    <div>
        <CardImg 
            imgSrc={cardData.photo} 
            imgAlt={`${cardData.slug} photo`} 
            descText={cardData.description}
            country={cardData.country}
        />
    </div>
  )
}

export default Card