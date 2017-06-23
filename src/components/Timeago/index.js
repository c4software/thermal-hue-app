import React, {Component} from 'react';
import moment from "moment";
import {connect} from "react-redux";
import i18n from "../../i18n";

class Timeago extends Component{
  state = {timeago: "No data"};

  componentDidMount = () => {
    moment.lang(i18n.language);
    this.timerId = setInterval(() => {
      this.setState({reload: Math.random()});
    }, 30000);
  };

  componentWillUnmount = () => {
    clearTimeout(this.timerId);
  }

  render = () => {
    if (this.props.data.last !== undefined){
      return (
        <span>{moment(this.props.data.last.date, "YYYY-MM-DD:HH:mm:ss").fromNow()}</span>
      );
    }else{
      return null;
    }
  }
}

export default connect(function(state){
    return {
        data: state.data
    }
})(Timeago)
