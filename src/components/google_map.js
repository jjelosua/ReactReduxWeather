import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';

export default (props) => {
    const lat = props.coord.lat;
    const lng = props.coord.lon;

    return (
        <GoogleMapLoader
            containerElement={ <div style={{height:'100%', width:'100%'}} /> }
            googleMapElement={
              <GoogleMap
                defaultZoom={12}
                defaultCenter={{lat, lng}}>
                <Marker position={{lat, lng}} />
              </GoogleMap>
            }
        />
    );
};