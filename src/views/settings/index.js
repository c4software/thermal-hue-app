import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';

import {connect} from "react-redux";
import {save_url_data, get_remote_rooms} from "../../libs/";
import { translate } from 'react-i18next';

class Settings extends Component {
    componentDidMount = () => {
        get_remote_rooms();
    }
    render(){
        const {t} = this.props;
        return (
            <div>
                <Subheader>{t("remoteServer")}</Subheader>
                <TextField defaultValue={this.props.url_data} id="url_data" fullWidth={true} hintText="https://script.google.com/macros/s/" />
                <div className="text-center pad20">
                    <RaisedButton label={t("save")} onTouchTap={save_url_data} primary={true} />
                </div>

                <List>
                    <Subheader>{t("roomList")}</Subheader>
                    {this.props.rooms.map(room => <ListItem key={room} primaryText={room} />)}
                </List>

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
