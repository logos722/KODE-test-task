import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../store/actions';
import { showModal } from '../store/modalActions';


const Filter = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: any) => state.user.searchTerm);

  const handleInputChange = (e: any) => {
    const term = e.target.value;
    dispatch(setSearchTerm(term));
  };

  const showModall = () => {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    dispatch(showModal());
  };

  return (
    <div className='filter__wrapper'>
      <input
        className='filter'
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder='Введи имя, тег, почту...'
      />
      <button onClick={() => showModall()} className='filter__modal'></button>
    </div>
  )
}

export default Filter