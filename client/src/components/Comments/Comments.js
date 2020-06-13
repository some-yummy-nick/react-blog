import React from "react";
import Comment from "components/Comment/Comment";

export const Comments = ({comments}) => <>
    {
        !comments.length ?
            <div className="bg-light p-2 rounded mb-3">
               Список комментариев пока пуст
            </div> :
            comments.map(comment => <Comment key={comment._id} comment={comment}/>)
    }
</>;

export default Comments;
