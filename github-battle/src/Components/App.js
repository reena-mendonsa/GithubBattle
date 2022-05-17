import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Main from "./Main";
import SingleLanguage from "./SingleLanguage";
import Battle from "./Battle";
import Final from "./Final";

import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      darkmode: false,
    };
  }

  componentDidMount() {
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }

  handleMode() {
    this.setState((previousState) => ({
      darkmode: !previousState.darkmode,
    }));
  }

  render() {
    return (
      <BrowserRouter>
        <div className={this.state.darkmode ? "dark-background" : ""}>
          <div className="container">
            <Header
              handleMode={() => this.handleMode()}
              darkmode={this.state.darkmode}
            />

            <Route path="/" exact>
              <Menu data={this.state.data} />
              <Main data={this.state.data} />
            </Route>

            <Route path="/post/">
              <Menu data={this.state.data} />
            </Route>

            <Route path="/post/:language" component={SingleLanguage}></Route>

            <Route path="/battle/" exact>
              <Battle />
            </Route>
            <Route path="/battle/final">
              <Final />
            </Route>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
