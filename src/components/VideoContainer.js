import React, { useState } from "react";
import VideoStats from "./VideoStats";
import VideoPlayer from "./VideoPlayer";
import VideoComments from "./VideoComments"

function VideoContainer({ video }) {

    const defaultUpvotes = video.upvotes
    const defaultDownvotes = video.downvotes
    const [upvotes, setUpvotes] = useState(defaultUpvotes)
    const [downvotes, setDownvotes] = useState(defaultDownvotes)
    const [ isDisplayed, setIsDisplayed ] = useState('')

    const handlerFunctions = {
        handleUpvote: () => {
            setUpvotes(upvotes + 1)
            video.upvotes++
        },
        handleDownvote: () => {
            setDownvotes(downvotes + 1)
            video.downvotes++
        },
        handleDisplayComments: () => {
            setIsDisplayed(!isDisplayed)
        }
    }

    return(
        <div>
            <VideoPlayer video={video} />
            <VideoStats video={video} handlerFunctions={handlerFunctions} />
            <VideoComments video={video} isDisplayed={isDisplayed}/>
        </div>
    )
}

export default VideoContainer