import { inter, poppins } from "@/utils/fonts";
import styles from './select.module.css'


const Select = ( { label, type, options, setter, setterType }) => {
    const formatOption = (option) => {
        if(label == 'Price' && option != 'All Prices'){
            let formattedPrice = '$';
            for(let i = 1; i < option; i++){
                formattedPrice += '$';
            }
            return formattedPrice
        } else{
            return option
        }
    }
    
    const handleChange = (event) => {
        setter({
            value: event.target.value,
            type: setterType
        })
    }   

    const selectTag = type == 'date' ? (
        <input className={inter.className} type="date" name="" id="" onChange={handleChange}/>
    ) : (
        <select name="" id="" className={inter.className} onChange={handleChange}>
            {options.map((option, index) => {
                return <option key={`${index}${option}`} value={option}>{formatOption(option)}</option>
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