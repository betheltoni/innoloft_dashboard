
import GoogleMapReact from 'google-map-react';
import { useAppSelector } from '../../store/store';

const AnyReactComponent = ({ text,lat,lng }:{text:string , lat:number, lng:number}) => <div>{text}{lat}{lng}</div>;


export default function SimpleMap(){
  const product = useAppSelector((state) => state.product.storeProduct)
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '300px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={product?.company?.address?.latitude}
          lng={product?.company?.address?.longitude}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}