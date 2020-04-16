import React, { useState, useEffect } from "react";
import "./App.css";
import { API, setAuthToken } from "./config/api";

const App = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      setAuthToken(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTg3MDEzNDUzfQ.A7tNDHBUODHQ_WUWd8OLmE_fz-QCiBfz-3crAhkH39Y"
      );
      const user = await API.get("/user");
      const { data } = user.data;
      setData(data);
    } catch (error) {
      if (error.code === "ECONNABORTED") {
        console.log("Network Error!");
      } else {
        const { data, status } = error.response;
        console.log(data.message, status);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">{data && <p>{data.email}</p>}</header>
    </div>
  );
};

export default App;
