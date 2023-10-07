import styles from './header.module.css'
import { inter } from '@/utils/fonts'

const Header = ({ children }) => {

    return (
        <>
            <header className={`${styles.header} ${inter.className}`}>
                <h1 className={styles.header__logo}>Book It!</h1>
            </header>
            {children}
        </>
    )
}

export default Header