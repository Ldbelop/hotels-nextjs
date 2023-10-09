'use client'
import DoubleSelect from "../../atoms/doubleSelect/doubleSelect"
import Select from "@/app/components/atoms/select/select.jsx"
import ActionButton from "@/app/components/atoms/actionButton/actionButton.jsx"
import styles from "./searcher.module.css"
import { useHotelsFilterContext } from '@/app/components/providers/HotelsFilterProvider.jsx'

const Searcher = () => {
    const { setHotelPlace, hotelPlace, setHotelFromDate, hotelFromDate, setHotelToDate, hotelToDate, setHotelPrice, hotelPrice, setHotelSize, hotelSize} = useHotelsFilterContext();

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
                    'Brasil',
                    'Chile',
                    'Uruguay'
                ]
            }
            setter={setHotelPlace}
            setterType={'place'}
            controlledValue={hotelPlace}
            />
            <div className={styles.selectsWrapper}>
                <div className={styles.twoSelect}>
                    <Select label={'From'} type={'date'} setter={setHotelFromDate} setterType={'fromDate'} controlledValue={hotelFromDate}/>
                    <Select label={'To'} type={'date'} setter={setHotelToDate} setterType={'toDate'} controlledValue={hotelToDate}/>
                </div>
                <div className={styles.twoSelect}>
                    <Select label={'Price'} options={['All Prices', '1', '2', '3', '4']} setter={setHotelPrice} setterType={'price'} controlledValue={hotelPrice}/>
                    <Select label={'Bedroom Size'} options={['All Sizes', 'Small', 'Medium', 'Large']} setter={setHotelSize} setterType={'size'} controlledValue={hotelSize}/>
                </div>
            </div>
            <ActionButton setterArray={[setHotelPlace, setHotelFromDate, setHotelToDate, setHotelPrice, setHotelSize]}/>
        </section>
    )
}

export default Searcher