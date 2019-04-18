import React from 'react'

class Users extends React.Component {
  render() {
    const { params } = this.props.match
    return (
      <div>
        <h1>Welcome to Movie App, {params.id}</h1>
      </div>
    )
  }
}

export default Users