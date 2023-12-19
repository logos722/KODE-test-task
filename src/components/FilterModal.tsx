import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSortAlph, changeSortBirth } from "../store/modalActions";
import { selectIsModalOpen, selectSortByAlphabet, selectSortByBirthday } from "../store/modalSelectors";

const FilterModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsModalOpen);
  const sortByAlphabet = useSelector(selectSortByAlphabet);
  const sortByBirthday = useSelector(selectSortByBirthday);



  return (
    <div>
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
        </div>
      )}
    </div>
  );
}

export default FilterModal