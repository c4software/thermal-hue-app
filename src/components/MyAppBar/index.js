import "./index.css";

import React, {Component} from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import Menu from "material-ui/svg-icons/navigation/menu";
import MenuItem from 'material-ui/MenuItem';
import Settings from "material-ui/svg-icons/action/settings";
import {indigo500} from 'material-ui/styles/colors';

class MyAppBar extends Component{
  state = {open: false};
  
  handleToggle = () => {
      this.setState({open: !this.state.open});
  };

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
            title="Thermal Hue App"
            onLeftIconButtonTouchTap={this.handleToggle}
            iconElementLeft={<IconButton><Menu /></IconButton>}
        />
      </div>
    )
  }
}

export default MyAppBar
