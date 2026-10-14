import { useState } from "react";
 
// Formulario controlado para crear tareas (RF03 y RF04).
// Recibe por props la acción `onAgregar(titulo)`, que viene de useTareas.
const TaskForm = ({ onAgregar }) => {
  const [titulo, setTitulo] = useState("");
  const [mensaje, setMensaje] = useState(null); // { tipo: "error" | "ok", texto }
  const [enviando, setEnviando] = useState(false);
 
  const handleChange = (e) => {
    setTitulo(e.target.value);
    if (mensaje) setMensaje(null);
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault(); // evita la recarga de la página
 
    const tituloLimpio = titulo.trim();
    if (tituloLimpio === "") {
      setMensaje({
        tipo: "error",
        texto: "El título no puede estar vacío ni contener solo espacios.",
      });
      return;
    }
 
    setEnviando(true);
    const resultado = await onAgregar(tituloLimpio);
    setEnviando(false);
 
    // useTareas debe devolver false cuando la operación falla.
    if (resultado === false) {
      setMensaje({
        tipo: "error",
        texto: "No se pudo crear la tarea. Inténtalo nuevamente.",
      });
      return;
    }
 
    setTitulo("");
    setMensaje({ tipo: "ok", texto: "Tarea creada correctamente." });
  };
 
  const hayError = mensaje?.tipo === "error";
 
  return (
    <section className="card">
      <h2 className="section-title">Nueva tarea</h2>
      <form className="task-form" onSubmit={handleSubmit} noValidate>
        <label className="task-form-label" htmlFor="titulo-tarea">
          Título de la tarea
        </label>
        <div className="task-form-row">
          <input
            id="titulo-tarea"
            type="text"
            className={`task-input${hayError ? " task-input-invalid" : ""}`}
            value={titulo}
            onChange={handleChange}
            placeholder="Ej: Estudiar para la prueba de React"
            disabled={enviando}
            aria-invalid={hayError}
          />
          <button type="submit" className="task-button" disabled={enviando}>
            {enviando ? "Guardando..." : "Agregar tarea"}
          </button>
        </div>
        {mensaje && (
          <p
            role={hayError ? "alert" : "status"}
            className={`form-message ${hayError ? "form-message-error" : "form-message-ok"}`}
          >
            {mensaje.texto}
          </p>
        )}
      </form>
    </section>
  );
};
 
export default TaskForm;
