import { inter, poppins } from "@/utils/fonts";
import styles from './doubleSelect.module.css'

const DoubleSelect = ({ label, options, setter, setterType, controlledValue }) => {
  const optionList = options.map((option, index) => {
    return <option key={`${option}${index}`} value={option}>{option}</option>
  });

  const handleChange = (event) => {
    setter({
      value: event.target.value,
      type: setterType
    })
  }   

  return (
    <label className={`${poppins.className} ${styles.selectLabel}`}>
        <span>
            {label}
        </span>
        <select name="searcher" value={controlledValue.value} className={inter.className} onChange={handleChange}>
            {optionList}
        </select>
    </label>
  )
}

export default DoubleSelect