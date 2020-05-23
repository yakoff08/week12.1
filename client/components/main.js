import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <div id="title">Main</div>
      <Link to="/dashboard/profile/f28a9198-ceef-4dd9-a105-3139583b1927">Go To Profile </Link>
      <Link to="/dashboard">Go To Root </Link>
    </div>
  )
}

Main.propTypes = {}

export default Main
