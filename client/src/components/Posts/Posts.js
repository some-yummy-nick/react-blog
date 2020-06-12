import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {getPosts} from "store/actions/posts";
import Post from "components/Post/Post";
import {Spinner} from "components/Spinner/Spinner";

export class Posts extends PureComponent {
    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const {posts} = this.props;
        return <>
            <h1 className="text-center">Посты</h1>
            {!posts ?
                <Spinner/> :
                <div className="mb-n2">
                    { posts.map(post => <Post key={post._id} post={post}/>)}
                </div>
            }
        </>;
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
});

export default connect(mapStateToProps, {getPosts})(Posts);
