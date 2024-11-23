import { Link } from "react-router-dom";
import { Card, Image } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

/* ASSETS */
import DandadanImg from "../assets/Image/Anime/Dandadan.png";
import BluelockImg from "../assets/Image/Anime/blue lock.jpg";
import AlienImg from "../assets/Image/Movies/Alien.png";
import DPWVImg from "../assets/Image/Movies/dpwv.png";
import JokerImg from "../assets/Image/Movies/JOKER FOLIE À DEUX.jpg";
import Venom3Img from "../assets/Image/Movies/Venom 3 Poster.jpg";

function TrendingSection() {
  const [show, setShow] = useState(null);

  const handleClose = () => setShow(null);
  const handleShow = (id) => setShow(id);

  return (
    <div>
      <Container>
        <h1
          className="text-center"
          style={{ color: "rgb(14, 13, 13)" }}
          id="trendingsection"
        >
          trending now
        </h1>
        <h1 className="text-white text-center">TRENDING NOW</h1>
        <Row>
          {/* CARD 1 */}
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImg bg-dark">
              <Image
                src={DandadanImg}
                alt="Anime Dandadan"
                className="moviePoster"
              />
              <div className="movieName">DANDADAN</div>
              <Button
                variant="outline-light"
                className="mt-1"
                onClick={() => handleShow(1)}
              >
                Sinopsis
              </Button>
              <Offcanvas show={show === 1} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>DANDADAN</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body variant="dark">
                  Karya Yukinobu Tatsu yang menggabungkan unsur horor, komedi,
                  dan aksi. Cerita ini mengikuti dua remaja, Momo Ayase dan Ken
                  Takakura, yang memiliki minat pada hal-hal supernatural. Momo
                  percaya pada hantu, sementara Ken percaya pada alien. Mereka
                  berdua akhirnya terlibat dalam petualangan aneh dan berbahaya
                  setelah mereka menemukan bahwa baik hantu maupun alien
                  ternyata benar-benar ada. Anime ini menawarkan aksi seru
                  dengan humor unik dan sering mengeksplorasi tema persahabatan
                  di tengah konflik supernatural.
                  <br />
                  <br />
                  <br />
                  Rating 8.6/10 ⭐
                </Offcanvas.Body>
              </Offcanvas>
              <Button
                as={Link}
                to="/dandadan"
                variant="danger"
                className="mt-1"
              >
                Tonton Sekarang
              </Button>
            </Card>
          </Col>
          {/* CARD 1 */}

          {/* CARD 2 */}
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImg bg-dark">
              <Image
                src={DPWVImg}
                alt="Movies Deadpool & Wolverine"
                className="moviePoster"
              />
              <div className="movieName">Deadpool & Wolverine</div>
              <Button
                variant="outline-light"
                className="mt-1"
                onClick={() => handleShow(2)}
              >
                Sinopsis
              </Button>
              <Offcanvas show={show === 2} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Deadpool & Wolverine</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Kolaborasi baru dalam Marvel Cinematic Universe (MCU),
                  menampilkan Deadpool (Ryan Reynolds) dan Wolverine (Hugh
                  Jackman) dalam perjalanan penuh aksi. Setelah mencoba hidup
                  normal, Wade Wilson (Deadpool) harus kembali beraksi ketika
                  sebuah ancaman besar mengancam dunia, dan ia membutuhkan
                  bantuan Wolverine yang agak enggan. Film ini memadukan humor
                  khas Deadpool dengan aksi intens yang dibawa oleh Wolverine,
                  memberikan petualangan seru yang dibalut aksi komedi yang
                  unik. Film ini disutradarai oleh Shawn Levy dengan naskah yang
                  juga ditulis oleh Reynolds, Levy, dan tim penulis
                  berpengalaman lainnya seperti Rhett Reese dan Paul Wernick.
                  Para kreator juga berkomitmen pada kualitas dengan
                  mengutamakan pengembangan cerita yang menyenangkan bagi
                  penggemar dan memastikan humor serta adegan laga dieksekusi
                  secara maksimal.
                  <br />
                  <br />
                  <br />
                  Rating 7.7/10 ⭐
                </Offcanvas.Body>
              </Offcanvas>
              <Button as={Link} to="/dpwv" variant="danger" className="mt-1">
                Tonton Sekarang
              </Button>
            </Card>
          </Col>
          {/* CARD 2 */}

          {/* CARD 3 */}
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImg bg-dark">
              <Image
                src={Venom3Img}
                alt="Movies Venom3"
                className="moviePoster"
              />
              <div className="movieName">VENOM: THE LAST DANCE</div>
              <Button
                variant="outline-light"
                className="mt-1"
                onClick={() => handleShow(3)}
              >
                Sinopsis
              </Button>
              <Offcanvas show={show === 3} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>VENOM: THE LAST DANCE</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Diciptakan oleh Marvel, Venom: The Last Dance merupakan film
                  terakhir dalam trilogi Venom yang disutradarai oleh Kelly
                  Marcel. Dalam kisah ini, Eddie Brock (Tom Hardy) dan Venom
                  hidup dalam pelarian, diburu oleh kekuatan dari dua dunia yang
                  berusaha menangkap mereka. Tekanan ini memaksa keduanya
                  menghadapi keputusan yang menghancurkan, mengarahkan pada
                  "tarian terakhir" antara mereka yang penuh emosi dan konflik.
                  Dibintangi oleh Tom Hardy, Chiwetel Ejiofor, dan Juno Temple,
                  film ini membawa penutup dramatis pada perjalanan karakter
                  Venom.
                  <br />
                  <br />
                  <br />
                  Rating 8.5/10 ⭐
                </Offcanvas.Body>
              </Offcanvas>
              <Button as={Link} to="/venom" variant="danger" className="mt-1">
                Tonton Sekarang
              </Button>
            </Card>
          </Col>
          {/* CARD 3 */}

          {/* CARD 4 */}
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImg bg-dark">
              <Image
                src={JokerImg}
                alt="Movies Joker2"
                className="moviePoster"
              />
              <div className="movieName">JOKER: FOLIE A DEUX</div>
              <Button
                variant="outline-light"
                className="mt-1"
                onClick={() => handleShow(4)}
              >
                Sinopsis
              </Button>
              <Offcanvas show={show === 4} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>JOKER: FOLIE A DEUX</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Karya Todd Phillips, mengisahkan kelanjutan perjalanan Arthur
                  Fleck (Joaquin Phoenix) yang menjalin hubungan dengan Harleen
                  Quinzel (Lady Gaga), seorang psikiater di Arkham Asylum.
                  Harleen, terpesona oleh Arthur, membantunya merencanakan
                  pelarian berbahaya sambil bersama-sama mendalami kegilaan
                  mereka. Film ini menggambarkan dinamika hubungan rumit mereka
                  dengan unsur musikal yang memperdalam sisi emosional dan
                  psikologis karakter Arthur yang semakin gelap.
                  <br />
                  <br />
                  <br />
                  Rating 5.2/10 ⭐
                </Offcanvas.Body>
              </Offcanvas>
              <Button as={Link} to="/joker" variant="danger" className="mt-1">
                Tonton Sekarang
              </Button>
            </Card>
          </Col>
          {/* CARD 4 */}

          {/* CARD 5 */}
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImg bg-dark">
              <Image
                src={AlienImg}
                alt="Movies Alien:Romulus"
                className="moviePoster"
              />
              <div className="movieName">Alien: Romulus</div>
              <Button
                variant="outline-light"
                className="mt-1"
                onClick={() => handleShow(5)}
              >
                Sinopsis
              </Button>
              <Offcanvas show={show === 5} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Alien: Romulus</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Film dalam seri Alien yang disutradarai oleh Fede Álvarez.
                  Film ini menceritakan sekelompok anak muda yang terjebak di
                  planet asing dan harus menghadapi ancaman dari Xenomorph yang
                  mematikan. Ceritanya menggabungkan ketegangan khas dari seri
                  Alien dengan elemen survival horror, menghadirkan perjuangan
                  hidup di tengah ancaman alien yang tak kenal ampun. Film ini
                  merupakan kolaborasi dengan 20th Century Studios dan
                  direncanakan rilis pada 16 Agustus 2024
                  <br />
                  <br />
                  <br />
                  Rating 7.2/10 ⭐
                </Offcanvas.Body>
              </Offcanvas>
              <Button as={Link} to="/alien" variant="danger" className="mt-1">
                Tonton Sekarang
              </Button>
            </Card>
          </Col>
          {/* CARD 5 */}

          {/* CARD 6 */}
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImg bg-dark">
              <Image
                src={BluelockImg}
                alt="Anime Blue Lock"
                className="moviePoster"
              />
              <div className="movieName">Blue Lock Season 2</div>
              <Button
                variant="outline-light"
                className="mt-1"
                onClick={() => handleShow(6)}
              >
                Sinopsis
              </Button>
              <Offcanvas show={show === 6} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>BLUE LOCK Season 2</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Dibuat oleh Muneyuki Kaneshiro (penulis) dan Yusuke Nomura
                  (ilustrator), Blue Lock musim kedua berjudul Blue Lock vs.
                  Japan U-20 melanjutkan kisah kompetisi sengit Yoichi Isagi dan
                  rekan-rekannya melawan tim nasional Jepang U-20. Musim ini
                  berfokus pada upaya mereka mempertahankan program Blue Lock
                  sambil menghadapi pemain profesional dengan tantangan baru
                  yang semakin intens.
                  <br />
                  <br />
                  <br />
                  Rating 8.2/10 ⭐
                </Offcanvas.Body>
              </Offcanvas>
              <Button as={Link} to="/bluelock" variant="danger" className="mt-1">
                Tonton Sekarang
              </Button>
            </Card>
          </Col>
          {/* CARD 6 */}
        </Row>
      </Container>
    </div>
  );
}

export default TrendingSection;
