import React, {useState} from "react";
import './todo.css';

import EditIcon from "../../assets/shoppingListIcons/editicon.svg";
import TrashIcon from "../../assets/shoppingListIcons/trashicon.svg";
import PlusQuantity from "../../assets/shoppingListIcons/plus.svg";
import MinusQuantity from "../../assets/shoppingListIcons/minus.svg";
import CheckIcon from "../../assets/shoppingListIcons/check.svg";
import NotCheckIcon from "../../assets/shoppingListIcons/notcheck.svg";
export const ItemInListComponent = ({
  toDo,
  markDone,
  setUpdateData,
  deleteTask,
}) => {
  const [counter, setCounter] = useState(1);
const incrementCounter = () => setCounter(counter + 1);
const decrementCounter = () => setCounter(counter - 1);
const [isChecked, setIsChecked] = useState(false)

  return (
    <>
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="item-container">
                <div className="item">
                  <div className={task.status ? "done" : ""}>
                    
                    
                      {isChecked ?  <img
                      src={CheckIcon}
                        title="Completed / Not Completed"
                        onClick={(e) => {markDone(task.id), setIsChecked(false)}}
                      /> :<img
                      src={NotCheckIcon}
                        title="Completed / Not Completed"
                        onClick={(e) => {markDone(task.id), setIsChecked(true)}}
                      />  }
                    
                    
                    </div>
                    <h3>{task.title}</h3>
                  
                    <div className="quantity">
                      <img 
                      style={{ cursor: "pointer" }}
                      onClick={decrementCounter} 
                      src={MinusQuantity} alt=""/>

                      <p >{counter}</p>

                      <img
                      style={{ cursor: "pointer" }}
                      onClick={incrementCounter}
                      src={PlusQuantity}
                      alt=""
                      />
                  </div>
                    

                    {task.status ? null : (
                      <img
                       src={EditIcon}
                        title="Edit"
                        onClick={() =>
                          setUpdateData({
                            id: task.id,
                            title: task.title,
                            status: task.status ? true : false,
                          })
                        }
                      >
                      </img>
                    )}

                    <img 
                     src={TrashIcon}
                    title="Delete" onClick={() => deleteTask(task.id)}>
                    </img>
                </div>
                </div>
              </React.Fragment>
            );
          })}
    </>
  );
};
