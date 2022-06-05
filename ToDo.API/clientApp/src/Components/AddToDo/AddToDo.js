import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { WithApiService } from "../Hoc/with-api-service";

class AddToDo extends React.Component {

  state = {
    Name: "",
    Execute: false,
    Date: Date.now(),
    Text: "",
    isRedirect: false,
  };

    getName = (event) => {
        this.setState({
          Name: event.target.value,
        });
      };  
    
      getDate = (event) => {
        this.setState({
        Date: event.target.value,
        });
      };   
      getText = (event) => {
        this.setState({
        Text: event.target.value,
        });
      };   
       getExecute = (event) => {
        this.setState({
         Execute: event.target.value,
        });
      };
    
      onSubmit = (event) => {
        event.preventDefault();
        const { Name, Execute, Date, Text } =
          this.state;
        const newTodo = {
          Name,
          Execute,
          Date,
          Text
        };
    
        this.props.apiStoreService.createTodo(newTodo);

        this.setState({
          isRedirect: true,
        });
      };  
      
      render() {
    const { isRedirect } = this.state;
    if (isRedirect) {
        return <Navigate to="/" />;
      }
    return (
        <div className="container">
          <div className="row">
            <div className="col-xs-7">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <div>
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      onChange={this.getName}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div>
                    <label>Date</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="2021-02-03T00:00:00"
                      onChange={this.getDate}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div>
                    <label>ToDo</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="About ToDo"
                      onChange={this.getText}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div>
                    <label>Execute</label>
                    <select
                      className="form-control"
                      defaultValue={"-----Select-----"}
                      onChange={this.getExecute}
                    >
                      <option value={"true"}>True</option>
                      <option value={"false"}>False</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-success" >
                    Add contact
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
  }
}

const mapStateToProps = (item) => {
 return item
}

// export default ContactItem;
export default WithApiService()(connect(mapStateToProps)(AddToDo));
