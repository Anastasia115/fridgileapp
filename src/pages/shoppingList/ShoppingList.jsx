import "./shoppingList.css";
import { useState } from "react";
import { AddItemToListComponent } from "../../components/AddTask/AddItemInListComponent";
import { ItemInListComponent } from "../../components/TodoComponent/ItemInListComponent";
import { UpdateComponent } from "../../components/UpdateComponent/UpdateComponent";
import Bag from "../../assets/shoppingListIcons/bag.svg";

export const ShoppingList = () => {
  const [toDo, setToDo] = useState([]);

  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");
 

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  const cancelUpdate = () => {
    setUpdateData("");
  };

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData("");
  };

  return (
    <div className="shoppingList">

      <div className="title">
      <h2>Shop List</h2>
      <p>Add items to your shopping list.</p>
      </div>

      {updateData && updateData ? (
        <UpdateComponent
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddItemToListComponent
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {/* Display ToDos */}

      {toDo && toDo.length ? "" : 
      <div className="no-items">
        <img src={Bag} alt="bag-illustration"/>
        <p>You don't have any items in your shopping list.</p>
      </div>
      
}

      <ItemInListComponent
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
};
