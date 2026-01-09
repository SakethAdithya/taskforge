function TaskCard({ task, onDelete, onToggle }) {
  const isCompleted = task.status === "completed";

  return (
    <div className="bg-white p-4 rounded shadow flex justify-between items-center">
      <div>
        <h3
          className={`font-semibold ${
            isCompleted
              ? "line-through text-green-600"
              : "text-gray-800"
          }`}
        >
          {task.title}
        </h3>

        <p
          className={`text-sm ${
            isCompleted ? "text-green-500" : "text-gray-500"
          }`}
        >
          {task.status}
        </p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => onToggle(task)}
          className="text-indigo-600 hover:underline"
        >
          Toggle
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="text-red-500 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
