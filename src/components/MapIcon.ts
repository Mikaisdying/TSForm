import L from 'leaflet';
import iconUrl from '../assets/Simplification.svg';

const iconPerson = new L.Icon({
  iconUrl: iconUrl,
  iconRetinaUrl: iconUrl,
  //   iconAnchor: null,
  //   popupAnchor: null,
  //   shadowUrl: null,
  //   shadowSize: null,
  //   shadowAnchor: null,
  iconSize: new L.Point(60, 75),
});

export default iconPerson;
