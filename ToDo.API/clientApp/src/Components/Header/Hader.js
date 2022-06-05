import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <nav className="navbar navbar-default navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">
                  ToDo
                </Link>
                <Link className="navbar-brand" to="/new-todo">New Todo</Link>
               
              </div>

              <div
                className="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
              
                <form className="navbar-form navbar-right">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                  </div>
                  <button type="submit" className="btn btn-default">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
