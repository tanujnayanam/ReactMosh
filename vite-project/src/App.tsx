import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
      .then((res) => setUsers(res.data))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <div>
        <ul>
          {users.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
