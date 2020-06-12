import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {registerUser} from "store/actions/auth";
import {clearErrors} from "store/actions/errors";

export class Register extends PureComponent {
    state = {
        name: "",
        email: "",
        password: "",
        password2: "",
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
        this.props.registerUser(this.state);
    };

    render() {
        const {name, email, password, password2} = this.state;
        const {errors} = this.props;
        return <div className="row">
            <form className="card p-3 mx-auto col-md-6" onSubmit={this.handleSubmit}>
                <h1 className="text-center">Регистрация</h1>
                <div className="form-group">
                    <label htmlFor="name">Имя</label>
                    <input className="form-control" type="text" name="name" id="name" value={name}
                           onChange={this.handleChange}/>
                    {
                        errors.name && <div className="text-danger">{errors.name}</div>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" type="email" name="email" id="email" value={email}
                           onChange={this.handleChange}/>
                    {
                        errors.email && <div className="text-danger">{errors.email}</div>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="password">Пароль</label>
                    <input className="form-control" type="password" name="password" id="password" value={password}
                           onChange={this.handleChange}/>
                    {
                        errors.password && <div className="text-danger">{errors.password}</div>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Повторите пароль</label>
                    <input className="form-control" type="password2" name="password2" id="password2" value={password2}
                           onChange={this.handleChange}/>
                    {
                        errors.password2 && <div className="text-danger">{errors.password2}</div>
                    }
                </div>
                <button type="submit" className="btn btn-dark btn-lg">Зарегистрироваться</button>
            </form>
        </div>;
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {registerUser, clearErrors})(Register);
