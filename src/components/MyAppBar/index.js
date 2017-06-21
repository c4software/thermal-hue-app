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
import {get_remote_data} from "../../libs";
import Timeago from "../Timeago";

import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
const MenuBar = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon color="#FFFFFF" /></IconButton>
        }
        listStyle={{paddingTop: 0, paddingBottom: 0}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Refresh" onTouchTap={get_remote_data}/>
    </IconMenu>
);

class MyAppBar extends Component{
  state = {
      open: false,
      state: "menu"
    };

  componentDidMount(){
    // Monitor the hash change, display the menu or the back button.
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

  // Trigger the menu open or the go to the home if the user is in the home or not
  handeLeftIcon = () => {
      if (this.state.state === "menu"){
          this.setState({open: !this.state.open});
      }else{
          this.go("/");
      }
  };

  // Display the correct iconButton depending on the user state
  leftIcon = () => {
      if (this.state.state === "menu"){
          return (<IconButton><Menu /></IconButton>)
      }else{
          return (<IconButton><ArrowBack /></IconButton>)
      }
  }

  // Close the menu, and go to the requested path
  go = (action) => {
    this.setState({open: false});
    location.hash = action;
  };

  // Render the title in the top bar.
  // If user is in the home, display the last Refresh state.
  // If other path display the app title only
  renderTitle = () => {
    if (this.state.state === "menu"){
        return (<div>
            <div style={{ marginTop: 10 }}>Thermal Hue</div>
            <div style={{ fontSize: 'small', fontWeight: 300, paddingLeft: 0 }}>{<Timeago />}</div>
        </div>)
    }else{
      return "Thermal Hue";
    }
  }

  // The style (lineHeight) is depending if the title as two lines on only one.
  renderTitleStyle = () => {
    if (this.state.state === "menu"){
      return {lineHeight: 'normal'};
    }else{
      return null;
    }
  }

  render(){
    return (
      <div>
        <Drawer docked={false} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
            <div style={{height: "67px", backgroundColor: indigo500}} />
            <MenuItem onTouchTap={() => this.go("/settings")} leftIcon={<Settings />}>Paramètres</MenuItem>
        </Drawer>
        <AppBar
            className="appBar"
            titleStyle={this.renderTitleStyle()}
            title={this.renderTitle()}
            onLeftIconButtonTouchTap={this.handeLeftIcon}
            iconElementLeft={this.leftIcon()}
            iconElementRight={<MenuBar />}
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
