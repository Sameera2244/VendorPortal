'use client';
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
`;

const MapContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const MapCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  height: 70vh; /* Increased height */
`;

const MapPage = () => {
  return (
    <Container>
      <MainContent>
        <MapContainer>
          <MapCard>
            <LoadScript googleMapsApiKey="AIzaSyASeaOaKqrEGtmCAM6lfxDj7YSh-uwHdBs">
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                center={{ lat: 17.3850, lng: 78.4867 }}
                zoom={12}
              >
                <Marker position={{ lat: 17.3850, lng: 78.4867 }} />
                <Marker position={{ lat: 17.4504, lng: 78.3808 }} />
              </GoogleMap>
            </LoadScript>
          </MapCard>
        </MapContainer>
      </MainContent>
    </Container>
  );
};

export default MapPage;
