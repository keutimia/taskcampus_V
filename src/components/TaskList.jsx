import { useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tareas, filtro, onCambiarFiltro, onToggle, onEliminar, onEditar, cargando, error }) => {
  const [busqueda, setBusqueda] = useState("");

  const tareasFiltradasPorTexto = tareas.filter((tarea) =>
    tarea.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <section className="card">
      <h2 className="section-title">Listado de tareas</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <button 
          onClick={() => onCambiarFiltro("todas")}
          style={{ fontWeight: filtro === "todas" ? "bold" : "normal" }}
        >
          Todas
        </button>
        <button 
          onClick={() => onCambiarFiltro("pendientes")}
          style={{ fontWeight: filtro === "pendientes" ? "bold" : "normal" }}
        >
          Pendientes
        </button>
        <button 
          onClick={() => onCambiarFiltro("completadas")}
          style={{ fontWeight: filtro === "completadas" ? "bold" : "normal" }}
        >
          Completadas
        </button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Buscar tarea por título..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
        />
      </div>

      {cargando && <p>⏳ Cargando tareas...</p>}
      {error && <p style={{ color: "red" }}>⚠️ Error: {error}</p>}
      
      {!cargando && !error && tareasFiltradasPorTexto.length === 0 && (
        <p>No se encontraron tareas.</p>
      )}

      {!cargando && !error && (
        <ul className="task-list" style={{ listStyle: "none", padding: 0 }}>
          {tareasFiltradasPorTexto.map((tarea) => (
            <TaskItem
              key={tarea.id}
              tarea={tarea}
              onToggle={onToggle}
              onSolicitarEliminar={onEliminar}
              onEditar={onEditar}
              deshabilitado={cargando}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default TaskList;