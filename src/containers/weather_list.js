import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        return (
            <tr key={name} className='tr'>
                <td className='td city'>{name}</td>
                <td className='td graph temperature'>
                    {cityData.list[0].main.temp}
                </td>
                <td className='td graph pressure'>
                    {cityData.list[0].main.pressure}
                </td>
                <td className='td graph humidity'>
                    {cityData.list[0].main.humidity}
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
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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
