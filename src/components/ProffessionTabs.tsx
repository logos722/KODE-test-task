import React from 'react'
import { fetchDeparts } from '../store/actions'
import { useDispatch } from 'react-redux'



const ProffessionTabs = ({department}: any) => {
  const dispatch = useDispatch()

  const changeDepart = (e: any) => {
    console.log(e.target)
    console.log(e.target.textContent)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    dispatch(fetchDeparts(e.target.textContent))
  }

  return (
    <div>
      {department ? department.map((item: any, index: number) => {
        return (
          <div onClick={(e) => changeDepart(e)} key={index}>
            {item}
            
          </div>
        )
      }) : null}
    </div>
  )
}

export default ProffessionTabs