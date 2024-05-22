import React from "react";

function Comment(props) {

    const { user, comment } = props

    return(
        <div>
            <h3>{user}</h3>
            <p>{comment}</p>
        </div>
    )
}

export default Comment
