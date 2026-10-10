function TaskSummary({ total }) {
  return (
    <section className="card">
      <h2 className="section-title">Resumen</h2>
      <p>Tienes {total} tareas pendientes</p>
    </section>
  )
}

export default TaskSummary