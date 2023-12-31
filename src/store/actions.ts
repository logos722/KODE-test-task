import { Departs } from "../../types";
import { getAllUsers, getUserByParam } from "../API/fetchUsers";
import { SET_USERS, SET_SELECTED_DEPARTMENT, SET_SEARCH_TERM, SET_SORT_OPTION, SET_DEPARTMENTS } from "./actionTypes";
import { startLoading, stopLoading } from "./loadingActions";




export const setSelectedDepartment = (department: string) => ({
  type: SET_SELECTED_DEPARTMENT,
  payload: department,
});

export const setAllDeparts = (dep: any) => ({
  type: SET_DEPARTMENTS,
  payload: dep,
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
    dispatch(startLoading())
    try {
      const users = await getAllUsers(); // Вызов функции API
      dispatch(setUsers(users)); // Диспатч актуализированных данных в хранилище
      dispatch(setAllDeparts(users.map((item: any) => {
        return item.department
      })))
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      dispatch(stopLoading())

    }
  };
};

export const fetchDeparts = (dep: Departs) => {
  return async (dispatch: any) => {
    dispatch(startLoading())
    try {
      const users = await getUserByParam(dep); // Вызов функции API
      dispatch(setUsers(users)); // Диспатч актуализированных данных в хранилище
      dispatch(setSelectedDepartment(dep))
    } catch (error) {
      console.error("Error fetching deps:", error);
    } finally {
      dispatch(stopLoading())
    }
  };
};

export const setUsers = (users: any) => ({
  type: SET_USERS,
  payload: users,
});

