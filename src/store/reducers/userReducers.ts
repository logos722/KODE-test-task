import { SET_USERS, SET_SELECTED_DEPARTMENT, SET_SEARCH_TERM, SET_SORT_OPTION, SET_DEPARTMENTS } from "../actionTypes";

const initialState = {
  users: [],
  usersDeparts: ['all'],
  selectedDepartment: "all",
  searchTerm: "",
  sortOption: "alphabetical",
};

const usersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload };
    case SET_SELECTED_DEPARTMENT:
      return { ...state, selectedDepartment: action.payload };
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    case SET_SORT_OPTION:
      return { ...state, sortOption: action.payload };
    case SET_DEPARTMENTS:
      return { ...state, usersDeparts: ['all', ...action.payload] };
    default:
      return state;
  }
};

export default usersReducer;
