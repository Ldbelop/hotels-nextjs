import Loading from '../../../loading'
import InfoNoHotels from '../../atoms/infoNoHotels/infoNoHotels'
import styles from './mainCards.module.css'

const MainCards = ({ cardList }) => {
    return (
        <section className={styles.cardsSection}>
            {cardList != undefined && cardList.length > 0 ? (
                cardList
            ) : (
                <InfoNoHotels />
            )
            }
        </section>
    )
}

export default MainCards