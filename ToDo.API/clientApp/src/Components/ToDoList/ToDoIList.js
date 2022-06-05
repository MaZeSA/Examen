// import components
import ToDoItem from "./ToDoItem/ToDoItem";
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
// Api service
import { WithApiService } from "../Hoc/with-api-service";
// Import Actions
import { LoadAllToDo } from "../../Actions/ToDoActions"

const ToDoList = ({apiStoreService}) => {

    const dispatch = useDispatch()
    const { ToDoListArray } = useSelector(store => store.ToDoReducer);
     
   React.useEffect(() => {
      apiStoreService.getToDo().then(result => {
          const { data } = result;
          console.log("Data => ", data);
          dispatch(LoadAllToDo(data));
        })
  }, [])

  const contact = ToDoListArray.map((item) => {
    return (
      <ToDoItem
        key={item.id}
        {...item} 
      />
    );
  });
  return (
    <div className="container">
      <div className="col-md-12 bootstrap snippets bootdeys">
        <div className="x_panel">
          <div className="x_content">
            <div className="row">{contact}</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default WithApiService()(ToDoList);