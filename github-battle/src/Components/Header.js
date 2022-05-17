import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="flex">
          <div className="flex">
            <NavLink
              className={(isActive) =>
                "active" + (!isActive ? " non-active" : "")
              }
              to="/"
              exact
            >
              <h3>Popular </h3>
            </NavLink>
            <NavLink
              className={(isActive) =>
                "active" + (!isActive ? " non-active" : "")
              }
              to="/battle/"
              exact
            >
              <h3>Battle</h3>
            </NavLink>
          </div>

          <button className="power" onClick={this.props.handleMode.bind(this)}>
            {this.props.darkmode ? "💡" : "🔦"}
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
