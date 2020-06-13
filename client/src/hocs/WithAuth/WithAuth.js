import React, {PureComponent} from "react";
import {connect} from "react-redux";

export default ChildComponent => {
    class WithAuth extends PureComponent {
        componentDidMount() {
            this.toLogin();
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            this.toLogin();
        }

        toLogin = () => {
            if (!this.props.auth) {
                this.props.history.push("/login");
            }
        };

        render() {
            return <ChildComponent {...this.props}/>;
        }
    }

    const mapStateToProps = state => ({
        auth: state.auth,
    });

    return connect(mapStateToProps)(WithAuth);
};
