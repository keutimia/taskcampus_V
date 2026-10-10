import { useState } from "react";
import useTareas from "./hooks/useTareas";
import Header from "./components/Header";
import SummaryView from "./views/SummaryView";
import TasksView from "./views/TasksView";
import NewTaskView from "./views/NewTaskView";
import Navigation from "./components/Navigation";
import "./App.css";

const App = () => {
  const [vistaActiva, setVistaActiva] = useState("resumen");
  const {
    tareas,
    cargando,
    error,
    crearTarea,
    actualizarTarea,
    eliminarTarea,
  } = useTareas();

  const [filtro, setFiltro] = useState("todas");

  const tareasFiltradas = tareas.filter((t) => {
    if (filtro === "completadas") return t.completada;
    if (filtro === "pendientes") return !t.completada;
    return true;
  });

  const handleToggleCompletada = (id, completadaActual) => {
    actualizarTarea(id, { completada: !completadaActual });
  };

  return (
    <main className="app-container">
      <Header title="TaskCampus" description="Gestor de tareas académicas" />
      
      <Navigation vistaActiva={vistaActiva} setVistaActiva={setVistaActiva} />

      {vistaActiva === "resumen" && (
        <SummaryView 
          tareas={tareas} 
          tareasFiltradas={tareasFiltradas} 
          filtroActual={filtro} 
        />
      )}

      {vistaActiva === "tareas" && (
        <TasksView 
          tareasFiltradas={tareasFiltradas}
          filtro={filtro}
          onCambiarFiltro={setFiltro}
          onToggle={handleToggleCompletada}
          onEliminar={eliminarTarea}
          cargando={cargando}
          error={error}
        />
      )}

      {vistaActiva === "nueva" && (
        <NewTaskView 
          onAgregar={crearTarea} 
        />
      )}
    </main>
  );
};

export default App;