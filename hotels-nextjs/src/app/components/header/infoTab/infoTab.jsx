
const InfoTab = ({ hotelNumber, place }) => {
    const noHotels = hotelNumber == 0;
    console.log(noHotels)

    // pasar los dos html a componentes
  return (
    <>
        {noHotels == false ? (
            <h2>Check all of our {hotelNumber} hotels in {place}</h2>
        ) : (
            <h2>No hotels {noHotels}</h2>
        )}
    </>
  )
}

export default InfoTab