import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleDelete = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => setError(err.message));
    setUsers(originalUsers);
  };

  const addUser = () => {
    const newUser = { id: 100, name: "Hello User" };
    const originalUsers = [...users];
    setUsers([...users, newUser]);

    axios
      .post("https://jsonplaceholder.typicode.com/users/", newUser)
      .then((user) => [...users, user])
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return (
    <>
      {isLoading && <div className="spinner-border" />}
      {error && <p className="text-danger">{error}</p>}
      <div>
        <button onClick={addUser}>AddUser</button>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name}{" "}
              <button
                className="btn btn-outline-danger"
                onClick={() => handleDelete(user)}
              >
                {" "}
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
