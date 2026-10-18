# TaskCampus - Laboratorio React

**Integrantes:**
Vianca Viveros
Joaquín Orellana

**Repositorio Git público:** https://github.com/keutimia/taskcampus_V

### 1. Instalación y Ejecución
**Versión de Node.js:** v24.21.0
**Versión de npm:** 11.19.0

**Instrucciones:**
1. Clonar el repositorio.
2. Abrir una terminal en la carpeta del proyecto y ejecutar `npm install` para instalar las dependencias.
3. Ejecutar `npm run dev` para iniciar el servidor de desarrollo.
4. Para compilar el proyecto para producción, ejecutar `npm run build`.

### 2. Comparación entre Base y Desarrollo
El proyecto base entregaba tres tareas estáticas fijadas directamente en el código de App.jsx, con botones que solo ejecutaban alertas temporales. En este desarrollo, se transformó en una aplicación dinámica consumiendo la API de JSONPlaceholder. Se implementó un flujo CRUD completo separado en capas (servicios, hooks y componentes), se añadió navegación por renderizado condicional, edición en línea, y filtros dinámicos que actualizan contadores derivados en tiempo real.

### 3. Limitaciones de la API (JSONPlaceholder)
Se utilizó JSONPlaceholder para simular las peticiones HTTP. Sus operaciones de escritura (POST, PUT, DELETE) son simuladas; devuelven códigos de éxito y el objeto modificado, pero no alteran la base de datos real del servidor. Por lo tanto, los cambios realizados durante la sesión se mantienen en el estado local de React, pero al recargar la página (F5) se perderán y volverán a cargar las tareas originales. 

### 4. Investigación y Aplicación al Proyecto

**A. Navegación entre vistas**
* **Explicación:** En lugar de usar un enrutador como react-router, se controló la vista activa mediante el estado local vistaActiva en App.jsx.
* **Aplicación:** El componente Navigation.jsx recibe setVistaActiva para cambiar este estado. En App.jsx, usamos operadores lógicos && para renderizar condicionalmente SummaryView, TasksView o NewTaskView dependiendo de qué vista esté activa, manteniendo intactas las tareas y filtros en memoria. 

**B. Estado derivado**
* **Explicación:** Es la técnica de calcular información al vuelo a partir del estado principal, en lugar de crear un nuevo estado redundante que pueda desincronizarse.
* **Aplicación:** En App.jsx, tareasFiltradas se calcula directamente usando .filter() sobre el array de tareas, dependiendo del valor de filtro. En TaskSummary.jsx, los contadores de completadas y pendientes se derivan directamente de la longitud de estos arrays filtrados.

**C. Actualización funcional del estado**
* **Explicación:** Consiste en pasar una función al setter de useState (ej: setTareas(prev => ...)) cuando el nuevo estado depende directamente de los valores del estado anterior, garantizando que no haya condiciones de carrera.
* **Aplicación:** Se aplicó en useTareas.js en las funciones crearTarea, actualizarTarea y eliminarTarea, iterando o filtrando sobre el parámetro prev para asegurar inmutabilidad.

**D. Identificadores y API simulada**
* **Explicación:** Al hacer un POST a JSONPlaceholder, la API siempre devuelve el mismo identificador (id: 201). Si React recibe múltiples elementos con la misma key, genera errores y fallos de renderizado.
* **Aplicación:** En la función crearTarea de useTareas.js, interceptamos la respuesta exitosa de la API y reemplazamos el identificador remoto por uno local único usando Date.now(). Esto asegura claves únicas y estables para operaciones futuras durante la misma sesión.

### 5. Evidencias Verificables (Casos de Prueba)

| Caso Probado | Pasos | Resultado Esperado | Resultado Obtenido |
| :--- | :--- | :--- | :--- |
| **Carga inicial (RF01)** | Iniciar la aplicación (`npm run dev`). | Deben aparecer 10 tareas obtenidas de JSONPlaceholder. | Las 10 tareas cargan correctamente tras mostrar indicador. |
| **Crear tarea (RF03/RF04)** | Ir a "Nueva Tarea", escribir título válido y presionar "Agregar". | Petición POST exitosa y la tarea aparece en la lista sin recargar. | Tarea agregada con ID local estable. Bloqueo si está vacía. |
| **Editar título (RF06)** | Doble clic sobre un título en la vista de tareas, modificar y presionar Enter. | Petición PUT y actualización del texto en pantalla. | Título modificado correctamente, input vuelve a texto normal. |
| **Filtros combinados (RF08/RF09)** | Seleccionar filtro "Pendientes" y escribir texto en el buscador. | La lista muestra solo tareas pendientes que coincidan con el texto. | Combinación aplicada correctamente y en tiempo real. |
| **Resumen derivado (RF10)** | Ir a vista "Resumen" tras aplicar un filtro en "Tareas". | Se muestra el total, completadas, pendientes y la cantidad mostrada. | Los cálculos coinciden con el estado actual del listado. |
