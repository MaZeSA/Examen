import React from "react";
import { connect } from "react-redux";
import { WithApiService } from "../../Hoc/with-api-service";

class ToDoItem extends React.Component {
    constructor(props) {
      super(props);
      this.Props = props;
      console.log(">>>",props);
     
    }
  
    render() {
      return (
        <div>
          <div>
            <h3>{this.Props.name}</h3>
            <strong>Data: </strong> {this.Props.data}
            <div>Execute:
            {" "}
              {this.Props.execute ? (
                <i className="fa fa-star fa-1x"></i>
              ) : (
                <i className="fa fa-star-o fa-1x"></i>
              )} </div> 
            <div>ToDo: {this.Props.text}</div> 
          </div>
          <div className="col-xs-12 bottom text-center">
              <button type="button" className="btn btn-info btn-xs" onClick={()=>this.Props.apiStoreService.deleteTodo(this.Props.id)}>X
              </button>
          </div>
        </div>
      );
    }
  }
  
  const mapStateToProps = (item) => {
    return item;
  }

  // export default ContactItem;
  export default WithApiService()(connect(mapStateToProps)(ToDoItem));
