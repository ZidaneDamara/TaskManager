function TaskInput(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a new Task"
        value={props.newTask}
        onChange={(e) => props.setNewTask(e.target.value)}
      />
      <button onClick={props.handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskInput;
