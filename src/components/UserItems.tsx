import React from 'react'
import { Link } from "react-router-dom";

const UserItems = ({user}: any) => {
  return (
    <div>
      <img src="" alt="" />
      <div>{user.firstName} {user.lastName}</div>
      <div>{user.department}</div>
    </div>
  )
}

export default UserItems