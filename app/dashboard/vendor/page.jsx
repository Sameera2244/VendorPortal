"use client"
import React,{useEffect} from "react";
import { Loader } from '@googlemaps/js-api-loader';

export function Map() {
    
     const mapRef = React.useRef(null);
      useEffect{() => {

        const initMap = async () => {
          const loader = new Loader({
            apiKey:process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
            version:'weekly'

          });
          const {Map} = loader.importlibrary('maps');
          // init a marker
          const {Marker} = await loader.importLibrary('marker') as google.maps.MarkerLibrary;

          const position = {
            lat:43.642693,
            lng:-79.3871189
          }
          //map options
          const mapOptions:google.maps.MapOptions = {
            Center:position,
            zoom:17,
            mapId: 'MY_NEXTJS_MAPID'
          }
          // setup the map
        const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

        //put up a marker
        const marker = new Marker ( {
          map: map,
          position:position
        })
        }
        initMap();
      },  []};
}