'use client'
import React, { useState } from 'react';
import styles from '@/app/ui/dashboard/records/records.module.css';

const Page = () => {
  const [orders, setOrders] = useState([
    {
      vendorNumber: '3415',
      vendorID: 'sameera',
      vendor: 'Banjara Hills',
      phoneNo: '7988267986',
      type: 'Normal',
      driver: '',
      dueTime: '12-07-2024 09:12:40',
      createdAt: '4 days ago',
    },
    {
      vendorNumber: '33082842',
      vendorID: '110',
      vendor: 'SR Nagar',
      phoneNo: '9618841944',
      type: 'Normal',
      driver: '',
      dueTime: '05-07-2024 09:12:59',
      createdAt: '1 week ago',
    },
    {
      vendorNumber: '46333924',
      vendorID: '49',
      vendor: 'Red Hills',
      phoneNo: '8256689458',
      type: 'Normal',
      driver: '',
      dueTime: '04-07-2024 09:12:56',
      createdAt: '2 weeks ago',
    },
    {
      vendorNumber: '33082842',
      vendorID: '110',
      vendor: 'Jubilee Hills',
      phoneNo: '9731209785',
      type: 'Normal',
      driver: '',
      dueTime: '02-07-2024 09:12:49',
      createdAt: '2 weeks ago',
    },
    {
      vendorNumber: '33082842',
      vendorID: '110',
      vendor: 'Ameerpet',
      phoneNo: '8731236789',
      type: 'Normal',
      driver: '',
      dueTime: '06-07-2024 09:00:57',
      createdAt: '1 week ago',
    },
    {
      vendorNumber: '92504223',
      vendorID: '27',
      vendor: 'Shamshabad',
      phoneNo: '87651234160',
      type: 'Normal',
      driver: '',
      dueTime: '05-07-2024 14:53:29',
      createdAt: '2 weeks ago',
    },
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});
  const [newOrder, setNewOrder] = useState({
    vendorNumber: '',
    vendorID: '',
    vendor: '',
    phoneNo: '',
    type: 'Normal',
    driver: '',
    dueTime: '',
    createdAt: '',
  });
  const [showNewOrderForm, setShowNewOrderForm] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditData({ ...orders[index] });
  };

  const handleCancelClick = () => {
    setEditIndex(null);
    setEditData({});
  };

  const handleSaveClick = (index) => {
    const updatedOrders = [...orders];
    updatedOrders[index] = editData;
    setOrders(updatedOrders);
    setEditIndex(null);
    setEditData({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };

  const handleNewOrderChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({
      ...newOrder,
      [name]: value,
    });
  };

  const handleAddNewClick = () => {
    setShowNewOrderForm(true);
  };

  const handleCancelNewOrder = () => {
    setShowNewOrderForm(false);
    setNewOrder({
      vendorNumber: '',
      vendorID: '',
      vendor: '',
      phoneNo: '',
      type: 'Normal',
      driver: '',
      dueTime: '',
      createdAt: '',
    });
  };

  const handleSaveNewOrder = () => {
    setOrders([...orders, newOrder]);
    setShowNewOrderForm(false);
    setNewOrder({
      vendorNumber: '',
      vendorID: '',
      vendor: '',
      phoneNo: '',
      type: 'Normal',
      driver: '',
      dueTime: '',
      createdAt: '',
    });
  };

  const handleDeleteClick = (index) => {
    setDeleteIndex(index);
  };

  const handleConfirmDelete = () => {
    const updatedOrders = orders.filter((_, index) => index !== deleteIndex);
    setOrders(updatedOrders);
    setDeleteIndex(null);
  };

  const handleCancelDelete = () => {
    setDeleteIndex(null);
  };

  const exportCSV = () => {
    const headers = ['MR Id', 'MR Name', 'Task Assigned', 'Phone No', 'MRU Assigned', 'Total No of Meter readers', 'Last Assigned date', 'Pending Meter Readers'];
    const rows = orders.map(order => [
      order.vendorNumber,
      order.vendorID,
      order.vendor,
      order.phoneNo,
      order.type,
      order.driver,
      order.dueTime,
      order.createdAt,
    ]);

    let csvContent = 'data:text/csv;charset=utf-8,'
      + headers.join(',') + '\n'
      + rows.map(row => row.join(',')).join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'orders.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1></h1>
        <div className={styles.exportSearch}>
          <button className={styles.exportButton} onClick={exportCSV}>Export CSV</button>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <h2>308</h2>
          <p>Pending Orders</p>
        </div>
        <div className={styles.stat}>
          <h2>392</h2>
          <p>Active Orders</p>
        </div>
        <div className={styles.stat}>
          <h2>85</h2>
          <p>Active Meter Reader</p>
        </div>
        <div className={styles.stat}>
          <h2>63</h2>
          <p>Completed Orders</p>
        </div>
      </div>

      <div className={styles.tabs}>
        <button className={styles.activeTab}>Pending Assignment (308)</button>
        <button className={styles.activeBut}>Active (392)</button>
        <button className={styles.historyy}>History (203)</button>
        <button className={styles.addButton} onClick={handleAddNewClick}>Add New</button>
      </div>

      {showNewOrderForm && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h2>Add New Order</h2>
            <input type="text" name="vendorNumber" placeholder="MR Id" value={newOrder.vendorNumber} onChange={handleNewOrderChange} />
            <input type="text" name="vendorID" placeholder="MR Name" value={newOrder.vendorID} onChange={handleNewOrderChange} />
            <select name="vendor" value={newOrder.vendor} onChange={handleNewOrderChange}>
              <option value="">Select Task Assigned</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <input type="text" name="phoneNo" placeholder="Phone No" value={newOrder.phoneNo} onChange={handleNewOrderChange} />
            <input type="text" name="type" placeholder="MRU Assigned" value={newOrder.type} onChange={handleNewOrderChange} />
            <input type="text" name="driver" placeholder="Total No of Meter readers" value={newOrder.driver} onChange={handleNewOrderChange} />
            <input type="text" name="dueTime" placeholder="Last Assigned date" value={newOrder.dueTime} onChange={handleNewOrderChange} />
            <input type="text" name="createdAt" placeholder="Pending Meter Readers" value={newOrder.createdAt} onChange={handleNewOrderChange} />
            <button onClick={handleSaveNewOrder}>Save</button>
            <button onClick={handleCancelNewOrder}>Cancel</button>
          </div>
        </div>
      )}

      {deleteIndex !== null && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete this order?</p>
            <button onClick={handleConfirmDelete}>Yes</button>
            <button onClick={handleCancelDelete}>No</button>
          </div>
        </div>
      )}

      <table className={styles.table}>
        <thead>
          <tr>
            <th>MR Id</th>
            <th>MR Name</th>
            <th>Task Assigned</th>
            <th>Phone No</th>
            <th>MRU Assigned</th>
            <th>Total No of Meter readers</th>
            <th>Last Assigned date</th>
            <th>Pending Meter Readers</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.vendorNumber}</td>
              <td>{order.vendorID}</td>
              <td>
                {editIndex === index ? (
                  <select name="vendor" value={editData.vendor} onChange={handleChange}>
                    <option value="">Select Task Assigned</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                ) : (
                  order.vendor
                )}
              </td>
              <td>{order.phoneNo}</td>
              <td>
                {editIndex === index ? (
                  <input type="text" name="type" value={editData.type} onChange={handleChange} />
                ) : (
                  order.type
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input type="text" name="driver" value={editData.driver} onChange={handleChange} />
                ) : (
                  order.driver || 'Not Assigned'
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input type="text" name="dueTime" value={editData.dueTime} onChange={handleChange} />
                ) : (
                  order.dueTime
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input type="text" name="createdAt" value={editData.createdAt} onChange={handleChange} />
                ) : (
                  order.createdAt
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <>
                    <button onClick={() => handleSaveClick(index)}>Update</button>
                    <button onClick={handleCancelClick}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditClick(index)}>Edit</button>
                    <button onClick={() => handleDeleteClick(index)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
