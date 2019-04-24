import React from 'react'

class Posts extends React.Component {
  render() {
    return (
        <div>
        <h1>All Posts</h1>
        <ul className="ml-auto">
            <li>Post 1</li>
            <li>Post 2</li>
            <li>Post 3</li>
            <li>Post 4</li>
        </ul>
      </div>
    )
  }
}

export default Posts