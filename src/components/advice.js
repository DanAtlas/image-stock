import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import logo from '../img/cam_dark.svg';

const apiAdvice = 'https://api.adviceslip.com/advice';

class Advice extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      advices: [],
    };  
  }

  componentDidMount() {
    // fetch(apiAdvice) 
    //   .then(res => res.json())
    //   .then(function(advice) {
    //     const adviceData = advice.slip.advice;
    //     document.getElementById('advice').innerHTML = adviceData;
    //   });
      
    axios
      .get(apiAdvice)
      .then(res => {
        // console.log(res.data);
        this.setState({
          advices: res.data.slip.advice
        })
      });
  }

  render(){
    const theAdvice = this.state.advices;

    return(
      <footer className="footer">
        <div className="container">
          <div className="footer_wrap">
            <NavLink className="logo" exact to="/">
              <img src={logo} alt="logo"/>
            </NavLink>
            <p id="advice">{theAdvice}</p>
          </div>
        </div>
      </footer>
    );
  }
}


export default Advice;