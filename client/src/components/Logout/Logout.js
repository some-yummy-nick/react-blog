import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {logoutUser} from "store/actions/auth";

export class Logout extends PureComponent {
    componentDidMount() {
        this.props.logoutUser();
        this.props.history.push("/");
    }

    render() {
        return <></>;
    }
}

export default connect(null, {logoutUser})(Logout);
