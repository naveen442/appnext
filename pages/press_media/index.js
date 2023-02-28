import Link from "next/link";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/ServicePage.module.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 100}`;
};
const PressMedia = (props) => {
  return (
    <section>
      <Head>
        <title>NettyFish - Press And Media</title>
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
              <p className={styles.title}>Press And Media</p>
              <p className={styles.breadcrumb}>
              <a className={styles.home}  href="/">Home</a>{" "}
                &gt;&gt; Press And Media
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
              src="/assets/pressandmedia.png"
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
                src="assets/Press1.png"
                alt="Picture of the author"
                width={380}
                height={300}
                priority
              />
            </div>
            <h1 className={styles.heading}>Press/Media
</h1>

            <p>
              Nettyfish Chatbots for Press/Media industry enhance viewers
              engagement with the customized user experience.
            </p>
            <br />
            <p>It can help Press/News industries by...</p>

            <ol className={styles.ol}>
              <li>Global Broadcasting</li>
              <li>Engagement of viewers</li>
              <li>Simple browsing</li>
              <li>Customized alerts</li>
              <li>Check on contents</li>
              <li>Registration for events</li>
            </ol>
          </Col>
        </Row>
      </Container>
      {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div>
        <Container>
          <Row>
            <Col md={12}>
              <h1 className={styles.heading}>Media/News Chatbot Solutions</h1>

              <p className={styles.pera}>Media Solutions</p>
            </Col>
          </Row>

          <div>
            <div>
              <div className={styles.border}>
                <Row>
                  <Col md={4} style={{ alignSelf: "center" }}>
                    <Image
                      loader={myLoader}
                      src="/assets/press.gif"
                      alt="Picture of the author"
                      width={300}
                      height={550}
                      quality={100}
                      priority
                      layout="responsive"
                    />
                  </Col>
                  <Col md={8} style={{ alignSelf: "center" }}>
                    {/* <h2 className={styles.card_heading}>Benefits of IVR</h2> */}
                    <p>
                      Press And Media Chatbot automates all beauty, haircare and
                      wellness related activities that saves the manual
                      intervention. Press And Media virtual assistant uses
                      Artificial Intelligence specifically designed to do the
                      role of various Press And Media service providers
                      especially in beauty, skin and haircare.
                    </p>
                    <br />
                    <p>
                      Bot services are being very convenient with multiple
                      services that allows the customer and the service provider
                      to choose services as per their wish. They also use this
                      platform to give announcements, offers, discounts and lot
                      more.
                    </p>
                    <br />
                    <p className={styles.sub_content}>
                      Media/News assistant is available 24x7 and it handles: :{" "}
                    </p>
                    <ol className={styles.ol}>
                      <li>Daily News update</li>
                      <li>Trending</li>
                      <li>World-wide update</li>
                      <li>Subscriptions</li>
                      <li>Favourite</li>
                    </ol>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Container>
        <a  href="https://app.wacto.in/admin/login" target="_blank" className="float1">
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

export default PressMedia;
