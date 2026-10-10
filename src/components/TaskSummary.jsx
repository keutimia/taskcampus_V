const TaskSummary = ({ total, completadas, pendientes, mostrando, filtroActual }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "#1d4ed8",
            margin: 0,
          }}
        >
          {total}
        </p>
        <p style={{ color: "#64748b", margin: 0 }}>Total</p>
      </div>

      <div style={{ textAlign: "center" }}>
        <p
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "#16a34a",
            margin: 0,
          }}
        >
          {completadas}
        </p>
        <p style={{ color: "#64748b", margin: 0 }}>Completadas</p>
      </div>

      <div style={{ textAlign: "center" }}>
        <p
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "#f59e0b",
            margin: 0,
          }}
        >
          {pendientes}
        </p>
        <p style={{ color: "#64748b", margin: 0 }}>Pendientes</p>
      </div>

      <div style={{ textAlign: "center" }}>
        <p
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "#0f172a",
            margin: 0,
          }}
        >
          {mostrando}
        </p>
        <p style={{ color: "#64748b", margin: 0 }}>
          Mostrando ({filtroActual})
        </p>
      </div>
    </div>
  );
};

export default TaskSummary;