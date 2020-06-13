import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {deleteComment} from "store/actions/posts";

export class Comment extends PureComponent {
    handleDelete = () => {
        const id = this.props.comment._id;
        this.props.deleteComment(id);
    };

    render() {
        const {comment, auth} = this.props;
        return <div className="card mb-3">
            <div className="card-body">
                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
                    <div className="mr-sm-2 mr-auto">
                        <h4>{comment.author.name}</h4>
                    </div>
                    {
                        auth && auth.id === comment.author._id &&
                        <div className="ml-auto">
                            <button type="button" className="btn btn-danger" onClick={this.handleDelete}>Удалить
                            </button>
                        </div>
                    }
                </div>
                <p>{comment.text}</p>
            </div>
        </div>;
    }
}


const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {deleteComment})(Comment);
