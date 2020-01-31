import React, { PureComponent } from 'react'
import VideoData from '../../assets/DrWhoVideos.json';
import Error404 from "../Errors/Error404"
import {Grid} from "@material-ui/core";

class MomentVideo extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
          data: VideoData,
          link: this.props.match.params.id,
          exist: false,
          local: "",
        };
    }

    componentDidMount(){
    console.log("the component mounted");
        
    this.state.data.forEach(x => { x.link === this.state.link ? this.setState({exist: true, local:x}) : console.log("fuck off m8")});
    }
    
    render() {
        return (
          <div className="container">
            {this.state.exist ? (
              <Grid container spacing={6}>
                <Grid container item xs={12} sm={12} md={6} spacing={0}>
                  <iframe
                    title={this.state.local.title}
                    className="video"
                    src={"https://www.youtube.com/embed/" + this.state.link}
                    allowfullscreen
                  ></iframe>
                </Grid>
                <Grid container item xs={12} sm={12} md={6} spacing={0}>
                  <div>
                    <p class="titleText">{this.state.local.title}</p>
                    <p class="titleText">Series: {this.state.local.season}</p>
                  </div>
                </Grid>
              </Grid>
            ) : (
              <Error404 />
            )}
          </div>
        );
    }
}

export default MomentVideo