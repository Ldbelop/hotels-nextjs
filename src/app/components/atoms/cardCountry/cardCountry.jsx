import Image from "next/image"
import styles from './cardCountry.module.css'
import { inter } from '@/utils/fonts'

const CardCountry = ({ country }) => {
    return (
        <h4 className={`${styles.country} ${inter.className}`}>
            <Image src={`/country-icons/${country.toLowerCase()}.svg`} alt={`${country} icon`} width='16' height='16'/>
            {country}
        </h4>
    )
}

export default CardCountry