import React, { useEffect, useState } from "react";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://reqres.in/api/users?per_page=10")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setUsers(data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("aqui esta el error", error);
          setLoading(false);
        });
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col px-40 py-10">
      <h1 className="text-3xl">User from API {users.length}</h1>
      {loading ? (
        <div className="text-green text-4xl">Cargando....</div>
      ) : (
        users.map((user) => {
          return (
            <div key={user.id}>
              <img src={user.avatar} alt="" />
              <h1>{user.first_name}</h1>
            </div>
          );
        })
      )}
    </div>
  );
};
