import "./App.css";
import Search from "./components/Search";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [userName, setUserName] = useState<any[]>([]);
  const getData = async () => {
    await axios.get("/api/").then((response) => {
      setUserName(response.data.players);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <div className="tc bg-green ma0 pa4 min-vh-100">
        <Search details={userName} />
      </div>
    </div>
  );
}

export default App;
