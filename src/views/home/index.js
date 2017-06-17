import "./index.css";

import React, { Component } from 'react';

class Home extends Component {  

  state = {
    data: {}
  }

  constructor(props) {
    super(props);
    this.url_data = localStorage.getItem("url_data");
  }

  get = () => {
    fetch(this.url_data + "?get", {mode: "cors"})
    .then(response => response.json())
    .then(j => this.setState({data: j.data}))
    .catch(d => console.error(d));
  }

  componentDidMount = () => {
    this.get();
  }

  display_value = () => {
    if (this.state.data.last !== undefined){
      return this.state.data.last.value
    }else{
      return "--"
    }
  }

  render() {
    return (
      <div>
        <h1 className="temp">{this.display_value()}</h1>
        <h3>Todo trending</h3>
      </div>
    );
  }
}

export default Home;
