import React, { PureComponent } from 'react'
import {Grid} from "@material-ui/core";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./model.css";

class MomentModel extends PureComponent {
     constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
          <Grid container item xs={12} sm={6} md={4}>
            <div className="modelCard">
              <Link to={"/moments/" + this.props.link}>
                <Grid container spacing={1}>
                  <Grid container item xs={12} spacing={3}>
                    <img
                      className="thumbnail"
                      src={this.props.thumbnail}
                      alt={this.props.title}
                    />
                  </Grid>
                  <Grid container item xs={12} spacing={3}>
                    <p className="titleText">
                      {this.props.title} | Season: {this.props.season}
                    </p>
                  </Grid>
                  <Grid container item xs={12} spacing={3}>
                    <p>Length: {this.props.length}</p>
                  </Grid>
                </Grid>
              </Link>
            </div>
          </Grid>
        );
    }
}

export default MomentModel