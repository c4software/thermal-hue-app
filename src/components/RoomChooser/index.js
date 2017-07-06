import React, {Component} from 'react';

import {connect} from "react-redux";
import {translate} from 'react-i18next';
import {toggleRoomChooser, set_selected_room} from "../../actions";
import {get_visible_rooms} from "../../libs";

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Check from "material-ui/svg-icons/navigation/check"

class RoomChooser extends Component{

    actions =  [
      <FlatButton
        label={this.props.t("close")}
        primary={true}
        onTouchTap={toggleRoomChooser}
      />
    ];

    render = () => {
        const {t} = this.props;
        return (
            <Dialog
              title={t("roomChooser")}
              actions={this.actions}
              open={this.props.roomChooserOpen}
              autoScrollBodyContent={true}>
              <List>
                {get_visible_rooms().map(room => <ListItem
                    onTouchTap={() => {set_selected_room(room);toggleRoomChooser();}}
                    key={room}
                    primaryText={room}
                    rightIcon={this.props.selectedRoom === room?<Check />:null}
                    />)}
              </List>
            </Dialog>
        )
    }
}

export default connect((state) => {
    return {
        selectedRoom: state.selectedRoom,
        roomList: state.roomList,
        roomListDisabled: state.roomList,
        roomChooserOpen: state.roomChooserOpen
    }
})(translate()(RoomChooser))
