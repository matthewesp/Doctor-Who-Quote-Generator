import React, { PureComponent } from 'react';
import './paths.css';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Grid} from "@material-ui/core";

class Paths extends PureComponent {


    render() {
        return (
          <div>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
            <h1 className="title center-text">Welcome to Doctor Who XYZ!</h1>
            <Link className="alt-button center" to='/quote'>Quote Box</Link>
            <Link className="alt-button center" to='/moments'>Best Moments</Link>
            <Link className="alt-button-disabled center" disabled>Coming Soon</Link>
            </Grid>
          </div>
        );
    }
}

export default Paths