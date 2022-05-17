import { NavLink } from "react-router-dom";
import React from "react";
import Loader from "./Loader";

class Menu extends React.Component {
  render() {
    if (!this.props.data) {
      return <Loader />;
    }
    let datas = this.props.data.items;

    let allLanguages = datas.reduce((acc, items) => {
      acc = acc.concat(items.language);
      return acc;
    }, []);

    let languages = [...new Set(allLanguages)];

    return (
      <ul className="flex justify-center">
        {languages.map((language) =>
          language === null ? (
            <li className="menu" key={language}>
              <NavLink
                className={(isActive) =>
                  "active" + (!isActive ? " non-active" : "")
                }
                to="/"
                exact
              >
                All
              </NavLink>
            </li>
          ) : (
            <li className="menu" key={language}>
              <NavLink
                className={(isActive) =>
                  "active" + (!isActive ? " non-active" : "")
                }
                to={`/post/${language}`}
              >
                {language}
              </NavLink>
            </li>
          )
        )}
      </ul>
    );
  }
}

export default Menu;
