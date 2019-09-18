import React, { Component } from 'react';
import axios from 'axios';
import DrWhoQuotes from "../assets/DrWhoQuotes.json";
import QuoteBox from "./QuoteBox.js";
import "./QuoteBox.css";

export default class Quotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: DrWhoQuotes,
            number: "",
            quote: ""
        }
        this.newNumber = this.newNumber.bind(this);
        this.tweeter = this.tweeter.bind(this);
    }
    
newNumber() {
    let randomNum = Math.floor(Math.random() * this.state.data.length);

    if(randomNum == this.state.number) {
        randomNum += 1
    };

    this.setState({
        number: randomNum
    })
    if (this.state.number) {
        this.setState({
            quote: this.state.data[this.state.number]
        });
    } else {
        console.log("No button has been pressed yet.")
    };
}

tweeter(){
    
    window.open('https://twitter.com/intent/tweet?url=http%3A%2F%2Fdoctorwho.xyz&text='+ '\"' + this.state.quote.quote + '\"' + '\t -' + this.state.quote.name + '&hashtags=DoctorWhoXYZ', 
                         'newwindow', 
                         'width=300,height=250'); 
              return false;
};

    render() {
        return (
            <div>
                {this.state.quote ? 
                    <QuoteBox 
                        quote={this.state.quote.quote} 
                        author={this.state.quote.name} 
                        episode={this.state.quote.episode}
                    id="quote-box" /> : <div className="box-sizing"><p className="v-align">Click Below to get a Quote from Doctor Who</p></div>
                }
                <div className="wrapper">
                    <button className="modern-button" id="new-quote" onClick={this.newNumber}>Get a new Quote</button><br />
                {this.state.quote ?
                    <button className="alt-button" onClick={this.tweeter} id="tweet-quote">tweeter</button> : 
                    <button className="alt-button-disabled" id="tweet-quote" disabled>tweeter</button>

                }
                </div>
            </div>
        )
    }
}
