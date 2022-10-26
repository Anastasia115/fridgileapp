import "./updateComponent.css";

export const UpdateComponent = ({
  updateData,
  changeTask,
  updateTask,
  cancelUpdate,
}) => {
  return (
    <>
      {/* Update Task */}
      <div className="form-container">
        <div className="form">
          <input className="input"
            value={updateData && updateData.title}
            onChange={(e) => changeTask(e)}
          />
        </div>
        <div className="buttons">
          <button className="btn" onClick={cancelUpdate}>Cancel</button>
          <button className="btn" onClick={updateTask}>Update</button>
        </div>
      </div>
      <br />
    </>
  );
};
