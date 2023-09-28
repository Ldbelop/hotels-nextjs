import styles from './actionButton.module.css'
import { poppins } from "@/utils/fonts";


const ActionButton = ( { flagship } ) => {
    const buttonClassName = flagship == true ? 
        `${poppins.className} ${styles.actionButton} ${styles.flagship}`: 
        `${poppins.className} ${styles.actionButton}`
    const buttonText = flagship == true ? 'Book It!' : 'Clear';
  return (
    <button className={buttonClassName}>
        {buttonText}
    </button>
  )
}

export default ActionButton