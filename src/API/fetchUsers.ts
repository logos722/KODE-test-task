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
  
    const result = response.data.json()
    console.log(result)
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
  
    const result = response.data.json()
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}