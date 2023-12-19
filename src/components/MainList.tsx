import React from 'react'
import UserItems from './UserItems'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";



const MainList = ({users}: any) => {
  const navigate = useNavigate();
  const searchTerm = useSelector((state: any) => state.user.searchTerm)
  const sortTerm = useSelector((state: any) => state.modal.sortByAlphabet)
  const userReady = (users: any) => {
    const newUser = [...users]
    if (sortTerm) {
      console.log('alph sotr work')
      return newUser.sort(function (a: any, b: any) {
        if (a.firstName < b.firstName) {
          return -1;
        }
        if (a.firstName > b.firstName) {
          return 1;
        }
        return 0;
      })
    } else {
      console.log('birth sotr work')
      return newUser.sort(
        (objA: any, objB: any) => Number(objA.date) - Number(objB.date),
      );
    }
  }
  const sortedUsers = userReady(users)
  const filteredUsers = () => (searchTerm ? sortedUsers.filter((item: any) => item.firstName.startsWith(searchTerm)) : sortedUsers);

  return (
    <div>
      {filteredUsers() ? filteredUsers().map((user: any, index: number) => <div key={index} onClick={() => navigate(`${user.id}`, { replace: false })}><UserItems key={index} user={user} /></div>) : null}
    </div>
  )
}

export default MainList