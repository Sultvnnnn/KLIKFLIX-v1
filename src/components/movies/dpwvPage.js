import React from "react";
import dpwvOP from "../../assets/dpwvVID/dpwv.mp4";
import ReactPlayer from "react-player";

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
      <footer className="footer">
        <div className="footer-bottom">
          <h8>
            Copyright © 2024 KLIKFLIX by Kelompok 2.
            <br /> Built with Love, React, and Bootstrap.
          </h8>
        </div>
      </footer>
    </div>
  );
}

export default DPWVPage;
