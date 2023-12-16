import React from 'react'
import { fetchDeparts } from '../store/actions'
import { useDispatch } from 'react-redux'



const ProffessionTabs = ({proffessions}: any) => {
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
      {proffessions ? proffessions.map((item: any, index: number) => {
        return (
          <div onClick={(e) => changeDepart(e)} key={index}>
            {item.department}
            
          </div>
        )
      }) : null}
    </div>
  )
}

export default ProffessionTabs