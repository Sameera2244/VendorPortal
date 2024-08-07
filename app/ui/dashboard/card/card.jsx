'use client'
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  width: 300px;
  background-color: #f7f7f7;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const TeamContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TeamHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TeamName = styled.div`
  font-weight: bold;
  color: white;
`;

const TeamStatus = styled.div`
  color: white ;
`;

const MapContainer = styled.div`
  flex: 1;
  height: 100vh;
`;

const teams = [
  { Name: 'Assigned', Vendors: '9 Vendor', online: '0 Online', offline: '0 Offline', color: '#7ab0c4' },
  { Name: 'Unassigned', Vendors: '8 Vendor', online: '5 Online', offline: '3 Offline', color: '#7ab0c4' },
  { Name: 'Off Duty', Vendors: '4 Vendor', online: '2 Online', offline: '2 Offline', color: '#7ab0c4' },
  { Name: 'Available', Vendors: '16 Vendor', online: '12 Online', offline: '4 Offline', color: '#7ab0c4' },
];

const MapPage = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);

  return (
    <Container>
      <Sidebar>
        {teams.map((team, index) => (
          <TeamContainer key={index} style={{ backgroundColor: team.color }}>
            <TeamHeader>
              <TeamName>{team.Name}</TeamName>
            </TeamHeader>
            <TeamStatus>
              {team.Vendors} : {team.online} ・ {team.offline}
            </TeamStatus>
          </TeamContainer>
        ))}
      </Sidebar>
      <MapContainer>
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
      </MapContainer>
    </Container>
  );
};

export default MapPage;
