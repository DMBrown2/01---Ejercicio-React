//3.Crear un componente "App" que incluya los componentes "TaskForm" y "TaskList". El componente "App" debe utilizar el hook useState para manejar el estado de la lista de tareas. Inicialmente, la lista de tareas debe estar vacía. Cuando el usuario agregue o elimine una tarea, el estado de la lista debe actualizarse automáticamente.


import { useState } from "react";
import TaskForm from "./components/TaskForm/TaskForm"
import TaskList from "./components/TaskList/TaskList"


export default function App() {
  const [tasks, setTasks] = useState([]);

    function addTask(data) {
      // console.log(data)
      const newTask = {
          id: Date.now(),
          task: data.task
      }

      const taskCopy = [...tasks]
      taskCopy.push(newTask)
      setTasks(taskCopy)
  }


  function deleteTask(id) {
    // setTasks(tasks.filter((task) => task.id !== id))
    const indice = tasks.findIndex(task => task.id === id)
    const taskCopy = [...tasks]
    taskCopy.splice(indice, 1)
    setTasks(taskCopy)
  }


  function markAsRead(id) {
    console.log("marcar como leido")

    const task = tasks.find((task) => {
      if(task.id === id) {
       return true
      }
    })

    task.alreadyRead = true
    setTasks([...tasks])

  }


  return (
    <div>
      <TaskForm addTask={addTask} />
      <TaskList tareas={tasks} deleteTask={deleteTask} markAsRead={markAsRead} />
    </div>
  )

  }
