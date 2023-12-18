import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal, changeSortAlph, changeSortBirth } from "../store/modalActions";
import { selectIsModalOpen, selectSortByAlphabet, selectSortByBirthday } from "../store/modalSelectors";

const FilterModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsModalOpen);
  const sortByAlphabet = useSelector(selectSortByAlphabet);
  const sortByBirthday = useSelector(selectSortByBirthday);

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      {isOpen && (
        <div>
          <h2>Сортировка</h2>
          <br />
          <label>
            Sort by Alphabet
            <input type="checkbox" checked={sortByAlphabet} onClick={() => dispatch(changeSortAlph())} />
          </label>
          <label>
            Sort by Birthday
            <input type="checkbox" checked={sortByBirthday} onChange={() => dispatch(changeSortBirth())} />
          </label>
          <button onClick={handleCloseModal}>Close Modal</button>
        </div>
      )}
    </div>
  );
}

export default FilterModal