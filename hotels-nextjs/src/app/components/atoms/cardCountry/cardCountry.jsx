import Image from "next/image"
import styles from './cardCountry.module.css'

const CardCountry = ({ country }) => {
    return (
        <h2 className={styles.country}>
            <Image src={`/country-icons/${country.toLowerCase()}.svg`} alt={`${country} icon`} width='32' height='32'/>
            {country}
        </h2>
    )
}

export default CardCountry