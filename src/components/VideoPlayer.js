import React from "react";

function VideoPlayer({ video }) {
    
    const { title, embedUrl } = video
    
    return(
        <div>
            <iframe
                width="919"
                height="525"
                src={embedUrl}
                frameBorder="0"
                allowFullScreen
                title={title}
      />
        </div>
    )
}

export default VideoPlayer
