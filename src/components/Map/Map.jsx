import "./MapStyle.css";
import { Pages } from "../Pages/Pages";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export function Map(){
  const defaultProps = {
    center: {
      lat: 50.450001,
      lng: 30.523333
    },
    zoom: 11
  };

  return (
    <div className="main-container">
        <Pages/>
    <div style={{ height: '80vh', width: '88%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={50.450001}
          lng={30.523333}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
    </div>
  );
}