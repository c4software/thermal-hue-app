import React, { Component } from 'react';

import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import Toggle from 'material-ui/Toggle';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import {connect} from "react-redux";
import {save_url_data, get_remote_rooms} from "../../libs/";
import {add_disabled_room, remove_disabled_room} from "../../actions/";
import { translate } from 'react-i18next';


class Settings extends Component {
    componentDidMount = () => {
        get_remote_rooms();
    }

    state = {
        open: false
    }

    handleClose = (o) => {
        let goHome = this.props.url_data?false:true;
        let url = document.getElementById("url_data").value;

        save_url_data(url);

        if (goHome){
            // Redirect only if no url previously defined.
            window.location.hash = "/";
        }else{
            // Just close the modal
            this.setState({open: false});
        }
    }

    // Test if room is disable.
    isDisableRoom = (roomName) => {
        console.log(this.props.roomListDisabled.indexOf(roomName))
        if (this.props.roomListDisabled.indexOf(roomName) !== -1){
            return false;
        }else{
            return true;
        }
    }

    roomToggle = (e, state) => {
        if (state){
            remove_disabled_room(e.target.id);
        }else{
            add_disabled_room(e.target.id)
        }
    }

    roomList = () => {
        const {t} = this.props;
        if (this.props.rooms.length > 0){
            return (
                <span>
                <Subheader>{t("roomList")}</Subheader>
                {this.props.rooms.map(room => <ListItem key={room} primaryText={room} rightToggle={<Toggle onToggle={this.roomToggle} id={room} defaultToggled={this.isDisableRoom(room)} />} />)}
                </span>
            );
        }else{
            return null;
        }
    }

    render(){
        const {t} = this.props;
        const actions = [
          <FlatButton
            label="Ok"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.handleClose}
          />,
        ];
        return (
            <div>
                <List>
                    <Subheader>{t("remoteServer")}</Subheader>
                    <ListItem
                        onTouchTap={() => this.setState({open: true})}
                        primaryText={t("url")}
                        secondaryText={this.props.url_data?this.props.url_data:t("noServer")}
                    />
                    {this.roomList()}
                </List>

                <Dialog
                  title={this.props.t("url")}
                  actions={actions}
                  open={this.state.open}
                  onRequestClose={this.handleClose}>
                    <TextField defaultValue={this.props.url_data} id="url_data" fullWidth={true} hintText="https://script.google.com/macros/s/" />
                </Dialog>

            </div>
        )
    }
}

export default connect(function(state){
    return {
        url_data: state.url_data,
        rooms: state.roomList,
        roomListDisabled: state.roomListDisabled
    }
})(translate()(Settings))
