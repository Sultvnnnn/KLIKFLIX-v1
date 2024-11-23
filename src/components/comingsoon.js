import { Card, Image } from "react-bootstrap";
import MinecraftImg from "../assets/Image/Coming soon/minecraft.png";
import Moana2Img from "../assets/Image/Coming soon/moana2.png";
import CaptainImg from "../assets/Image/Coming soon/captainamerica.png";
import ImpossibleImg from "../assets/Image/Coming soon/impossible.png";
import LOTRImg from "../assets/Image/Coming soon/LOTR.png";
import MoanaLAImg from "../assets/Image/Coming soon/moanaLA.png";
import MufasaImg from "../assets/Image/Coming soon/mufasa.png";
import HowtoDragonImg from "../assets/Image/Coming soon/howtodragon.png";

function Comingsoon() {
  return (
    <div>
      <h1 className="text-center" style={{ color: "rgb(14, 13, 13)" }} id="comingsoon">
        COMING SOON
      </h1>
      <h1 className="text-white text-center">
        COMING SOON
      </h1>
      <div className="soon-container">
        <div className="soon" id="soon">
          <Card className="card-wrap text-white soonImg bg-dark">
            <Image src={LOTRImg} alt="Anime Uzumaki" className="moviePoster" />
          </Card>
          <Card className="card-wrap text-white soonImg bg-dark">
            <Image
              src={Moana2Img}
              alt="Anime Uzumaki"
              className="moviePoster"
            />
          </Card>
          <Card className="card-wrap text-white soonImg bg-dark">
            <Image
              src={MufasaImg}
              alt="Anime Uzumaki"
              className="moviePoster"
            />
          </Card>
          <Card className="card-wrap text-white soonImg bg-dark">
            <Image
              src={MoanaLAImg}
              alt="Anime Uzumaki"
              className="moviePoster"
            />
          </Card>
          <Card className="card-wrap text-white soonImg bg-dark">
            <Image
              src={ImpossibleImg}
              alt="Anime Uzumaki"
              className="moviePoster"
            />
          </Card>
          <Card className="card-wrap text-white soonImg bg-dark">
            <Image
              src={HowtoDragonImg}
              alt="How to train you dragon"
              className="moviePoster"
            />
          </Card>
          <Card className="card-wrap text-white soonImg bg-dark">
            <Image
              src={MinecraftImg}
              alt="Anime Uzumaki"
              className="moviePoster"
            />
          </Card>
          <Card className="card-wrap text-white soonImg bg-dark">
            <Image
              src={CaptainImg}
              alt="Anime Uzumaki"
              className="moviePoster"
            />
          </Card>
        </div>
        <div className="soon" id="soon">
          <Card className="card-wrap text-white soonImg bg-dark">
            <Image src={LOTRImg} alt="Anime Uzumaki" className="moviePoster" />
          </Card>
          <Card className="card-wrap text-white soonImg bg-dark">
            <Image
              src={Moana2Img}
              alt="Anime Uzumaki"
              className="moviePoster"
            />
          </Card>
          <Card className="card-wrap text-white soonImg bg-dark">
            <Image
              src={MufasaImg}
              alt="Anime Uzumaki"
              className="moviePoster"
            />
          </Card>
          <Card className="card-wrap text-white soonImg bg-dark">
            <Image
              src={MoanaLAImg}
              alt="Anime Uzumaki"
              className="moviePoster"
            />
          </Card>
          <Card className="card-wrap text-white soonImg bg-dark">
            <Image
              src={ImpossibleImg}
              alt="Anime Uzumaki"
              className="moviePoster"
            />
          </Card>
          <Card className="card-wrap text-white soonImg bg-dark">
            <Image
              src={HowtoDragonImg}
              alt="How to train you dragon"
              className="moviePoster"
            />
          </Card>
          <Card className="card-wrap text-white soonImg bg-dark">
            <Image
              src={MinecraftImg}
              alt="Anime Uzumaki"
              className="moviePoster"
            />
          </Card>
          <Card className="card-wrap text-white soonImg bg-dark">
            <Image
              src={CaptainImg}
              alt="CAPTAIN"
              className="moviePoster"
            />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Comingsoon;
