import React, { PureComponent } from 'react';
import VideoData from '../../assets/DrWhoVideos.json';
import MomentModel from './MomentModel';
import {Grid} from '@material-ui/core'
import "./model.css";

class Moments extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            data : VideoData,
        }
    }

    render() {
        return (
          <div className="container">
            <h1 className="center-text title">Best Doctor Who Moments</h1>
            <Grid
              container
              spacing={1}
              direction="row"
              justify="center"
              alignItems="stretch"
            >
              {this.state.data.map(x => (
                <MomentModel
                  title={x.title}
                  season={x.season}
                  length={x.length}
                  link={x.link}
                  thumbnail={x.thumbnail}
                />
              ))}
              
            </Grid>
          </div>
        );
    }
}

export default Moments