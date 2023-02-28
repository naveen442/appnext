import Link from "next/link";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/ServicePage.module.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 100}`;
};
const Government = (props) => {
  return (
    <section>
      <Head>
        <title>NettyFish - Government</title>
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
              <p className={styles.title}>Government</p>
              <p className={styles.breadcrumb}>
              <a className={styles.home}  href="/">Home</a>{" "}
                &gt;&gt; Government
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
              src="/assets/government.png"
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
            <div className={styles.mt_150} style={{ marginTop: "70px" }}></div>
            <h1 className={styles.heading}>Government</h1>
            <p>
              Chatbots enable the public dealing with Government entities just
              some of the benefits we highlight below:
            </p>
            <p>- Paying taxes or bills</p>
            <p>
              - Getting information about various public services in detailed
              manner
            </p>
            <p>
              - Raising and tracking the status of requests 24/7 at their
              convenient, place, time and device. Thereby avoiding the time
              wastage incurred in moving around the agencies in person
            </p>

            <p>
              {" "}
              Getting online public medical services from the chatbot, which
              based on the symptoms can suggest the medicine for people. Thereby
              avoiding unnecessary doctor appointments
            </p>
            <p>
              - Raise any complaints regarding the lapses in the civic services,
              like damaged roads
            </p>
          </Col>
        </Row>
      </Container>
      {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div>
        <Container>
          <Row>
            <Col md={12}>
              <h1 className={styles.heading}>
                Government AI - Auto WhatsApp Chatbot
              </h1>

              <p className={styles.pera}>WhatsApp Chatbot</p>
            </Col>
          </Row>

          <div>
            <div>
              <div className={styles.border}>
                <Row>
                  <Col md={4} style={{ alignSelf: "center" }}>
                    <Image
                      loader={myLoader}
                      src="/assets/1652524376_tn dep.gif"
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
                      Government sectors have also initiated executing in order
                      to simplify the engagement between Government and the
                      people.
                    </p>
                    <br />
                    <p>
                      With inclusive of bots, the state and local bodies are
                      effectively working for 24*7, thereby allowing simple
                      access to the services and clarifying multiple service
                      request concurrently.
                    </p>
                    <p>
                      With the advantage of latest technology and constructing
                      AI enabled government is one the most importance to the
                      government bodies as it allow them to finish their duties
                      at remarkably fall in costs.
                    </p>
                    <br />
                    <p className={styles.sub_content}>
                      Government assistance is available 24x7 and it handles:{" "}
                    </p>

                    <ol className={styles.ol}>
                      <li> Respond to FAQs</li>
                      <li> Information about citizen right</li>
                      <li>Taxation and billing sectors</li>
                      <li>Swift access to public data</li>
                      <li>Notify about policy changes</li>
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

export default Government;
