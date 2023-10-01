import { inter, poppins } from "@/utils/fonts";
import styles from './select.module.css'


const Select = ( { label, type, options, setter, setterType, controlledValue }) => {
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
        console.log(event.target.value)
        setter({
            value: event.target.value,
            type: setterType
        })
    }   

    const handleLoad = (event) => {
        console.log(event.target.value)
    }

    const selectTag = type == 'date' ? (
        <input className={inter.className} type="date" name="" id="" onLoad={handleLoad} onChange={handleChange} value={controlledValue.value}/>
    ) : (
        <select name="" id="" className={inter.className} onChange={handleChange} value={controlledValue.value}>
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