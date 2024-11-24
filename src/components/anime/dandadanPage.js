import React from "react";
import dandadanOP from "../../assets/dandadanVID/dandadan.mp4";
import ReactPlayer from "react-player";
import Footer from "../footer";

import "../../Style/landingpage.css";
import "../../Style/footer.css";

function DandadanPage() {
  return (
    <div className="mydandadanBG">
      <ReactPlayer
        light={false}
        controls={true}
        url={dandadanOP}
        height="80%"
        width="100%"
      />
      <div className="dandadanName text-white">DANDADAN</div>
      <Footer />
    </div>
  );
}

export default DandadanPage;
