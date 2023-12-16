import axios from "axios";
import {Departs} from '../../types'

export const getAllUsers = async () => {
  try {
    const response = await axios.get(
      "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all", {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const result = response.data 
    console.log(result)
    return result.items
    
  } catch (error) {
    console.log(error)
  }
}

export const getUserByParam = async (params: Departs)  => {
  try {
    const response = await axios.get(
      `https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${params}`, {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )

    const lol = await axios.get(
      'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users', {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )

    console.log(lol.data)
  
    const result = response.data 
    console.log(result)
    return result.items

  } catch (error) {
    console.log(error)
  }
}