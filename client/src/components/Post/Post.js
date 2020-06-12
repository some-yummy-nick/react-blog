import React from "react";
import {Link} from "react-router-dom";

const TEXT_LIMIT = 100;

const shortText = text => (text.length > TEXT_LIMIT) ? text.substr(0, TEXT_LIMIT) + "..." : text;

export const Post = ({post}) =>
    <div className="card mb-2">
        <div className="card-body">
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
                <div className="mr-sm-2">
                    <h2>{post.title}</h2>
                    <p>{shortText(post.text)}</p>
                </div>
                <Link className="btn btn-dark" to={`/post/${post._id}`}>Подробнее</Link>
            </div>

        </div>
    </div>;

export default Post;
