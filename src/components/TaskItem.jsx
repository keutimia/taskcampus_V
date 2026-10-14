import { useRef, useState } from "react";
import Button from "./Button";

// Una tarea: título, estado y controles (RF02, RF05, RF06, RF07).
// - onToggle(id, completadaActual)
// - onEditar(id, nuevoTitulo)  -> opcional; sin ella no se habilita la edición
// - onSolicitarEliminar(tarea) -> abre el modal de confirmación
const TaskItem = ({
  tarea,
  onToggle,
  onEditar,
  onSolicitarEliminar,
  deshabilitado = false,
}) => {
  const [editando, setEditando] = useState(false);
  const [borrador, setBorrador] = useState("");
  const [errorTitulo, setErrorTitulo] = useState(null);
  const guardando = useRef(false); // evita guardar dos veces (Enter + blur)

  const iniciarEdicion = () => {
    if (!onEditar || deshabilitado) return;
    guardando.current = false;
    setBorrador(tarea.titulo);
    setErrorTitulo(null);
    setEditando(true);
  };

  const cancelarEdicion = () => {
    guardando.current = true;
    setEditando(false);
    setErrorTitulo(null);
  };

  const guardarEdicion = async () => {
    if (guardando.current) return;
    const limpio = borrador.trim();

    if (limpio === "") {
      setErrorTitulo("El título no puede estar vacío.");
      return;
    }
    if (limpio === tarea.titulo) {
      cancelarEdicion();
      return;
    }

    guardando.current = true;
    const resultado = await onEditar(tarea.id, limpio);
    if (resultado === false) {
      guardando.current = false;
      setErrorTitulo("No se pudo guardar el título.");
      return;
    }
    setEditando(false);
    setErrorTitulo(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      guardarEdicion();
    } else if (e.key === "Escape") {
      cancelarEdicion();
    }
  };

  return (
    <li className="task-item">
      <div className="task-info">
        {editando ? (
          <>
            <input
              type="text"
              className={`task-input task-edit-input${errorTitulo ? " task-input-invalid" : ""}`}
              value={borrador}
              onChange={(e) => {
                setBorrador(e.target.value);
                if (errorTitulo) setErrorTitulo(null);
              }}
              onKeyDown={handleKeyDown}
              onBlur={guardarEdicion}
              aria-label="Editar título de la tarea"
              aria-invalid={Boolean(errorTitulo)}
              autoFocus
            />
            {errorTitulo && (
              <p role="alert" className="form-message form-message-error">
                {errorTitulo}
              </p>
            )}
          </>
        ) : (
          <span
            className={`task-title${tarea.completada ? " task-title-done" : ""}`}
            onDoubleClick={iniciarEdicion}
            title={onEditar ? "Doble clic para editar" : undefined}
          >
            {tarea.titulo}
          </span>
        )}
        <span
          className={`task-badge ${tarea.completada ? "task-badge-done" : "task-badge-pending"}`}
        >
          {tarea.completada ? "Completada" : "Pendiente"}
        </span>
      </div>

      <div className="task-actions">
        <Button
          variant="secondary"
          onClick={() => onToggle(tarea.id, tarea.completada)}
          disabled={deshabilitado}
        >
          {tarea.completada ? "Marcar pendiente" : "Marcar completada"}
        </Button>
        <Button
          variant="danger"
          onClick={() => onSolicitarEliminar(tarea)}
          disabled={deshabilitado}
        >
          Eliminar
        </Button>
      </div>
    </li>
  );
};

export default TaskItem;