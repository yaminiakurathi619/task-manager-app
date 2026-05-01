import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const login = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("LOGIN RESPONSE:", data);

      if (data.token) {
        localStorage.setItem("token", data.token);
        alert("Login Success");

        getTasks();
      } else {
        alert("Login Failed" + JSON.stringify(data));
      }
    } catch (err) {
      console.log(err);
      alert("Error connecting backend");
    }
  };

  const getTasks = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        return;
      }

      const res = await fetch("http://localhost:5000/api/v1/tasks", {
        headers: {
          Authorization: token,
        },
      });

      const data = await res.json();
      console.log("TASKS:", data);

      setTasks(data);
    } catch (err) {
      console.log(err);
      alert("Error fetching tasks ❌");
    }
  };

  const createTask = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        return;
      }

      const res = await fetch("http://localhost:5000/api/v1/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ title }),
      });

      const data = await res.json();
      console.log("CREATED:", data);

      alert("Task Added ✅");

      getTasks();
    } catch (err) {
      console.log(err);
      alert("Error adding task");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>

      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <br />

      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />

      <button onClick={login}>Login</button>

      <hr />

      <h2>Tasks</h2>

      <input
        placeholder="task title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />

      <button onClick={createTask}>Add Task</button>
      <button onClick={getTasks}>Load Tasks</button>

      <ul>
        {tasks.map((t) => (
          <li key={t._id}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
