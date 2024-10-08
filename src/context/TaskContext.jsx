import { createContext,useState,useEffect } from "react";
import { tasks as data } from "../data/task";
export const TaskContext = createContext();
export function TaskContextProvider(props) {
  const [tasks, settasks] = useState([]);

  function createTask(title, description) {
    settasks([
      ...tasks,
      {
        title: title,
        description: description,
        id: tasks.length,
      },
    ]);
  }

  function deleteTask(taskId) {
    settasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    settasks(data);  
  }, []);
  return (
    <TaskContext.Provider value={{
        tasks,
        deleteTask,
        createTask
    }}>{props.children}</TaskContext.Provider>
  );
}
