import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";
import {addComment} from "store/actions/posts";

export class AddComment extends PureComponent {
    state = {
        text: "",
    };

    handleChange = e => this.setState({[e.target.name]: e.target.value});

    handleSubmit = e => {
        e.preventDefault();
        const id = this.props.match.params.id;
        this.props.addComment(id, this.state);
        this.setState({text: ""})
    };

    render() {
        const {text} = this.state;
        const {auth} = this.props;
        return <>
            {auth ?
                <form className="mb-3" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="text">Добавить комментарий</label>
                        <textarea className="form-control" name="text" id="text" rows="4" value={text}
                                  onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-dark btn-lg">Отправить</button>
                </form>
                :
                <div className="bg-light p-2 rounded mb-3">
                    <p>Комментировать могут только зарегистрированные пользователи.</p>
                    <div>
                        <Link to="/" className="mr-2">Войти</Link>или{" "}
                        <Link to="/register">Зарегистрироваться</Link>
                    </div>
                </div>
            }
        </>;
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
});

export default withRouter(connect(mapStateToProps, {addComment})(AddComment));
