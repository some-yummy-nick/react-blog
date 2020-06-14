import React, {PureComponent} from "react";
import {connect} from "react-redux";
import Helmet from "react-helmet";
import {loginUser} from "store/actions/auth";
import {clearErrors} from "store/actions/errors";

export class Login extends PureComponent {
    state = {
        email: "",
        password: "",
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.auth) {
            this.props.history.push("/");
        }
    }

    componentDidMount() {
        this.props.clearErrors();
        if (this.props.auth) {
            this.props.history.push("/");
        }
    }

    handleChange = e => this.setState({[e.target.name]: e.target.value});

    handleSubmit = e => {
        e.preventDefault();
        this.props.loginUser(this.state);
    };

    render() {
        const {email, password} = this.state;
        const {errors} = this.props;
        return <>
            <Helmet>
                <title>React блог | Вход</title>
            </Helmet>
            <div className="row">
                <form className="card p-3 mx-auto col-md-6" onSubmit={this.handleSubmit}>
                    <h1 className="text-center">Вход</h1>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input className="form-control" type="text" name="email" id="email" value={email}
                               onChange={this.handleChange}/>
                        {
                            errors.email && <div className="text-danger">{errors.email}</div>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input className="form-control" type="password" name="password" id="password" value={password}
                               onChange={this.handleChange}/>
                        {
                            errors.password && <div className="text-danger">{errors.password}</div>
                        }
                    </div>
                    <button type="submit" className="btn btn-dark btn-lg">Войти</button>
                </form>
            </div>
        </>;
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {loginUser, clearErrors})(Login);
