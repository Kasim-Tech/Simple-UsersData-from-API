import { useEffect, useState } from "react";
import UsersData from "../src/Component/UsersData";


// dummy api from jsonplaceholder
const API = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);
  return (
    <>
      <div
        style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}
      >
        <h2
          style={{
            display: "inline-block",
            textAlign: "center",
            fontSize: "24px",
            color: "#333",
            padding: "10px",
            border: "2px solid #4CAF50",
            borderRadius: "10px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          All Users Data comeing from API
        </h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Addresh</th>
          </tr>
        </thead>
        <tbody>
          <UsersData users={users} />
        </tbody>
      </table>
    </>
  );
};

export default App;
