import React from "react";
import jokerOP from "../../assets/jokerVID/JOKER2TRAILER.mp4";
import ReactPlayer from "react-player";
import Footer from "../footer";

import "../../Style/landingpage.css";
import "../../Style/footer.css";

function JokerPage() {
  return (
    <div className="mydandadanBG">
      <ReactPlayer
        light={false}
        controls={true}
        url={jokerOP}
        height="80%"
        width="100%"
      />
      <div className="dpwvName text-white">JOKER: FOLIE A DEUX</div>
      <Footer />
    </div>
  );
}

export default JokerPage;