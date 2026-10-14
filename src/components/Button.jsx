// Botón reutilizable y configurable (requisito técnico del laboratorio).
// variant: "primary" | "secondary" | "danger"
const CLASES = {
  primary: "task-button",
  secondary: "task-button-secondary",
  danger: "task-button task-button-danger",
};
 
const Button = ({
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
  className = "",
  ...resto
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${CLASES[variant] ?? CLASES.primary} ${className}`.trim()}
      {...resto}
    >
      {children}
    </button>
  );
};
 
export default Button;
