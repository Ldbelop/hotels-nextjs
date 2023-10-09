import CardCountry from '@/app/components/atoms/cardCountry/cardCountry.jsx'
import styles from './cardImg.module.css'
import { inter, poppins } from '@/utils/fonts'
import Image from 'next/image'

const CardImg = ( { imgSrc, imgAlt, descText, country } ) => {
  return (
    <div className={styles.imgContainer}>
      {/* <Image fill={true} src={imgSrc} alt={ imgAlt } sizes='(max-width: 5000px) 100vw, 100vh'/> */}
      <img className={styles.card__img} src={imgSrc} alt={ imgAlt } />
      <p className={`${styles.card__text} ${inter.className}`}>{descText}</p>
      <CardCountry country={country}/>
    </div>
  )
}

export default CardImg