import { useEffect } from "react";
import React from 'react'
import { useParams, useLocation, useNavigate } from "react-router-dom";

const UserCard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    console.log('Current location is ', location);
  }, [location]);

  return (
    <div>
      {/* Отображение подробной информации о пользователе */}
      <button onClick={() => navigate(-1)}>Назад</button>
      <h2>User Details for ID: {userId}</h2>
    </div>
  )
}

export default UserCard