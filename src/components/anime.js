import { Card, Image } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

/* ASSETS */
import DandadanImg from "../assets/Image/Anime/Dandadan.png";
import ChainsawmanImg from "../assets/Image/Anime/chainsawman.png";
import KNYImg from "../assets/Image/Anime/kimetsu no yaiba.jpg";
import MashleImg from "../assets/Image/Anime/mashle.png";
import UzumakiImg from "../assets/Image/Anime/uzumaki.png";
import OPMImg from "../assets/Image/Anime/opm.png";

function AnimeSection() {
  const [show, setShow] = useState(null);

  const handleClose = () => setShow(null);
  const handleShow = (id) => setShow(id);

  return (
    <div>
      <Container>
        <h1
          className="text-center"
          style={{ color: "rgb(14, 13, 13)" }}
          id="wibusection"
        >
          wibu section
        </h1>
        <h1 className="text-white text-center">WIBU SECTION</h1>
        <Row>
          {/* CARD 1 */}
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImg bg-dark">
              <Image
                src={UzumakiImg}
                alt="Anime Uzumaki"
                className="moviePoster"
              />
              <div className="movieName">UZUMAKI: SPIRAL INTO HORROR</div>
              <Button
                variant="outline-light"
                className="mt-1"
                onClick={() => handleShow(1)}
              >
                Sinopsis
              </Button>
              <Offcanvas show={show === 1} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>UZUMAKI: SPIRAL INTO HORROR</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body variant="dark">
                  Karya horor psikologis dari Junji Ito, seorang mangaka
                  legendaris di genre horor. Berkisah tentang sebuah kota kecil
                  bernama Kurouzu-cho yang perlahan-lahan dilanda kutukan
                  mengerikan berbentuk spiral. Fenomena spiral ini mulai
                  mempengaruhi segala aspek kehidupan warga, menyebabkan
                  kejadian-kejadian aneh dan menyeramkan yang mengubah fisik dan
                  mental mereka. Protagonis, Kirie Goshima dan pacarnya, Shuichi
                  Saito, berusaha memahami dan melarikan diri dari teror spiral
                  yang kian hari semakin merasuki kota mereka. Uzumaki dikenal
                  dengan ilustrasi yang detail dan atmosfer yang menakutkan,
                  memberikan pengalaman horor yang unik.
                  <br />
                  <br />
                  <br />
                  Rating: 6.7/10 ⭐
                </Offcanvas.Body>
                <Offcanvas.Body></Offcanvas.Body>
              </Offcanvas>
              <Button variant="danger" className="mt-1">
                Tonton Sekarang
              </Button>
            </Card>
          </Col>
          {/* CARD 1 */}

          {/* CARD 2 */}
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImg bg-dark">
              <Image
                src={MashleImg}
                alt="Anime Mashle"
                className="moviePoster"
              />
              <div className="movieName">MASHLE: Magic and Muscles</div>
              <Button
                variant="outline-light"
                className="mt-1"
                onClick={() => handleShow(2)}
              >
                Sinopsis
              </Button>
              <Offcanvas show={show === 2} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>MASHLE: Magic and Muscles</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Karya Hajime Komoto yang menggabungkan elemen aksi dan komedi.
                  Cerita ini berpusat pada Mash Burnedead, seorang pemuda tanpa
                  kemampuan sihir yang tinggal di dunia di mana kekuatan sihir
                  adalah segalanya. Untuk bertahan hidup, Mash berlatih fisik
                  hingga memiliki kekuatan luar biasa yang dapat menandingi
                  sihir. Dalam usahanya untuk hidup damai, ia akhirnya masuk ke
                  akademi sihir dan harus menghadapi berbagai tantangan yang
                  menguji kekuatan ototnya melawan kekuatan sihir. Dengan humor
                  unik dan aksi yang penuh kejutan, Mashle menghadirkan
                  petualangan seru dalam dunia yang penuh keajaiban.
                  <br />
                  <br />
                  <br />
                  Rating: 7.6/10 ⭐
                </Offcanvas.Body>
              </Offcanvas>
              <Button variant="danger" className="mt-1">
                Tonton Sekarang
              </Button>
            </Card>
          </Col>
          {/* CARD 2 */}

          {/* CARD 3 */}
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImg bg-dark">
              <Image src={KNYImg} alt="Anime KNY" className="moviePoster" />
              <div className="movieName">KIMETSU NO YAIBA: INFINITY CASTLE</div>
              <Button
                variant="outline-light"
                className="mt-1"
                onClick={() => handleShow(3)}
              >
                Sinopsis
              </Button>
              <Offcanvas show={show === 3} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    KIMETSU NO YAIBA THE MOVIE:
                    <br />
                    INFINITY CASTLE
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Karya Koyoharu Gotouge, pencipta manga Demon Slayer: Kimetsu
                  no Yaiba. Film ini melanjutkan kisah perjuangan Tanjiro Kamado
                  dan teman-temannya yang tergabung dalam Pasukan Pembasmi
                  Iblis. Setelah serangkaian pertempuran, mereka kini harus
                  menghadapi musuh yang semakin kuat di Kastil Infinity, markas
                  besar para iblis. Di sana, Tanjiro bersama para
                  Hashira—pemburu iblis terkuat—menghadapi tantangan besar
                  melawan iblis-iblis dari peringkat tertinggi, sambil mencari
                  cara untuk menuntaskan dendam keluarga dan memusnahkan Raja
                  Iblis, Muzan Kibutsuji. Film ini menawarkan aksi penuh
                  intensitas dan emosi dalam pertarungan epik melawan kejahatan.
                  <br />
                  <br />
                  <br />
                  Rating: COMING SOON IN 2025
                </Offcanvas.Body>
              </Offcanvas>
              <Button variant="danger" className="mt-1">
                Tonton Sekarang
              </Button>
            </Card>
          </Col>
          {/* CARD 3 */}

          {/* CARD 4 */}
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
                onClick={() => handleShow(4)}
              >
                Sinopsis
              </Button>
              <Offcanvas show={show === 4} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>DANDADAN</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
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
                  Rating: 8.6/10 ⭐
                </Offcanvas.Body>
              </Offcanvas>
              <Button variant="danger" className="mt-1">
                Tonton Sekarang
              </Button>
            </Card>
          </Col>
          {/* CARD 4 */}

          {/* CARD 5 */}
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImg bg-dark">
              <Image
                src={ChainsawmanImg}
                alt="Anime Bluelock"
                className="moviePoster"
              />
              <div className="movieName">CHAINSAW MAN</div>
              <Button
                variant="outline-light"
                className="mt-1"
                onClick={() => handleShow(5)}
              >
                Sinopsis
              </Button>
              <Offcanvas show={show === 5} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>CHAINSAW MAN</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Denji, seorang pemuda yang berjuang hidup dalam kemiskinan dan
                  bekerja sebagai pemburu iblis untuk melunasi hutang ayahnya.
                  Suatu hari, setelah dikhianati dan dibunuh, Denji diselamatkan
                  oleh Pochita, iblis gergaji yang menjadi temannya. Mereka
                  bergabung, mengubah Denji menjadi Chainsaw Man, sosok hibrida
                  manusia-iblis yang memiliki kekuatan mengerikan. Dibuat oleh
                  Tatsuki Fujimoto, Chainsaw Man pertama kali muncul sebagai
                  manga di majalah Weekly Shonen Jump pada tahun 2018. Anime ini
                  diproduksi oleh studio MAPPA.
                  <br />
                  <br />
                  <br />
                  Rating: 8.4/10 ⭐
                </Offcanvas.Body>
              </Offcanvas>
              <Button variant="danger" className="mt-1">
                Tonton Sekarang
              </Button>
            </Card>
          </Col>
          {/* CARD 5 */}

          {/* CARD 6 */}
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImg bg-dark">
              <Image src={OPMImg} alt="Anime OPM" className="moviePoster" />
              <div className="movieName">ONE PUNCH MAN</div>
              <Button
                variant="outline-light"
                className="mt-1"
                onClick={() => handleShow(6)}
              >
                Sinopsis
              </Button>
              <Offcanvas show={show === 6} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>ONE PUNCH MAN</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Karya dari ONE, seorang mangaka yang dikenal dengan gaya humor
                  absurd dan karakter overpowered. Ceritanya mengikuti Saitama,
                  seorang pahlawan yang memiliki kekuatan luar biasa dan bisa
                  mengalahkan musuh hanya dengan satu pukulan. Namun, kekuatan
                  ini justru membuatnya bosan dan merasa hidupnya hampa karena
                  tidak ada lawan yang sepadan. Serial ini mengeksplorasi
                  perjuangan Saitama dalam mencari tantangan baru dan
                  eksistensinya di dunia yang dipenuhi pahlawan dan monster,
                  dibumbui dengan humor unik dan aksi epik.
                  <br />
                  <br />
                  <br />
                  Rating: 8.7/10 ⭐
                </Offcanvas.Body>
              </Offcanvas>
              <Button variant="danger" className="mt-1">
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

export default AnimeSection;
