import React, { useState } from 'react';
import { FaUsers, FaChartLine, FaDollarSign } from 'react-icons/fa';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

/**
 * Dashboard Component
 * Displays user metrics in a dashboard with dynamic charts and cards.
 */
const Dashboard = () => {
  // State for storing chart data (monthly metrics for users, sessions, and revenue)
  const [chartData, setChartData] = useState([
    { name: 'Jan', users: 400, sessions: 240, revenue: 2400 },
    { name: 'Feb', users: 300, sessions: 139, revenue: 2210 },
    { name: 'Mar', users: 200, sessions: 980, revenue: 2290 },
    { name: 'Apr', users: 278, sessions: 390, revenue: 2000 },
    { name: 'May', users: 189, sessions: 480, revenue: 2181 },
    { name: 'Jun', users: 239, sessions: 380, revenue: 2500 },
    { name: 'Jul', users: 349, sessions: 430, revenue: 2100 },
  ]);

  // State for storing the overall metrics displayed on cards
  const [metrics, setMetrics] = useState({
    totalUsers: chartData[6].users, 
    activeSessions: 120,
    totalRevenue: 5000,
  });

  /**
   * generateRandomMetrics Function
   * Randomly generates new metric values for users, sessions, and revenue.
   * Updates both the cards and the chart with new random values.
   */
  const generateRandomMetrics = () => {
    // Generate random numbers for the new total metrics
    const newTotalUsers = Math.floor(Math.random() * 2000);
    const newActiveSessions = Math.floor(Math.random() * 300);
    const newTotalRevenue = Math.floor(Math.random() * 10000);

    // Update each entry in the chart data with new random values
    const newChartData = chartData.map((entry) => ({
      ...entry,
      users: Math.floor(Math.random() * newTotalUsers),
      sessions: Math.floor(Math.random() * newActiveSessions),
      revenue: Math.floor(Math.random() * newTotalRevenue),
    }));

    // Update the state with the new metrics, ensuring total users is based on July (index 6)
    setMetrics({
      totalUsers: newChartData[6].users,
      activeSessions: newActiveSessions,
      totalRevenue: newTotalRevenue,
    });

    // Update the chart data state
    setChartData(newChartData);
  };

  return (
    <div className="dashboard-container">
      {/* Welcome message */}
      <h1 className="welcome-message">Welcome back, Julieta 👋</h1>
      <h2>Overview</h2>

      {/* Metrics cards */}
      <div className="metrics-cards">
        {/* Total Users Card */}
        <div className="card">
          <FaUsers className="card-icon" />
          <h3>Total Users</h3>
          <p>{metrics.totalUsers}</p>
        </div>

        {/* Active Sessions Card */}
        <div className="card">
          <FaChartLine className="card-icon" />
          <h3>Active Sessions</h3>
          <p>{metrics.activeSessions}</p>
        </div>

        {/* Total Revenue Card */}
        <div className="card">
          <FaDollarSign className="card-icon" />
          <h3>Total Revenue</h3>
          <p>${metrics.totalRevenue}</p>
        </div>
      </div>

      {/* Monthly Overview Chart */}
      <div className="chart-container">
        <h2>Monthly Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            {/* Line for total users */}
            <Line type="monotone" dataKey="users" stroke="#8884d8" />

            {/* Line for active sessions */}
            <Line type="monotone" dataKey="sessions" stroke="#82ca9d" />

            {/* Line for total revenue */}
            <Line type="monotone" dataKey="revenue" stroke="#ffc658" />

            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Refresh button to generate random metrics */}
      <button onClick={generateRandomMetrics}>Refresh</button>
    </div>
  );
};

export default Dashboard;
