import styles from './header.module.css'
import { inter, poppins } from '@/utils/fonts'
import Link from 'next/link'

const Header = ({ children }) => {

    return (
        <>
            <header className={`${styles.header} ${inter.className}`}>
                <h1 className={`${styles.header__logo} ${poppins.className}`}>Book It!</h1>
                <section>
                    <Link className={`${styles.__link} ${poppins.className}`} href="/">Home</Link>
                    <Link className={`${styles.__link} ${poppins.className}`} href="/reservas">Mis Reservas</Link>
                </section>
            </header>
            {children}
        </>
    )
}

export default Header