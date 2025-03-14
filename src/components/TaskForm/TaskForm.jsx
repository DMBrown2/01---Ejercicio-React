// 1.Crear un componente "TaskForm" que permita al usuario ingresar nuevas tareas en la lista. El componente debe incluir un formulario con un campo de texto y un botón "Agregar". Al hacer clic en el botón, se debe crear un nuevo objeto de tarea con un ID único y el texto ingresado por el usuario, y agregarlo a la lista de tareas. 

import './TaskForm.css';
import { useForm } from 'react-hook-form';



export default function TaskForm( {addTask} ) {
    const { register, handleSubmit } = useForm();


    return (
        <form className="task-form">
            <h1> Lista de compras</h1>
            
                <div className="input-group">
                    <input
                        type="text" id="task"
                        {...register("task")}
                        placeholder="Ingrese un nuevo producto"
                    />

                </div>

                <button type="submit" onClick={handleSubmit(addTask)}>
                    Agregar
                </button>

            </form>

    )

}

