import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getPost, deletePost} from "store/actions/posts";
import {Spinner} from "components/Spinner/Spinner";
import AddComment from "components/AddComment/AddComment";
import Comments from "components/Comments/Comments";

export class PostPage extends PureComponent {

    handleDelete = () => {
        const id = this.props.match.params.id;
        this.props.deletePost(id, this.props.history);
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getPost(id);
    }

    render() {
        const {post, user} = this.props;
        return <>
            {!post ?
                <Spinner/> :
                <>
                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
                        <div className="mr-sm-2 mr-auto">
                            <h1>{post.title}</h1>
                        </div>
                        <div className="ml-auto">
                            {user && user.id === post.author._id
                                ? <>
                                    <button onClick={this.handleDelete} className="btn btn-danger mr-2">Удалить</button>
                                    <Link to={`/edit/${post._id}`} className="btn btn-secondary">Редактировать</Link>
                                </> :
                                null
                            }
                        </div>
                    </div>
                    <p className="text-muted">{post.author.name}</p>
                    <p>{post.text}</p>
                    <AddComment/>
                    <Comments comments={post.comments}/>
                </>
            }
        </>;
    }
}

const mapStateToProps = state => ({
    user: state.auth,
    post: state.posts.item,
});

export default connect(mapStateToProps, {getPost, deletePost})(PostPage);
