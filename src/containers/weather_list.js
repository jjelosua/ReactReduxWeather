import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temperatures = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={name}>
                <td className='city'>{name}</td>
                <td>
                    <Chart data={temperatures} color='red' units='K' />
                </td>
                <td>
                    <Chart data={pressures} color='green' units='hPa'/>
                </td>
                <td>
                    <Chart data={humidities} color='blue' units='%'/>
                </td>
            </tr>
        );
    }

    render() {
        return(
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

// Whatever is returned will show up in props in the container
function mapStateToProps({ weather }) {
    
    return { weather };  // { weather } equal to { weather: weather }
}

export default connect(mapStateToProps, null)(WeatherList);
