import { inter, poppins } from "@/utils/fonts";
import styles from './doubleSelect.module.css'

const DoubleSelect = ({ label, options }) => {
  const optionList = options.map((option, index) => {
    return <option key={`${option}${index}`} value={option}>{option}</option>
});


  return (
    <label className={`${poppins.className} ${styles.selectLabel}`}>
        <span>
            {label}
        </span>
        <select name="searcher" className={inter.className}>
            {optionList}
        </select>
    </label>
  )
}

export default DoubleSelect