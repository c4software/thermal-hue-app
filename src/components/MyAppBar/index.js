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
import {get_remote_data, get_visible_rooms} from "../../libs";
import {toggleRoomChooser} from "../../actions";
import Timeago from "../Timeago";
import { translate } from 'react-i18next';

import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import RoomChooser from "../RoomChooser";

class MyAppBar extends Component{
  state = {
      open: false,
      state: "menu",
      title: this.props.t('appName')
    };

  componentDidMount(){
    // Monitor the hash change, display the menu or the back button.
    window.addEventListener('hashchange', () => {
        switch(window.location.hash){
            case "#/":
                this.setState({state: "menu", title: this.props.t('appName')});
                break;
            case "#/settings":
                this.setState({state: "back", title: this.props.t('settings')});
                break;
            default:
                this.setState({state: "menu", title: this.props.t('appName')});
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
    window.location.hash = action;
  };

  // Menu
  renderMenu = () => {
    const {t} = this.props;

    if (this.state.state === "menu"){
      return (
        <IconMenu
            iconButtonElement={
                <IconButton><MoreVertIcon color="#FFFFFF" /></IconButton>
            }
            listStyle={{paddingTop: 0, paddingBottom: 0}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
            <MenuItem disabled={this.props.ajax_in_progress} primaryText={t("refresh")} onTouchTap={() => get_remote_data(this.props.selectedRoom)}/>
            {get_visible_rooms().length > 1?<MenuItem primaryText={t("roomChooser")} onTouchTap={toggleRoomChooser}/>:null}
        </IconMenu>
      )
    }else{
      return null;
    }
  };

  titleOrRoomName = () => {
    if(this.props.selectedRoom){
      return this.props.selectedRoom;
    }else{
      return this.state.title
    }
  }

  // Render the title in the top bar.
  // If user is in the home, display the last Refresh state.
  // If other path display the app title only
  renderTitle = () => {
    if (this.state.state === "menu"){
        return (<div>
            <div style={{ marginTop: 10 }}>{this.titleOrRoomName()}</div>
            <div style={{ fontSize: 'small', fontWeight: 300, paddingLeft: 0 }}>{<Timeago />}</div>
        </div>)
    }else{
      return this.state.title;
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
    const { t } = this.props;
    return (
      <div>
        <RoomChooser open={this.props.roomChooserOpen} />
        <Drawer docked={false} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
            <div style={{height: "67px", backgroundColor: indigo500}} />
            <MenuItem onTouchTap={() => this.go("/settings")} leftIcon={<Settings />}>{t("settings")}</MenuItem>
        </Drawer>
        <AppBar
            className="appBar"
            titleStyle={this.renderTitleStyle()}
            title={this.renderTitle()}
            onLeftIconButtonTouchTap={this.handeLeftIcon}
            iconElementLeft={this.leftIcon()}
            iconElementRight={this.renderMenu()}
        />
      </div>
    )
  }
}

export default connect((state) => {
    return {
        data: state.data,
        ajax_in_progress: state.ajax_in_progress,
        selectedRoom: state.selectedRoom
    }
})(translate()(MyAppBar))
