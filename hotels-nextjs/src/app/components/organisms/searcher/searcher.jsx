import DoubleSelect from "../../atoms/doubleSelect/doubleSelect"
import Select from "@/app/components/atoms/select/select.jsx"
import ActionButton from "@/app/components/atoms/actionButton/actionButton.jsx"
import styles from "./searcher.module.css"

const Searcher = () => {
  return (
    <section className={styles.searcher}>
        <div className={styles.background__black}></div>
        <DoubleSelect 
        label={'Where'} 
        id={'whereSelect'}
        options={
            [
                'All Countries',
                'Argentina',
                'Brazil',
                'Chile',
                'Uruguay'
            ]
        }
        />
        <div className={styles.selectsWrapper}>
            <div className={styles.twoSelect}>
                <Select label={'From'} type={'date'}/>
                <Select label={'To'} type={'date'}/>
            </div>
            <div className={styles.twoSelect}>
                <Select label={'Price'} options={['All Prices', '$', '$$', '$$$', '$$$$']}/>
                <Select label={'Bedroom Size'} options={['All Sizes', 'Small', 'Medium', 'Large']}/>
            </div>
        </div>
        <ActionButton />
    </section>
  )
}

export default Searcher