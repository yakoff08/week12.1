import React from 'react'
import Markdown from 'markdown-to-jsx'

const RepositoryName = (props) => {
  return (
    <div className=" bg-teal-100 border-2 border-gray-600">
      <Markdown id="description">{props.text}</Markdown>
    </div>
  )
}

RepositoryName.propTypes = {}

export default RepositoryName
