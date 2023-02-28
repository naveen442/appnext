import Link from "next/link";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/VoiceKey.module.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
const myLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 100}`;
};
const Wacto = (props) => {
  return (
    <section>
      <Head>
        <title>WACTO -Omnichannel </title>
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
              <p className={styles.title}>Nettyfish - WACTO -Omnichannel </p>
              <p className={styles.breadcrumb}>
              <a className={styles.home}  href="/">Home</a>{" "}
                &gt;&gt; WACTO -Omnichannel
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles.backdrop_color}>
        <div className={styles.backdrop} >
      <Container>

        {/* <<<<<<<<<<<<<<<<<<<<< Second Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
       
        <Row>
          <Col md={12} className={styles.content}>
            <div className={styles.mt_150}>
              <Image
                loader={myLoader}
                src="assets/ACTO - Omnichannel.png"
                alt="Picture of the author"
                width={380}
                height={320}
                priority
              />
            </div>
            {/* <h1 className={styles.heading}>Voice Broadcast</h1> */}
            <p className={styles.backfont}>
              Procure more customers across all channels
            </p>
            <p className={styles.backfontone}>
              Integrated AI chatbot and live chat platform with No-code
            </p>

            <p>
              You can automate your business, attract customers, and retain them
              quickly and easily with zero-code chatbots.
            </p>
          </Col>
        </Row>
      </Container>
      {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div>
        <Container>
          <Row>
            <Col md={6}>
              <h1 className={styles.heading}>
                Try out our AI WhatsApp chatbot for Business!
              </h1>
              <ul className={styles.ul1}>
                <li>
                  <h6 className={styles.home}>
                    <Image
                      loader={myLoader}
                      src="./assets/list1.gif"
                      alt="Picture of the author"
                      width={30}
                      height={30}
                    />
                    AI Lead Generation{" "}
                  </h6>
                  <p>
                    Generate leads and accelerate sales by engaging customers in
                    seamless conversation across all channels.
                  </p>
                </li>

                <li>
                  <h6 className={styles.home}>
                    <Image
                      loader={myLoader}
                      src="./assets/list1.gif"
                      alt="Picture of the author"
                      width={30}
                      height={30}
                    />{" "}
                    All-time Availability 24/7
                  </h6>
                  <p>
                    Provides a better customer experience through an all-around
                    presence on Omni Channels. All queries will answer without
                    human interaction.
                  </p>
                </li>

                <li>
                  <h6 className={styles.home}>
                    <Image
                      loader={myLoader}
                      src="./assets/list1.gif"
                      alt="Picture of the author"
                      width={30}
                      height={30}
                    />{" "}
                    Everything in One Platform
                  </h6>
                  <p>
                    Keep receiving customer conversations on multiple platforms
                    but inbox all messages on one panel.
                  </p>{" "}
                </li>
                <li>
                  <h6 className={styles.home}>
                    <Image
                      loader={myLoader}
                      src="./assets/list1.gif"
                      alt="Picture of the author"
                      width={30}
                      height={30}
                    />
                    Omnichannel Presence with Automation{" "}
                  </h6>
                  <p>
                    Engage your customer with excellent auto-reply experience in
                    preferred Omni-channel platforms like WhatsApp, website,
                    social media, CRM, and more.
                  </p>
                </li>
              </ul>
              <p className={styles.notes}>
                Automation of business processes generates leads, improves
                sales, enhances customer engagement and experience.
              </p>
            </Col>

            <Col
              md={6}
              style={{
                alignSelf: "center",
                paddingBottom: "20px",
                paddingTop: "20px",
              }}
            >
              <Image
                loader={myLoader}
                src="assets/wacto_omnichannel_2.png"
                alt="Picture of the author"
                height={600}
                width={650}
                quality={100}
                priority
              />
            </Col>

            <Row>
              <Col
                md={6}
                style={{
                  alignSelf: "center",
                  paddingBottom: "20px",
                  paddingTop: "20px",
                }}
              >
                <Image
                  loader={myLoader}
                  src="assets/wacto_omnichannel_3.png"
                  alt="Picture of the author"
                  height={300}
                  width={550}
                  layout="responsive"
                  quality={100}
                  priority
                />
              </Col>
              <Col md={6}>
                <h1 className={styles.heading}>
                  Automate Engagement on WhatsApp Business API
                </h1>
                <ul className={styles.ul1}>
                  <li>
                    <Image
                      loader={myLoader}
                      src="./assets/list1.gif"
                      alt="Picture of the author"
                      width={30}
                      height={30}
                    />
                    Seamless conversation on WhatsApp
                  </li>
                  <li>
                    <Image
                      loader={myLoader}
                      src="./assets/list1.gif"
                      alt="Picture of the author"
                      width={30}
                      height={30}
                    />
                    Engage customers in their favorite application
                  </li>
                  <li>
                    <Image
                      loader={myLoader}
                      src="./assets/list1.gif"
                      alt="Picture of the author"
                      width={30}
                      height={30}
                    />
                    The possibility of conversion is high.
                  </li>
                </ul>
              </Col>
            </Row>
          </Row>

          <Row>
            <Col md={6}>
              <h1 className={styles.heading}>
                Retain your customer across all the channels
              </h1>
              <ul className={styles.ul1}>
                <li>
                  <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30}
                  />
                  Retain your customer trust in all the channels
                </li>
                <li>
                  <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30}
                  />
                  Automate conversation and conversion on Shopify and any
                  ecommerce.
                </li>
                <li>
                  <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30}
                  />
                  Integrate with your preferred CRMs and social media.
                </li>
              </ul>
            </Col>
            <Col
              md={6}
              style={{
                alignSelf: "center",
                paddingBottom: "20px",
                paddingTop: "20px",
              }}
            >
              <Image
                loader={myLoader}
                src="assets/wacto_omnichannel_4.png"
                alt="Picture of the author"
                height={400}
                width={450}
                quality={100}
                priority
              />
            </Col>
          </Row>

          <Row>
            <Col
              md={6}
              style={{
                alignSelf: "center",
                paddingBottom: "20px",
                paddingTop: "20px",
              }}
            >
              <Image
                loader={myLoader}
                src="assets/wacto_omnichannel_5.png"
                alt="Picture of the author"
                height={300}
                width={550}
                layout="responsive"
                quality={100}
                priority
              />
            </Col>
            <Col md={6}>
              <h1 className={styles.heading}>
                Simplify your Business with Wacto in 10 Minutes – No Cost Demo!
              </h1>
              <ul className={styles.ul1}>
                <li style={{ alignItems: "center" }}>
                  <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30}
                  />{" "}
                  Deploy your Chatbot with 200+ tailormade chat flows and a
                  custom chatbot with Drag and Drop user-friendly interface.
                </li>
              </ul>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <h1 className={styles.heading}>
                Enhance your brand Via Facebook and Instagram AI-chatbot
              </h1>
              <ul className={styles.ul1}>
                <li>
                  <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30}
                  />{" "}
                  Automate conversation on Instagram and Facebook
                </li>
                <li>
                  <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30}
                  />{" "}
                  Automate conversion by engaging the audience
                </li>
                <li>
                  <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30}
                  />{" "}
                  24/7 availability and auto-reply for all messages instantly
                </li>
              </ul>
            </Col>

            <Col
              md={6}
              style={{
                alignSelf: "center",
                paddingBottom: "20px",
                paddingTop: "20px",
              }}
            >
              <Image
                loader={myLoader}
                src="assets/wacto_omnichannel_6.png"
                alt="Picture of the author"
                height={300}
                width={550}
                layout="responsive"
                quality={100}
                priority
              />
            </Col>
          </Row>
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
      </div></div></div>
    </section>
  );
};

export default Wacto;
