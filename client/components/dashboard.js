import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
      <div id="title">Dashboard</div>
      <Link to="/dashboard/profile/f28a9198-ceef-4dd9-a105-3139583b1927">Go To Profile </Link>
      <Link to="/dashboard/main">Go To Main </Link>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
