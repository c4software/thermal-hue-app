import React, {Component} from 'react';
import moment from "moment";

class Timeago extends Component{
  state = {timeago: "No data"};

  componentDidMount = () => {
    this.timerId = setInterval(this.formatDate, 30000);
    this.formatDate()
  };

  componentWillUnmount = () => {
    clearTimeout(this.timerId);
  }

  formatDate = () => {
    if(this.props.date !== ""){
        this.setState({timeago: moment(this.props.date, "YYYY-MM-DD:HH:mm:ss").fromNow()});
    }else{
      this.setState({timeago: ""});
    }

  };
  render = () => {
    return (
      <span>{this.state.timeago}</span>
    );
  }
}

export default Timeago;
