import styles from './header.module.css'
import { inter, poppins } from '@/utils/fonts'
import InfoTab from './infoTab/infoTab'

const Header = () => {
    return (
        <>
            <header className={`${styles.header} ${inter.className}`}>
                <h1 className={styles.header__logo}>Book It!</h1>
            </header>
            <InfoTab hotelNumber={3} place={'Latin America'} />
        </>
    )
}

export default Header