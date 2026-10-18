import TaskList from "../components/TaskList";

const TasksView = ({ tareasFiltradas, filtro, onCambiarFiltro, onToggle, onEliminar, onEditar, cargando, error }) => {
  return (
    <section>
      <TaskList
        tareas={tareasFiltradas}
        filtro={filtro}
        onCambiarFiltro={onCambiarFiltro}
        onToggle={onToggle}
        onEliminar={onEliminar}
        onEditar={onEditar}
        cargando={cargando}
        error={error}
      />
    </section>
  );
};

export default TasksView;