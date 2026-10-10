const tasks = ['Aprender qué es React', 'Crear proyecto con Vite', 'Practicar JSX']
function showTask(taskName) {
    alert(`Has seleccionado la tarea: ${taskName}`)
  }
function TaskList() {
    return (
    <section className="card">
      <h2 className="section-title">Listado de tareas</h2>
      <ul className="task-list">
          <li className="task-item">
            {tasks[0]} 
            <button onClick={() => showTask(tasks[0])} className="task-button">
                Seleccionar
            </button>          
          </li>
          <li className="task-item">
            {tasks[1]} 
            <button onClick={() => showTask(tasks[1])} className="task-button">
                Seleccionar
            </button>          
          </li>
          <li className="task-item">
            {tasks[2]} 
            <button onClick={() => showTask(tasks[2])} className="task-button">
                Seleccionar
            </button>          
          </li>          
      </ul>
    </section>
  )
}
export default TaskList