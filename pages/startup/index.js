import Link from "next/link";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/ServicePage.module.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 100}`;
};
const Startup = (props) => {
  return (
    <section>
      <Head>
        <title>NettyFish - Start-ups Solutions</title>
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
              <p className={styles.title}>Start-ups Solutions</p>
              <p className={styles.breadcrumb}>
              <a className={styles.home}  href="/">Home</a>{" "}
                &gt;&gt; Start-ups Solutions
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
              src="/assets/startup.png"
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
            <h1 className={styles.heading}>Start-ups Solutions</h1>
            <p>
              Simply establish an AI chatbot to your customer’s wish list such
              as FB Messenger, WhatsApp, Website or live chat.
            </p>
            <p>
              By setting up WhatsApp chatbot you can minimize the work load on
              your customer support team through automating monotonous work.
            </p>
            <p>
              Let your chatbot do the reappearing jobs so that your team members
              can focus on chats that really means so much.
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
                Start-Up Solutions AI - Auto whatsapp Chatbot
              </h1>

              <p className={styles.pera}>Start-up WhatsApp Chatbot</p>
            </Col>
          </Row>

          <div>
            <div>
              <div className={styles.border}>
                <Row>
                  <Col md={4} style={{ alignSelf: "center" }}>
                    <Image
                      loader={myLoader}
                      src="/assets/1652528287_fkld service.gif"
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
                      Simply establish an AI chatbot to your customer’s wish
                      list such as FB Messenger, WhatsApp, Website or live chat.
                    </p>
                    <br />
                    <p>
                      By setting up WhatsApp chatbot you can minimize the work
                      load on your customer support team through automating
                      monotonous work.
                    </p>
                    <p>
                      Let your chatbot do the reappearing jobs so that your team
                      members can focus on chats that really means so much.
                    </p>
                    <br />
                    <p className={styles.sub_content}>
                      Following are features that start ups provides:{" "}
                    </p>

                    <ol className={styles.ol}>
                      <li> Profile</li>
                      <li> Products and Services</li>
                      <li>24/7 Availability</li>
                      <li>Personalized interactions via chat or voice</li>
                      <li>Availability of channels as per visitors</li>
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

export default Startup;
