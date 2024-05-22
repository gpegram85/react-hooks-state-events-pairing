import React, { useState } from "react";
import video from "../data/video.js";
import VideoContainer from "./VideoContainer.js";


function App() {

  return (
    <div className="App">
      <VideoContainer video={video} />
    </div>
  );
}

export default App;
