//2.Crear un componente "TaskList" que muestre la lista de tareas actual. El componente debe recibir la lista de tareas como una prop y mostrar cada tarea en un elemento de la lista. Cada elemento de la lista debe incluir un botón "Eliminar" que permita al usuario eliminar esa tarea de la lista.

import './TaskList.css';
import { useForm } from 'react-hook-form';


const TASKS = []


export default function TaskList({ tareas, deleteTask }) {
    const { register, handleSubmit } = useForm();


    return (
        <div className='task-list' onSubmit={handleSubmit(deleteTask)}>

            {
                tareas.map(tarea => (
                 
                        <ul>
                            <li>
                                <input type="checkbox" {...register("checkbox")} id='checkbox' />
                                <span key={tarea.id}>{tarea.task}</span>
                                <button className='button-delete'>Eliminar</button>
                            </li>
                        </ul>
                    
                ))
            }
        </div>
    )
    
}
