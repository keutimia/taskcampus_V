import { useEffect } from "react";
import Button from "./Button";
 
// Modal de confirmación reutilizable. El contenido va en `children`.
const Modal = ({
  abierto,
  titulo,
  children,
  onConfirmar,
  onCancelar,
  textoConfirmar = "Confirmar",
  textoCancelar = "Cancelar",
  ocupado = false,
}) => {
  // Escape cancela, salvo que haya una operación en curso.
  useEffect(() => {
    if (!abierto) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape" && !ocupado) onCancelar();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [abierto, ocupado, onCancelar]);
 
  if (!abierto) return null;
 
  return (
    <div className="modal-overlay" onClick={ocupado ? undefined : onCancelar}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-titulo"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="modal-titulo" className="section-title">
          {titulo}
        </h2>
        <div className="modal-body">{children}</div>
        <div className="modal-actions">
          <Button variant="secondary" onClick={onCancelar} disabled={ocupado}>
            {textoCancelar}
          </Button>
          <Button variant="danger" onClick={onConfirmar} disabled={ocupado}>
            {ocupado ? "Procesando..." : textoConfirmar}
          </Button>
        </div>
      </div>
    </div>
  );
};
 
export default Modal;
