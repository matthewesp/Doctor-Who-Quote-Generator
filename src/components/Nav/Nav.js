import React, { PureComponent } from 'react'
import Logo from '../../assets/images/tardis.svg';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Nav extends PureComponent {

    render() {
        return (
          <div className="title">
            <Link strict to="/">
                <img src={Logo} alt="tardis" className="logo rotate-vert-center" />
            </Link>
          </div>
        );
    }
}

export default Nav