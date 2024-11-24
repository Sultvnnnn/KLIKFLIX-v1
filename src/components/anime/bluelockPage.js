import React from "react";
import bluelockOP from "../../assets/bluelockVID/BLUELOCKTRAILER.mp4";
import ReactPlayer from "react-player";
import Footer from "../footer";

import "../../Style/landingpage.css";
import "../../Style/footer.css";

function BluelockPage() {
  return (
    <div className="mydandadanBG">
      <ReactPlayer
        light={false}
        controls={true}
        url={bluelockOP}
        height="80%"
        width="100%"
      />
      <div className="dandadanName text-white">BLUE LOCK: SEASON 2</div>
      <Footer />
    </div>
  );
}

export default BluelockPage;
