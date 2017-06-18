import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import {connect} from "react-redux";
import {save_url_data} from "../../libs/";

class Settings extends Component {
    render(){
        return (
            <div>
                <Subheader>Remote Server</Subheader>
                <TextField defaultValue={this.props.url_data} id="url_data" fullWidth={true} hintText="https://script.google.com/macros/s/" />
                <div className="text-center pad20">
                    <RaisedButton label="Save" onTouchTap={save_url_data} primary={true} />
                </div>
            </div>
        )
    }
}

export default connect(function(state){
    return {
        url_data: state.url_data
    }
})(Settings)
