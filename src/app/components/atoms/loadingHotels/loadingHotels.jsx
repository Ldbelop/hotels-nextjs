import styles from './loadingHotels.module.css'
import { poppins } from '@/utils/fonts'

const LoadingHotels = () => {
  return (
    <section className={`${styles.loading} ${poppins.className}`}>
        <section className={styles.custom_loader}></section>
        <h1>Loading Hotels...</h1>
    </section>
  )
}

export default LoadingHotels