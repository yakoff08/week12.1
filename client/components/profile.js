import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Head from './head'

const Profile = () => {
  const { username } = useParams()
  return (
    <div>
      <Head title="Hello" />
      <div id="title">Profile</div>
      <div id="username">{username}</div>
      <Link to="/dashboard">Go To Root </Link>
      <Link to="/dashboard/main">Go To Main </Link>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
