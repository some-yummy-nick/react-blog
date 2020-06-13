import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

export const Header = ({auth}) =>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3">
        <div className="container">
            <Link to="/" className="navbar-brand">React blog</Link>
            <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="#navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/add" className="nav-link">Добавить статью</Link>
                    </li>
                </ul>
                {
                    auth
                        ?
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="#" className="nav-link">{auth.name}</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/logout" className="nav-link">Выход</Link>
                            </li>
                        </ul>
                        :
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Вход</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">Регистрация</Link>
                            </li>
                        </ul>
                }
            </div>
        </div>
    </nav>;

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Header);
