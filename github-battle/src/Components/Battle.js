import React from "react";
import { Link } from "react-router-dom";

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: "",
      player2: "",
      click1: false,
      click2: false,
    };
  }

  handleChange1 = (event) => {
    this.setState({ player1: event.target.value });
  };

  handleChange2 = (event) => {
    this.setState({ player2: event.target.value });
  };

  handleSubmit1 = () => {
    this.setState((previousState) => ({
      click1: !previousState.click1,
    }));
  };

  handleSubmit2 = (event) => {
    this.setState((previousState) => ({
      click2: !previousState.click2,
    }));
  };

  render() {
    return (
      <div className="battle">
        <h2>Instructions</h2>
        <div className="flex justify-center">
          <div>
            <p>Enter two GitHub users</p>
            <i className="battle-icons fa fa-users fa-5x users"></i>
          </div>
          <div>
            <p>Battle</p>
            <i
              className="battle-icons fa fa-fighter-jet fa-5x jet"
              aria-hidden="true"
            ></i>
          </div>
          <div>
            <p>See the Winner</p>
            <i
              className="battle-icons fa fa-trophy fa-5x trophy"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <h2>Players</h2>
        <div className="flex">
          <div>
            <p>Player One</p>
            {!this.state.click1 ? (
              <div className="flex justify-start">
                <input
                  placeholder="github username"
                  value={this.state.player1}
                  onChange={this.handleChange1}
                />
                <button onClick={this.handleSubmit1} className="submit">
                  Submit
                </button>
              </div>
            ) : (
              <div className="list large">
                <h4>{this.state.player1}</h4>
              </div>
            )}
          </div>
          <div>
            <p>Player Two</p>
            {!this.state.click2 ? (
              <div className="flex justify-start">
                <input
                  placeholder="github username"
                  value={this.state.player2}
                  onChange={this.handleChange2}
                />
                <button onClick={this.handleSubmit2} className="submit">
                  Submit
                </button>
              </div>
            ) : (
              <div className="list large">
                <h4>{this.state.player2}</h4>
              </div>
            )}
          </div>
        </div>
        {this.state.click1 && this.state.click2 ? (
          <Link to="/battle/final" exact>
            <button className="battle-btn">Battle</button>
          </Link>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Battle;
