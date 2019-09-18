import React, { Component } from 'react';
import "./QuoteBox.css";

class QuoteBox extends Component {
    render() {
        return (
            <div>
                <div className="box-sizing" id="quote-box">
                    <p className="text-center" id="text">"{this.props.quote}"</p>
                    <h4 className="text-center" id="author">{this.props.author}</h4>
                    <h5 className="text-center">{this.props.episode}</h5>
                </div>
            </div>
        );
    }
}

export default QuoteBox;