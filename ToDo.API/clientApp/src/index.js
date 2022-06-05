import ReactDOM from "react-dom";
import React from "react";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components
import Header from "./Components/Header/Hader";
import ToDoList from "./Components/ToDoList/ToDoIList";


// Import components
import AddToDo from "./Components/AddToDo/AddToDo";


// Store
import store from "./store";
import { Provider } from "react-redux";

// hoc service
import ApiStoreService from "./Services/api-service";
import { ApiStoreServiceProvider } from "./Components/Api-service-context/api-service-context";
const apiStoreService = new ApiStoreService();

const App = () => {
  return (
    <Provider store={store}>
      <ApiStoreServiceProvider value={apiStoreService}>
        <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <ToDoList />
          } />
          <Route path="/new-todo" element={<AddToDo onAddToDo />}
          />
        </Routes>
      </Router>
      </ApiStoreServiceProvider>
    </Provider>
  )
}
ReactDOM.render(<App />, document.getElementById("root"));