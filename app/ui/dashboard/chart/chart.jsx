'use client';
import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import styled from 'styled-components';
import { FaCalendarAlt } from 'react-icons/fa';

Chart.register(ArcElement, Tooltip, Legend);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const PieChartContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
`;

const CalendarIcon = styled(FaCalendarAlt)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5em;
  color: black;
  cursor: pointer;
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  width: 300px;
  text-align: center;
`;

const PopupContent = styled.div`
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  background-color: #ff6384;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
`;

const CalendarContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const pieData = {
  labels: ['Vendor 1', 'Vendor 2', 'Vendor 3'],
  datasets: [
    {
      data: [30, 50, 20],
      backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
    },
  ],
};

const Page = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [vendorName, setVendorName] = useState('');
  const [vendorEfficiency, setVendorEfficiency] = useState('');

  const handleIconClick = () => {
    setShowCalendar(true);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setVendorName('Vendor 1'); // Replace with actual vendor name based on date
    setVendorEfficiency('70%'); // Replace with actual efficiency based on date
    setShowPopup(true);
    setShowCalendar(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <Container>
      <PieChartContainer>
        <Pie data={pieData} />
        <CalendarIcon onClick={handleIconClick} />
      </PieChartContainer>

      {showCalendar && (
        <>
          <Overlay onClick={() => setShowCalendar(false)} />
          <CalendarContainer>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              inline
            />
          </CalendarContainer>
        </>
      )}

      {showPopup && (
        <>
          <Overlay onClick={handleClosePopup} />
          <Popup>
            <PopupContent>
              <h2>{vendorName}</h2>
              <p>Efficiency: {vendorEfficiency}</p>
              <p>Date: {selectedDate?.toLocaleDateString()}</p>
            </PopupContent>
            <CloseButton onClick={handleClosePopup}>Close</CloseButton>
          </Popup>
        </>
      )}
    </Container>
  );
};

export default Page;
