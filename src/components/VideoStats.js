import React, { useState } from "react";

function VideoStats({ video, handlerFunctions }) {
    
    const { title, views, createdAt, upvotes, downvotes } = video
    const { handleUpvote, handleDownvote, handleDisplayComments } = handlerFunctions
    const [ isHidden, setIsHidden ] = useState('')

    const submitUpvote = () => {
        handleUpvote()
    }

    const submitDownvote = () => {
        handleDownvote()
    }
    
    const displayComments = () => {
        handleDisplayComments()
        setIsHidden(!isHidden)
    }

    return(
        <div className={"stats-wrapper"}>
            <h1>{title}</h1>
            <h4>{views} views  |  Uploaded {createdAt}</h4>
            <div>
                <button onClick={submitUpvote}>{upvotes} 👍</button>
                <button onClick={submitDownvote}>{downvotes} 👎</button>
                <button onClick={displayComments}>{isHidden ? "Hide" : "Show"} Comments</button>
            </div>
        </div>
    )
}

export default VideoStats