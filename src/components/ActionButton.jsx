function ActionButton({ onReview }) {
  return (
    <section>
      <h2>Acciones</h2>
      <button onClick={onReview} className="task-button">
        Revisar tareas
      </button>
    </section>
  )
}

export default ActionButton