import "./addTask.css";

export const AddItemToListComponent = ({ newTask, setNewTask, addTask }) => {
  return (
    <>
      {/* Add Task */}
      <div className="form-container">
        <div className="form">
          <input className="input" type="text" placeholder="Type items..."value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        
          <button className="btn" onClick={addTask}>Add item</button>
        </div>
      </div>
      <br />
    </>
  );
};
