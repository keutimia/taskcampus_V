const Navigation = ({ vistaActiva, setVistaActiva }) => {
  return (
    <nav style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "20px" }}>
      <button 
        onClick={() => setVistaActiva("resumen")}
        style={{ fontWeight: vistaActiva === "resumen" ? "bold" : "normal" }}
      >
        Resumen
      </button>
      <button 
        onClick={() => setVistaActiva("tareas")}
        style={{ fontWeight: vistaActiva === "tareas" ? "bold" : "normal" }}
      >
        Tareas
      </button>
      <button 
        onClick={() => setVistaActiva("nueva")}
        style={{ fontWeight: vistaActiva === "nueva" ? "bold" : "normal" }}
      >
        Nueva tarea
      </button>
    </nav>
  );
};

export default Navigation;