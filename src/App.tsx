import React, { useEffect } from "react";
import Filter from "./components/Filter";
import MainList from "./components/MainList";
import ProffessionTabs from "./components/ProffessionTabs";
import FilterModal from "./components/FilterModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./store/actions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserCard from "./components/UserCard";


function App() {
  const dispatch = useDispatch()
  const users = useSelector((state: any) => state.user.users);
  const department = useSelector((state: any) => state.user.usersDeparts);
  const isLoading = useSelector((state: any) => state.loading.isLoading);


  useEffect(() => {
    
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    dispatch(fetchUsers())
  }, [])

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<div className="App">
      <div className="top">
        <h1>Поиск</h1>
        <Filter/>
        <ProffessionTabs department={department}/>
      </div>
      <main>
        {isLoading ? <div>Загрузка...</div> : <MainList users={users}/>}
      </main>
    <FilterModal/>
    </div>} />
    <Route path="/:userId" element={<UserCard/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
