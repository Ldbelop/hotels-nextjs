import { inter, poppins } from "@/utils/fonts";
import styles from './select.module.css'


const Select = ( { label, type, options}) => {
    const selectTag = type == 'date' ? (
        <input className={inter.className} type="date" name="" id="" />
    ) : (
        <select name="" id="" className={inter.className}>
            {options.map((option, index) => {
                return <option key={`${index}${option}`} value={option}>{option}</option>
            })}
        </select>
    )

    return (
        <label className={`${poppins.className} ${styles.selectLabel}`}>
            <span>
                {label}
            </span>
            {selectTag}
        </label>
    )
}

export default Select