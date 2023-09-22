import Image from "next/image"

const CardCountry = ({ country }) => {
    return (
        <h2>
            <Image src={`/country-icons/${country.toLowerCase()}.svg`} alt={`${country} icon`} width='32' height='32'/>
            {country}
        </h2>
    )
}

export default CardCountry