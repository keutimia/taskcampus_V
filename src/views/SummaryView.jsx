import TaskSummary from "../components/TaskSummary";

const SummaryView = ({ tareas, tareasFiltradas, filtroActual }) => {
  const total = tareas.length;
  const completadas = tareas.filter((t) => t.completada).length;
  const pendientes = tareas.filter((t) => !t.completada).length;
  const mostrando = tareasFiltradas.length;

  return (
    <section>
      <TaskSummary
        total={total}
        completadas={completadas}
        pendientes={pendientes}
        mostrando={mostrando}
        filtroActual={filtroActual}
      />
    </section>
  );
};

export default SummaryView;