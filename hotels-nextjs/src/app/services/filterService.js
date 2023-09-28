const filterHotels = (hotelArray, filterArray) => {
    console.log(hotelArray)
    filterArray.forEach(filter => {
        if(filter.value == 'All Countries' || filter.value == 'All Prices' || filter.value == 'All Sizes'){
        } else{
            switch(filter.type){
                case 'place':
                    hotelArray = hotelArray.filter((hotel) => hotel.country == filter.value);
                    console.log(hotelArray)
                    break;
                
                case 'price':
                    hotelArray = hotelArray.filter((hotel) => hotel.price == filter.value);
                    console.log(hotelArray)
                    break;
                
                case 'fromDate':
                    console.log((Date.parse(filter.value)/1000.0))
                    hotelArray = hotelArray.filter((hotel) => hotel.availabilityFrom <= (Date.parse(filter.value)/1000.0))
                    break;
                
                case 'toDate':
                    hotelArray = hotelArray.filter((hotel) => hotel.availabilityTo >= (Date.parse(filter.value)/1000.0))
                    break;
                
                case 'size':
                    switch(filter.value){
                        case 'Small':
                            hotelArray = hotelArray.filter((hotel) => hotel.rooms <=  10)
                            break;
                        case 'Medium':
                            hotelArray = hotelArray.filter((hotel) => hotel.rooms > 10 && hotel.rooms <= 20)
                            break;
                        case 'Large':
                            hotelArray = hotelArray.filter((hotel) => hotel.rooms > 20)
                            break;
                    }
            }
        }
    });
    console.log(hotelArray)
    return hotelArray;
}

const addFilter = (filterArray, newFilter) => {
    console.log(filterArray)
    if(newFilter != null){
        console.log(newFilter)
        if(newFilter.value == ""){
            return [...filterArray]
        }else{
            let filterCoincidenceIndex;
            const filterCoincidence = filterArray.find((filter, index) => {
                filterCoincidenceIndex = index;
                return filter.type == newFilter.type
            })
            if(filterCoincidence == undefined){
                console.log(newFilter)
                filterArray.push(newFilter)
            } else{
                console.log(newFilter)
                filterArray[filterCoincidenceIndex] = newFilter;
            }
            return [...filterArray]
        }
    } else{
        return [...filterArray]
    }
} 

export default {filterHotels, addFilter}