import "./index.css";

import React, { Component } from 'react';

import ArrowDropDown from "material-ui/svg-icons/navigation/arrow-drop-down";
import ArrowDropUp from "material-ui/svg-icons/navigation/arrow-drop-up";
import {indigo500} from "material-ui/styles/colors";

class Home extends Component {  

  state = {
    data: {}
  }

  constructor(props) {
    super(props);
    this.url_data = localStorage.getItem("url_data");
    this.state.data = JSON.parse(localStorage.getItem("data")||"{}")
  }

  get = () => {
    fetch(this.url_data + "?get", {mode: "cors"})
    .then(response => response.json())
    .then(j => {
      this.setState({data: j.data});
      localStorage.setItem("data", JSON.stringify(j.data));
    })
    .catch(d => console.error(d));
  }

  componentDidMount = () => {
    if (this.url_data !== null && this.url_data !== undefined){
      this.get();
    }else{
      window.location.hash = "/settings";
    }
    
  }

  display_value = () => {
    if (this.state.data.last !== undefined){
      return this.state.data.last.value
    }else{
      return "--"
    }
  }

  display_trend = () => {
    let trend = "";
    if (this.state.data.trend !== undefined){
       switch (this.state.data.trend){
         case "+":
          trend = <ArrowDropUp />
          break;
        case "-":
          trend = <ArrowDropDown />
          break;
        default:
          trend = <ArrowDropDown style={{transform: "rotate(-90deg)"}}/>;
       }
    }else{
      trend = "";
    }

     return trend;
  }


  render() {
    return (
      <div className="tempContainer" style={{backgroundColor: indigo500}}>
        <div className="temp">
          {this.display_value()}
          {this.display_trend()}
        </div>
      </div>
    );
  }
}

export default Home;
