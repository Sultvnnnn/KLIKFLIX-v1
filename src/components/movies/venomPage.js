import React from "react";
import venomOP from "../../assets/venomVID/VENOM3TRAILER.mp4";
import ReactPlayer from "react-player";

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
      <footer className="footer">
        <div className="footer-bottom">
          <p>
            Copyright © 2024 KLIKFLIX by{" "}
            <a
              href="https://instagram.com/sultvnnnn"
              target="_blank"
              rel="noopener noreferrer"
            >
              @sultvnnnn
            </a>
            <br /> Built with Love, React, and Bootstrap.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default VenomPage;