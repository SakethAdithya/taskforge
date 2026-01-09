import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!title.trim()) return;
    await api.post("/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const toggleTask = async (task) => {
    await api.put(`/tasks/${task._id}`, {
      status: task.status === "pending" ? "completed" : "pending",
    });
    fetchTasks();
  };

  const filteredTasks = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-4xl mx-auto p-6">
        {/* Add Task */}
        <div className="flex gap-4 mb-4">
          <input
            placeholder="New task"
            className="flex-1 p-3 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            onClick={addTask}
            className="bg-indigo-600 text-white px-6 rounded hover:bg-indigo-700"
          >
            Add
          </button>
        </div>

        {/* Search */}
        <input
          placeholder="Search tasks..."
          className="w-full p-3 border rounded mb-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Tasks List / Empty State */}
        <div className="space-y-3">
          {filteredTasks.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">
              No tasks yet. Add your first task.
            </p>
          ) : (
            filteredTasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                onDelete={deleteTask}
                onToggle={toggleTask}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
