import React from "react";
import Comment from "./Comment";

function VideoComments({ isDisplayed, video }) {

    const comments = video.comments

    return(
        <div id="comments-container" className={isDisplayed ? "" : "hidden"}>
            <p>Comments Placeholder</p>
            {comments.map((comment) => (
                <Comment key={comment.id} user={comment.user} comment={comment.comment} />
            ))}
        </div>
    )
}

export default VideoComments