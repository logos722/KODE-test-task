import React, { useEffect } from "react";
import "./App.css";
import Filter from "./components/Filter";
import MainList from "./components/MainList";
import ProffessionTabs from "./components/ProffessionTabs";
import FilterModal from "./components/FilterModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./store/actions";


function App() {
  const dispatch = useDispatch()
  const users = useSelector((state: any) => state.user.users);
  const department = useSelector((state: any) => state.user.usersDeparts);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    dispatch(fetchUsers())
  }, [])

  return (
    <div className="App">
      <div className="top">
        <h1>Поиск</h1>
        <Filter/>
        <ProffessionTabs department={department}/>
      </div>
      <main>
        <MainList users={users}/>
      </main>
    <FilterModal/>
    </div>
  );
}

export default App;
