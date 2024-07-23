// Card.jsx
'use client'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Bar } from 'react-chartjs-2';
import styles from './card.module.css';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Colors } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Card = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showTaskDetails, setShowTaskDetails] = useState(false);
  const [showTaskList, setShowTaskList] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);

  const handleDateClick = () => {
    setShowCalendar(!showCalendar);
    setShowTaskDetails(false);
    setShowTaskList(false);
    setShowAnalytics(false);
  };

  const handleTaskClick = () => {
    setShowTaskList(!showTaskList);
    setShowCalendar(false);
    setShowTaskDetails(false);
    setShowAnalytics(false);
  };

  const handleReportClick = () => {
    setShowTaskDetails(!showTaskDetails);
    setShowCalendar(false);
    setShowTaskList(false);
    setShowAnalytics(false);
  };

  const handleAnalyticsClick = () => {
    setShowAnalytics(!showAnalytics);
    setShowCalendar(false);
    setShowTaskDetails(false);
    setShowTaskList(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowTaskDetails(true);
  };

  return (
    <div>
      <div className={styles.cardContainer}>
        <div className={styles.card} onClick={handleDateClick}>
          Date
        </div>
        <div className={styles.card} onClick={handleTaskClick}>
          Tasks 
        </div>
        {/* <div className={styles.card} onClick={handleReportClick}>
          Report
        </div> */}
        <div className={styles.card} onClick={handleAnalyticsClick}>
          Analytics
        </div>
      </div>y
      {showCalendar && (
        <div className={styles.calendar}>
          <Calendar onChange={handleDateChange} className={styles.reactCalendar} />
        </div>
      )}
      {showTaskDetails && (
        <div className={styles.detailsCard}>
          <h3>Tasks for {selectedDate.toDateString()}</h3>
          <p>Task: Complete project</p>
          <p>Person: John Doe</p>
        </div>
      )}
      {showTaskList && (
        <TaskCard>
          <TaskTable />
        </TaskCard>
      )}
      {showAnalytics && (
        <AnalyticsCard>
          <AnalyticsChart />
        </AnalyticsCard>
      )}
    </div>
  );
};

const TaskCard = ({ children }) => {
  return (
    <div className={styles.taskCard}>
      {children}
    </div>
  );
};

const TaskTable = () => {
  return (
    <div className={styles.taskTable}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name of Vendor</th>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Complete project</td>
            <td>In Progress</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>Review code</td>
            <td>Completed</td>
          </tr>
          <tr>
            <td>Emily Johnson</td>
            <td>Update documentation</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const AnalyticsCard = ({ children }) => {
  return (
    <div className={styles.analyticsCard}>
      {children}
    </div>
  );
};

const AnalyticsChart = () => {
  const chartRef = useRef(null);
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Tasks Completed',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(98, 90, 205,1)',
        borderColor: 'rgba(90,92,92,1)',
        Colors: 'rgba(90,92,92,1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    const chart = chartRef.current.chartInstance;

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, []);

  return <Bar ref={chartRef} data={data} options={options} />;
};

export default Card;
