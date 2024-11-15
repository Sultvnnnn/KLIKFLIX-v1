import React from "react";
import dandadanOP from "../../assets/dandadanVID/dandadan.mp4";
import ReactPlayer from "react-player";

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

export default DandadanPage;
