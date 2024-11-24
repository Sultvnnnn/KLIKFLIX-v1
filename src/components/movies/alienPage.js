import React from "react";
import alienOP from "../../assets/alienVID/alientrailer.mp4";
import ReactPlayer from "react-player";
import Footer from "../footer";

import "../../Style/landingpage.css";
import "../../Style/footer.css";

function AlienPage() {
  return (
    <div className="mydandadanBG">
      <ReactPlayer
        light={false}
        controls={true}
        url={alienOP}
        height="80%"
        width="100%"
      />
      <div className="dpwvName text-white">ALIEN: ROMULUS</div>
      <Footer />
    </div>
  );
}

export default AlienPage;