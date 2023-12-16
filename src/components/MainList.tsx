import React from 'react'
import UserItems from './UserItems'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store';



const MainList = ({users}: any) => {
  const searchTerm = useSelector((state: RootState) => state.searchTerm)

  const filteredUsers = () => (searchTerm ? users.filter((item: any) => item.firstName.startsWith(searchTerm)) : users);

  return (
    <div>
      {filteredUsers().map((user: any, index: number) => <UserItems key={index} user={user} />)}
    </div>
  )
}

export default MainList