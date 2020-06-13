import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {editPost, getPost} from "store/actions/posts";
import {Spinner} from "components/Spinner/Spinner";
import WithAuth from "hocs/WithAuth/WithAuth";

export class EditPost extends PureComponent {
    constructor(props) {
        super(props);
        this.titleInput = React.createRef();
        this.textarea = React.createRef();
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getPost(id);
    }

    handleSubmit = e => {
        e.preventDefault();
        const id = this.props.match.params.id;

        this.props.editPost(id, {
            title: this.titleInput.current.value,
            text: this.textarea.current.value,
        }, this.props.history);
    };

    render() {
        const {post} = this.props;

        return <>{
            !post ?
                <Spinner/> :
                <div className="row">
                    <form className="card p-3 mx-auto col-md-12" onSubmit={this.handleSubmit}>
                        <h1 className="text-center">Редактирование статьи</h1>
                        <div className="form-group">
                            <label htmlFor="title">Заголовок</label>
                            <input ref={this.titleInput} className="form-control" type="text" name="title" id="title"
                                   defaultValue={post.title}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="text">Содержание</label>
                            <textarea ref={this.textarea} className="form-control" name="text" id="text" rows="6"
                                      defaultValue={post.text}
                            />
                        </div>
                        <button type="submit" className="btn btn-dark btn-lg">Редактировать</button>
                    </form>
                </div>
        }
        </>;
    }
}

const mapStateToProps = state => ({
    post: state.posts.item,
});

export default WithAuth(connect(mapStateToProps, {editPost, getPost})(EditPost));
