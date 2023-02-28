import Link from "next/link";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/ServicePage.module.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 100}`;
};
const RealEstate = (props) => {
  return (
    <section>
      <Head>
        <title>NettyFish - Real Estate Solutions</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <div>
        <div className={styles.banner}>
          {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <Row>
            <Col md={7} className="offset-2">
              <p className={styles.title}>Real Estate Solutions</p>
              <p className={styles.breadcrumb}>
              <a className={styles.home}  href="/">Home</a>{" "}
                &gt;&gt; Real Estate Solutions
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <Container>
        {/* <<<<<<<<<<<<<<<<<<<<< Second Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <Row style={{ borderBottom: "2px solid #97949436" }}>
          <Col md={6} style={{ alignSelf: "center" }}>
            <Image
              loader={myLoader}
              src="/assets/realestate.png"
              alt="Picture of the author"
              height={300}
              width={500}
              quality={100}
              priority
              layout="responsive"
            />
          </Col>
          <Col
            md={6}
            className={styles.content}
            style={{ paddingBottom: "30px" }}
          >
            <div className={styles.mt_150}>
              <Image
                loader={myLoader}
                src="assets/Real Estate1.png"
                alt="Picture of the author"
                width={380}
                height={300}
                priority
              />
            </div>
            <h1 className={styles.heading}>
              Whatsapp bot Assistant for Realestate
            </h1>
            <p>
              The bots are built on the basis of artificial intelligence that
              are used in connecting with the potential users through the
              multiple messaging apps. .
            </p>
            <br />
            <p>
              Our aim is to convert the prospect clients through conversation
              and transforming them to existing customers.
            </p>{" "}
            <br />{" "}
            <p>
              It connects the interaction between the agent and the client to
              assemble in place for the home tours. With the chatbot technology
              in place, the agent meets the clients during the home tour only
              and aids the clients in making the end decision, by meeting the
              owner of the property
            </p>{" "}
          </Col>
        </Row>
      </Container>
      {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div>
        <Container>
          <Row>
            <Col md={12}>
              <h1 className={styles.heading}>
                Real Estate Solutions AI - Auto WhatsApp Chatbot
              </h1>

              <p className={styles.pera}>Real Estate WhatsApp Chatbot</p>
            </Col>
          </Row>

          <div>
            <div>
              <div className={styles.border}>
                <Row>
                  <Col md={4} style={{ alignSelf: "center" }}>
                    <Image
                      loader={myLoader}
                      src="/assets/1652443041_Real.gif"
                      alt="Picture of the author"
                      width={300}
                      height={550}
                      quality={100}
                      priority
                      layout="responsive"
                    />
                  </Col>
                  <Col md={8}>
                    {/* <h2 className={styles.card_heading}>Benefits of IVR</h2> */}
                    <p>
                      Real Estate Chatbot automates the activities of real
                      estate agency and their clients that saves the manual
                      intervention. The Real Estate virtual assistant uses
                      Artificial Intelligence specially designed to do the role
                      of various sales of plots/flats/villa/house that is
                      provided by builders with all relevant information.
                    </p>
                    <br />
                    <p>
                      Bot services are being very convenient with multiple
                      services that allows the customer and the service provider
                      to choose services as per their wish. They also use this
                      platform to give all real estate related services.
                    </p>
                    <br />
                    <p className={styles.sub_content}>
                      Real Estate assistance is available 24x7 and it handles:{" "}
                    </p>
                    <ol className={styles.ol}>
                      <li> Schedule property viewings</li>
                      <li> Search from listing</li>
                      <li>Multi-channel support</li>
                      <li>Sale / rent of properties</li>
                      <li>Customer feedback</li>
                    </ol>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Container>
        <a href="https://app.wacto.in/admin/login" target="_blank" className="float1">
                                            <Image
                                            className="my-float1"
                                            
                                                src="/assets/wacto.png"
                                                alt="Picture of the author"
                                                width={60}
                                                height={60}
                                            />
                                            </a>


                
               <FloatingWhatsApp
                 phoneNumber=" 8608666111"
                 accountName="Nettyfish"
                 allowEsc
                 allowClickAway
                 notification
                 notificationSound
                 avatar="./assets/nettyfish.png"

      />
      <div class="sticky-icon">
   <a href="https://www.instagram.com/nettyfishsolutions/ " className="Instagram"><i className="fab fa-instagram"></i> Instagram </a>
   <a href="https://www.facebook.com/nettyfishsolutions" className="Facebook"><i className="fab fa-facebook-f"> </i> Facebook </a>
   <a href="https://twitter.com/Nettyfish_offic" className="Twitter"><i className="fab fa-twitter"> </i> Twitter </a>   
</div>
      </div>
    </section>
  );
};

export default RealEstate;
