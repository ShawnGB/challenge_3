import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  // fetch users fromAPI and set users array
  useEffect(() => {
    const fetchUsers = async () => {
      const result = await axios("https://randomuser.me/api/?results=10");
      setUsers(result.data.results);
    };

    fetchUsers();
  }, []);

  // filter for specific users and return user object
  const getUser = (id) => {
    const result = users.find((user) => user.login.uuid === id);
    return result;
  };

  return (
    <UserContext.Provider value={{ users, getUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
