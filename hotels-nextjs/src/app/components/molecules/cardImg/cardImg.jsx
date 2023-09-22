import ImgText from '@/app/components/atoms/imgText/imgText.jsx'
import CardCountry from '@/app/components/atoms/cardCountry/cardCountry.jsx'
import styles from './cardImg.module.css'

const CardImg = ( { imgSrc, imgAlt, descText, country } ) => {
  return (
    <div>
      <img className={styles.card__img} src={imgSrc} alt={ imgAlt } />
      <ImgText descText={descText} />
      <CardCountry country={country}/>
    </div>
  )
}

export default CardImg