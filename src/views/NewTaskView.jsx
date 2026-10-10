import TaskForm from "../components/TaskForm";

const NewTaskView = ({ onAgregar }) => {
  return (
    <section>
      <TaskForm onAgregar={onAgregar} />
    </section>
  );
};

export default NewTaskView;