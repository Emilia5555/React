import { useContext, useEffect, useState } from 'react'
import { apiContext } from '../App'

const TenDay = () => {
  const [dayOfWeek, setDayOfWeek] = useState([]);
  const [lowTemp, setLowTemp] = useState([]);
  const [highTemp, setHighTemp] = useState([]);
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const contextValue = useContext(apiContext);
  const { location, api, endpoint, setEndpoint, locationInput } = contextValue



  useEffect(() => {
    let endpoint = '/forecast';
    api.get(`${endpoint}.json?key=${process.env.REACT_APP_KEY}&q=${locationInput}&days=10&aqi=no&alerts=no`)
      .then(response => {
        let tenDayDate = [];
        let tenDayHighs = [];
        let tenDayLows = [];
        let d = new Date('8/10/2023');
        let day = d.getDay();
        
        

        for (let i = 0; i <= 9; i++){
          // daysOfWeek === getDay(response.data.forecast.forecastday[i].date);
          // console.log(dayOfWeek)
          d = new Date(response.data.forecast.forecastday[i].date)
          day = d.getDay()
          console.log(`here is the day ${day}`)
          console.log(`${daysOfWeek[day]}, ${response.data.forecast.forecastday[i].date}`)
          tenDayDate[i] = response.data.forecast.forecastday[i].date
          tenDayHighs[i] = response.data.forecast.forecastday[i].day.maxtemp_f
          tenDayLows[i] = response.data.forecast.forecastday[i].day.mintemp_f
        

        }
        console.log(tenDayDate)
        console.log(tenDayHighs)
        console.log(tenDayLows)
      
        // setDate(response.data.forecast.forecastday[0].date)
        console.log(response.data.forecast.forecastday[0].date)
        console.log(response.data.forecast.forecastday[0].day.mintemp_f)
        console.log(response.data.forecast.forecastday[0].day.maxtemp_f)
        // setHighTemp()
        // setLowTemp()
      
        // setCurrentTemp(response.data.current.temp_f);
        // setCurrentCondition(response.data.current.condition.text);

        console.log(endpoint)
        console.log(response.data)
        // console.log(response.data.forecast.forecastday[0].maxtemp_f)
        console.log(response.data.forecast.forecastday[0].day.maxtemp_f)
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [location]);


  return (
    <div>TenDay
      <p>Day of the Week: {dayOfWeek}</p>   
      <p>High Temp: {highTemp}</p>
      <p>Low Temp: {lowTemp}</p>
      {/* <p>High Temp: {response.data.forecast.forecastday[0].date}</p> */}
    </div>
  )
}

// http://api.weatherapi.com/v1/forecast.json?key=b55a046824644c14b33180550230708&q=dallas&days=10&aqi=no&alerts=no
//  http://api.weatherapi.com/v1/undefined.json?key=b55a046824644c14b33180550230708&q=32.7802202,-96.8009662&days=10&aqi=no&alerts=no

export default TenDay