import TaskList from "../components/TaskList";

const TasksView = ({ tareasFiltradas, filtro, onCambiarFiltro, onToggle, onEliminar, cargando, error }) => {
  return (
    <section>
      <TaskList
        tareas={tareasFiltradas}
        filtro={filtro}
        onCambiarFiltro={onCambiarFiltro}
        onToggle={onToggle}
        onEliminar={onEliminar}
        cargando={cargando}
        error={error}
      />
    </section>
  );
};

export default TasksView;