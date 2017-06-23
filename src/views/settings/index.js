import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import {connect} from "react-redux";
import {save_url_data} from "../../libs/";
import { translate } from 'react-i18next';

class Settings extends Component {
    render(){
        const {t} = this.props;
        return (
            <div>
                <Subheader>{t("remoteServer")}</Subheader>
                <TextField defaultValue={this.props.url_data} id="url_data" fullWidth={true} hintText="https://script.google.com/macros/s/" />
                <div className="text-center pad20">
                    <RaisedButton label={t("save")} onTouchTap={save_url_data} primary={true} />
                </div>
            </div>
        )
    }
}

export default connect(function(state){
    return {
        url_data: state.url_data
    }
})(translate()(Settings))
