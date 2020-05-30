import React from 'react'
import { Link } from 'react-router-dom'

const RepositoryList = (props) => {
  const { repo, username } = props
  return (
    <div className=" bg-teal-100 text-center border-2 border-gray-600 ...">
      {repo.map((it) => (
        <div>
          <Link to={`/${username}/${it}`}>{it}</Link>
        </div>
      ))}
    </div>
  )
}

RepositoryList.propTypes = {}

export default RepositoryList
