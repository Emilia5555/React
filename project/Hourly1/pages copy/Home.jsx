import React from 'react'
import LatestUpdate from '../components/LatestUpdate'
import LocationTime from '../components/LocationTime'
import WeatherWarning from '../components/WeatherWarning'
import UVIndex from '../components/UVIndex'
import Wind from '../components/Wind'
import Humidity from '../components/Humidity'
import Visibility from '../components/Visibility'

const Home = () => {
    //bring in the api.get() and push the response.data to the children
    return (
        <div>
            <LatestUpdate />
            <LocationTime />
            <WeatherWarning />
            <UVIndex />
            <Wind />
            <Humidity />
            <Visibility />
        </div>
    )
}

export default Home