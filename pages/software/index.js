import Link from "next/link";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/ServicePage.module.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 100}`;
};
const Software = (props) => {
  return (
    <section>
      <Head>
        <title>NettyFish - Software Solutions</title>
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
              <p className={styles.title}>Software Solutions</p>
              <p className={styles.breadcrumb}>
              <a className={styles.home}  href="/">Home</a>{" "}
                &gt;&gt; Software Solutions
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
                src="assets/Software1.png"
                alt="Picture of the author"
                width={380}
                height={300}
                priority
              />
            </div>
            <h1 className={styles.heading}>
              {" "}
              How Nettyfish Chatbot benefits your company?
            </h1>

            <ul className={styles.ul1}>
              <li>
                <Image
                  loader={myLoader}
                  src="/assets/list1.gif"
                  alt="Picture of the author"
                  style={{ paddingRight: 1 }}
                  width={30}
                  height={30}
                />{" "}
                Higher reach on company’s profile.
              </li>
              <li>
                <Image
                  loader={myLoader}
                  src="/assets/list1.gif"
                  alt="Picture of the author"
                  style={{ paddingRight: 1 }}
                  width={30}
                  height={30}
                />{" "}
                Immediate/Instant availability
              </li>
              <li>
                <Image
                  loader={myLoader}
                  src="/assets/list1.gif"
                  alt="Picture of the author"
                  style={{ paddingRight: 1 }}
                  width={30}
                  height={30}
                />{" "}
                It can increase your sales
              </li>
              <li>
                <Image
                  loader={myLoader}
                  src="/assets/list1.gif"
                  alt="Picture of the author"
                  style={{ paddingRight: 1 }}
                  width={30}
                  height={30}
                />{" "}
                It acts as a base for your conversational strategy
              </li>
              <li>
                <Image
                  loader={myLoader}
                  src="/assets/list1.gif"
                  alt="Picture of the author"
                  style={{ paddingRight: 1 }}
                  width={30}
                  height={30}
                />{" "}
                Benefitting perception into customer behaviour
              </li>
              <li>
                <Image
                  loader={myLoader}
                  src="/assets/list1.gif"
                  alt="Picture of the author"
                  style={{ paddingRight: 1 }}
                  width={30}
                  height={30}
                />{" "}
                Providing extensive range of available application
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div>
        <Container>
          <Row>
            <Col md={12}>
              <h1 className={styles.heading}>
                Software Solutions AI - Auto WhatsApp Chatbot
              </h1>

              <p className={styles.pera}>Software Solutions WhatsApp Chatbot</p>
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
                  <Col md={8}>
                    {/* <h2 className={styles.card_heading}>Benefits of IVR</h2> */}
                    <p>
                      Software Solutions Chatbot automates the activities of
                      Software development and their clients that saves the
                      manual intervention. The software virtual assistant uses
                      Artificial Intelligence specially designed to do the role
                      of assisting in various activities that is provided by the
                      Software companies.
                    </p>
                    <br />
                    <p>
                      Bot services are being beneficial with various services
                      that involves Software development, solutions and training
                      to their clients.
                    </p>
                    <p>
                      They also use this platform to provide support related
                      activities.
                    </p>
                    <p className={styles.sub_content}>
                      Software assistance is available 24x7 and it handles:
                    </p>

                    <ol className={styles.ol}>
                      <li>Calendar and meeting</li>
                      <li>Automation</li>
                      <li>Smart Learning</li>
                      <li>Integration</li>
                      <li>Recommending</li>
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

export default Software;
