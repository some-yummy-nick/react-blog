import React, {PureComponent} from "react";
import {connect} from "react-redux";
import Helmet from "react-helmet";
import {addPost} from "store/actions/posts";
import WithAuth from "hocs/WithAuth/WithAuth";

export class AddPost extends PureComponent {
    state = {
        title: "",
        text: "",
    };

    handleChange = e => this.setState({[e.target.name]: e.target.value});

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title && this.state.text) {
            this.props.addPost(this.state, this.props.history);
        }
    };

    render() {
        const {title, text} = this.state;

        return <>
            <Helmet>
                <title>React блог | Добавить статью</title>
            </Helmet>
            <div className="row">
                <form className="card p-3 mx-auto col-md-12" onSubmit={this.handleSubmit}>
                    <h1 className="text-center">Добавление статьи</h1>
                    <div className="form-group">
                        <label htmlFor="title">Заголовок</label>
                        <input className="form-control" type="text" name="title" id="title" value={title}
                               onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="text">Содержание</label>
                        <textarea className="form-control" name="text" id="text" rows="6" value={text}
                                  onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-dark btn-lg">Опубликовать</button>
                </form>
            </div>
        </>;
    }
}

export default WithAuth(connect(null, {addPost})(AddPost));
