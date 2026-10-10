const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const getTareas = async (limite = 10) => {
  const res = await fetch(`${API_URL}?_limit=${limite}`);
  if (!res.ok) throw new Error("Error al obtener tareas");
  return await res.json();
};

export const postTarea = async (titulo) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: titulo, completed: false, userId: 1 }),
  });
  if (!res.ok) throw new Error("Error al crear tarea");
  return await res.json();
};

export const putTarea = async (id, datos) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
  });
  if (!res.ok) throw new Error("Error al actualizar tarea");
  return await res.json();
};

export const deleteTarea = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Error al eliminar tarea");
};