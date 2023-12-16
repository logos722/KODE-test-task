import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setSearchTerm } from '../store/actions';



const Filter = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.searchTerm);

  const handleInputChange = (e: any) => {
    const term = e.target.value;
    dispatch(setSearchTerm(term));
  };

  return (
    <div className="filter">
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  )
}

export default Filter