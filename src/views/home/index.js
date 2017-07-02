import "./index.css";

import React, { Component } from 'react';

import ArrowDropDown from "material-ui/svg-icons/navigation/arrow-drop-down";
import ArrowDropUp from "material-ui/svg-icons/navigation/arrow-drop-up";
import {connect} from "react-redux";
import {indigo500} from "material-ui/styles/colors";
import GraphHistory from "../../components/GraphHistory";
import {get_remote_data} from "../../libs";

import CircularProgress from 'material-ui/CircularProgress';

class Home extends Component {

  componentDidMount = () => {
    get_remote_data(this.props.selectedRoom);
  }

  componentWillReceiveProps = (nextProps) => {
    // If room change, refresh data from remote
    if(nextProps.selectedRoom !== this.props.selectedRoom){
      get_remote_data(nextProps.selectedRoom);
    }
  }

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

  tempOrLoading = () => {
    if (this.props.ajax_in_progress){
      return (<CircularProgress color="#ffffff" />);
    }else{
      return (<div className="temp">
        {this.display_value()}
        {this.display_trend()}
      </div>)
    }
  }

  render = () => {
    return (
      <div className="dataContainer">
        <div className="tempContainer" style={{backgroundColor: indigo500}}>
          {this.tempOrLoading()}
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
        data: state.data,
        ajax_in_progress: state.ajax_in_progress,
        selectedRoom: state.selectedRoom
    }
})(Home)
