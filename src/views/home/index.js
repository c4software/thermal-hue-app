import "./index.css";

import React, { Component } from 'react';

import ArrowDropDown from "material-ui/svg-icons/navigation/arrow-drop-down";
import ArrowDropUp from "material-ui/svg-icons/navigation/arrow-drop-up";
import {connect} from "react-redux";
import {indigo500} from "material-ui/styles/colors";
import GraphHistory from "../../components/GraphHistory";

class Home extends Component {

  display_value = () => {
    if (this.props.data.last !== undefined){
      return this.props.data.last.value.toFixed(1);
    }else{
      return "--"
    }
  }

  display_trend = () => {
    let trend = "";
    if (this.props.data.trend !== undefined){
       switch (this.props.data.trend){
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

  render = () => {
    return (
      <div className="dataContainer">
        <div className="tempContainer" style={{backgroundColor: indigo500}}>
          <div className="temp">
            {this.display_value()}
            {this.display_trend()}
          </div>
        </div>
        <div className="graphContainer">
          <GraphHistory data={this.props.data.history} />
        </div>
      </div>
    );
  }
}

export default connect(function(state){
    return {
        data: state.data
    }
})(Home)
