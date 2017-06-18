import "./index.css";

import React, {Component} from 'react';

import AppBar from 'material-ui/AppBar';
import ArrowBack from "material-ui/svg-icons/navigation/arrow-back";
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import Menu from "material-ui/svg-icons/navigation/menu";
import MenuItem from 'material-ui/MenuItem';
import Settings from "material-ui/svg-icons/action/settings";
import {connect} from "react-redux";
import {indigo500} from 'material-ui/styles/colors';

class MyAppBar extends Component{
  state = {
      open: false,
      state: "menu"
    };
  
  componentDidMount(){
    window.addEventListener('hashchange', () => {
        switch(location.hash){
            case "#/":
                this.setState({state: "menu"});
                break;
            case "#/settings":
                this.setState({state: "back"});
                break;
            default:
                this.setState({state: "menu"});
        }
    });
    window.dispatchEvent(new CustomEvent("hashchange", {}));
  }

  handeLeftIcon = () => {
      if (this.state.state === "menu"){
          this.setState({open: !this.state.open});
      }else{
          this.go("/");
      }
  };

  leftIcon = () => {
      if (this.state.state === "menu"){
          return (<IconButton><Menu /></IconButton>)
      }else{
          return (<IconButton><ArrowBack /></IconButton>)
      }
  }

  go = (action) => {
      location.hash = action;
      this.setState({open: false});
  };

  render(){
    return (
      <div>
        <Drawer docked={false} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
            <div style={{height: "67px", backgroundColor: indigo500}} />
            <MenuItem onTouchTap={() => this.go("/settings")} leftIcon={<Settings />}>Paramètres</MenuItem>
        </Drawer>
        <AppBar
            className="appBar"
            titleStyle={{ lineHeight: 'normal' }}
            title={<div>
                <div style={{ marginTop: 10 }}>Thermal Hue</div>
                <div style={{ fontSize: 'small', fontWeight: 300, paddingLeft: 0 }}>{this.props.data.last.date}</div>
            </div>}
            onLeftIconButtonTouchTap={this.handeLeftIcon}
            iconElementLeft={this.leftIcon()}
        />
      </div>
    )
  }
}

export default connect(function(state){
    return {
        data: state.data
    }
})(MyAppBar)

