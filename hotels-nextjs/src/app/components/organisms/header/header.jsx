import styles from './header.module.css'
import { inter } from '@/utils/fonts'
import InfoTab from '@/app/components/molecules/infoTab/infoTab.jsx'

const Header = () => {
    return (
        <>
            <header className={`${styles.header} ${inter.className}`}>
                <h1 className={styles.header__logo}>Book It!</h1>
            </header>
            <InfoTab hotelNumber={5} place={'La pampa'} />
        </>
    )
}

export default Header