import { Departs } from "../../types";
import { getAllUsers, getUserByParam } from "../API/fetchUsers";
import { SET_USERS, SET_SELECTED_DEPARTMENT, SET_SEARCH_TERM, SET_SORT_OPTION } from "./actionTypes";



export const setSelectedDepartment = (department: string) => ({
  type: SET_SELECTED_DEPARTMENT,
  payload: department,
});

export const setSearchTerm = (term: string) => ({
  type: SET_SEARCH_TERM,
  payload: term,
});

export const setSortOption = (option: string) => ({
  type: SET_SORT_OPTION,
  payload: option,
});

export const fetchUsers = () => {
  return async (dispatch: any) => {
    try {
      const users = await getAllUsers(); // Вызов функции API
      dispatch(setUsers(users)); // Диспатч актуализированных данных в хранилище
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
};

export const fetchDeparts = (dep: Departs) => {
  return async (dispatch: any) => {
    try {
      const users = await getUserByParam(dep); // Вызов функции API
      dispatch(setUsers(users)); // Диспатч актуализированных данных в хранилище
      dispatch(setSelectedDepartment(dep))
    } catch (error) {
      console.error("Error fetching deps:", error);
    }
  };
};

export const setUsers = (users: any) => ({
  type: SET_USERS,
  payload: users,
});