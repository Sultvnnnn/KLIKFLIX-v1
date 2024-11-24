import React from "react";
import venomOP from "../../assets/venomVID/VENOM3TRAILER.mp4";
import ReactPlayer from "react-player";
import Footer from "../footer";

import "../../Style/landingpage.css";
import "../../Style/footer.css";

function VenomPage() {
  return (
    <div className="mydandadanBG">
      <ReactPlayer
        light={false}
        controls={true}
        url={venomOP}
        height="80%"
        width="100%"
      />
      <div className="dpwvName text-white">VENOM: THE LAST DANCE</div>
      <Footer />
    </div>
  );
}

export default VenomPage;
