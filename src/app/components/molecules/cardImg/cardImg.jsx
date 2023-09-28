import CardCountry from '@/app/components/atoms/cardCountry/cardCountry.jsx'
import styles from './cardImg.module.css'
import { inter, poppins } from '@/utils/fonts'

const CardImg = ( { imgSrc, imgAlt, descText, country } ) => {
  return (
    <div className={styles.imgContainer}>
      <img className={styles.card__img} src={imgSrc} alt={ imgAlt } />
      <p className={`${styles.card__text} ${inter.className}`}>{descText}</p>
      <CardCountry country={country}/>
    </div>
  )
}

export default CardImg