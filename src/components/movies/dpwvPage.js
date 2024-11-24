import React from "react";
import dpwvOP from "../../assets/dpwvVID/dpwv.mp4";
import ReactPlayer from "react-player";
import Footer from "../footer";

import "../../Style/landingpage.css";
import "../../Style/footer.css";

function DPWVPage() {
  return (
    <div className="mydandadanBG">
      <ReactPlayer
        light={false}
        controls={true}
        url={dpwvOP}
        height="80%"
        width="100%"
      />
      <div className="dpwvName text-white">DEADPOOL & Wolverine</div>
      <Footer />
    </div>
  );
}

export default DPWVPage;
