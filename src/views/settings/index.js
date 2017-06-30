import React, { Component } from 'react';

import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import {connect} from "react-redux";
import {save_url_data, get_remote_rooms} from "../../libs/";
import { translate } from 'react-i18next';

class Settings extends Component {
    componentDidMount = () => {
        get_remote_rooms();
    }

    state = {
        open: false
    }

    handleClose = (o) => {
        let url = document.getElementById("url_data").value;
        save_url_data(url);
        this.setState({open: false});
    }

    roomList = () => {
        const {t} = this.props;
        if (this.props.rooms.length > 0){
            return (
                <span>
                <Subheader>{t("roomList")}</Subheader>
                {this.props.rooms.map(room => <ListItem key={room} primaryText={room} />)}
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
        rooms: state.roomList
    }
})(translate()(Settings))
