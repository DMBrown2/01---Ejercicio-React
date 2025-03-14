//2.Crear un componente "TaskList" que muestre la lista de tareas actual. El componente debe recibir la lista de tareas como una prop y mostrar cada tarea en un elemento de la lista. Cada elemento de la lista debe incluir un botón "Eliminar" que permita al usuario eliminar esa tarea de la lista.

import './TaskList.css';
// import { useForm } from 'react-hook-form';


// const TASKS = []


export default function TaskList({ tareas, deleteTask, markAsRead }) {
    // const { register, handleSubmit } = useForm();


    return (
        <div className='task-list'>

            {
                tareas.map(tarea => (
                 
                        <ul key={tarea.id}>
                            <li className='task-item'>
                                <input type="checkbox" id='checkbox' onClick={ () => markAsRead(tarea.id)  } />
                                <span>{tarea.task}</span>
                                <button className='button-delete' onClick={() => deleteTask(tarea.id)}>Eliminar</button>
                            </li>
                        </ul>
                    
                ))
            }
        </div>
    )
    
}
