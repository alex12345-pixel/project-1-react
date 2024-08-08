import { useContext } from "react";
import TaskCard from "../components/TaskCard";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        {" "}
        NO HAY NADA
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard task={task} />
      ))}
    </div>
  );
}

export default TaskList;
