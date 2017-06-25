import "./index.css";

import React, { Component } from 'react';

import ArrowDropDown from "material-ui/svg-icons/navigation/arrow-drop-down";
import ArrowDropUp from "material-ui/svg-icons/navigation/arrow-drop-up";
import {connect} from "react-redux";
import {indigo500} from "material-ui/styles/colors";
import GraphHistory from "../../components/GraphHistory";
import {get_remote_data} from "../../libs";

import ReactPullToRefresh from "react-pull-to-refresh";
import RefreshIndicator from 'material-ui/RefreshIndicator';

class Home extends Component {

  handleRefresh(resolve, reject) {
    get_remote_data();
    resolve();
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

  displayLoading = () => {
    return (
      <div style={{position: 'absolute', top: 80, left: 0, right: 0}}>
        <RefreshIndicator size={50} left={-20} top={0} status={this.props.ajax_in_progress?"loading":"hide"} style={{marginLeft: '50%'}} />
      </div>
    )
  }

  render = () => {
    return (
      <div className="dataContainer">
        {this.displayLoading()}
        <ReactPullToRefresh loading={null} icon={null} onRefresh={this.handleRefresh} className="tempContainer" style={{backgroundColor: indigo500}}>
          <div className="temp">
            {this.display_value()}
            {this.display_trend()}
          </div>
        </ReactPullToRefresh>
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
        ajax_in_progress: state.ajax_in_progress
    }
})(Home)
