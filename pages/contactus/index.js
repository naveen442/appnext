import Link from "next/link";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/Contactus.module.css";
import { Input, Grid } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const myLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 100}`;
};
const Contactus = (props) => {
  return (
    <section>
      <Head>
        <title>NettyFish - Contact us</title>
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
              <p className={styles.title}>Contact us</p>
              <p className={styles.breadcrumb}>
              <a className={styles.home}  href="/">Home</a>{" "}
                &gt;&gt; Contact us
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <Container>
        {/* <<<<<<<<<<<<<<<<<<<<< Second Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <div className={styles.pt_30}>
          <Row>
            <Col
              md={12}
              className={styles.content}
              style={{ paddingBottom: "30px" }}
            >
              <div className={styles.mt_150}>
                <Image
                  loader={myLoader}
                  src="assets/Untitled-9 1.png"
                  alt="Picture of the author"
                  width={380}
                  height={250}
                  quality={100}
                  priority
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div>
        <Container>
          <div >
            <Row>
              <Col md={3} xs={11}   style={{paddingLeft:40}}>
                <div className={styles}>
                  <h5 className={styles.home}>Chennai: </h5>
                  <p>
                    85, Padmini complex, 2nd floor Gandhi nagar 1st main road
                    Chennai 600020
                  </p>
                  <p className={styles.home}>Mobile - 8608666111</p>
                  <p className={styles.para}>Get Location : <a className={styles.anchor}href="https://www.google.com/maps/place/Nettyfish+-+Bulk+sms+Provider+in+Chennai+%7C+Whatsapp+Chatbot+%26+API+in+Chennai+%7C+Digital+Marketing+Services+in+Chennai/@13.0068483,80.2545325,17z/data=!3m1!4b1!4m5!3m4!1s0x3a52678dbcbca487:0x4a790f917efce31!8m2!3d13.0068431!4d80.2571074">Click Here</a></p>
                </div>

                <div className={styles}>
                  <h5 className={styles.home}>Hyderabad Address :</h5>
                  <p>
                    Amrutha Arcade Building,1st Floor, Ameerpet. Hyderabad
                    500082
                  </p>
                  <p className={styles.home}>Mobile - 86089 96688</p>
                </div>
              </Col>
              <Col md={3} xs={11} style={{paddingLeft:40}}>
                <div className={styles}>
                  <h5 className={styles.home}>Bangalore Address :</h5>
                  <p>
                    5 - groundfloor Floor 29th Main Rd, MCHS Colony, Stage 2,
                    BTM 2nd Stage, Bengaluru, Karnataka 560076
                  </p>
                  <br/> 
                  <p className={styles.home} style={{paddingTop:30}}>Email Address : </p>
                  <p >

support@nettyfish.com</p>
<p >sales@nettyfish.com</p>
<p >partners@nettyfish.com</p>
                </div>

           
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div>
        <Container>
          <div className={styles.pb_30}>
            <Row>
              <Col md={12}>
                <div className={styles.center}>
                  <h1 className={styles.heading}>Call Us or Fill The Form</h1>
                  <p className={styles.pera}>
                    Leave your information and submit to us. <br /> Subscribe to
                    our newsletters for more updates and reports.
                  </p>
                </div>
              </Col>
            </Row>

            <div>
              <div>
                <div className={styles.border}>
                  <Row>
                    <Col>
                      <div>
                        <input
                          type="text"
                          placeholder="Name*"
                          className={styles.form}
                        ></input>
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <input
                          type="text"
                          placeholder="Email*"
                          className={styles.form}
                        ></input>
                      </div>
                    </Col>
                  </Row>
                  <div className={styles.pt_30}>
                    <Row>
                      <Col>
                        <div>
                          <input
                            type="text"
                            placeholder="Phone Number*"
                            className={styles.form}
                          ></input>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className={styles.pt_30}>
                    <Row>
                      <Col>
                        <div>
                          <textarea
                            type="text"
                            placeholder="Message"
                            className={styles.form}
                          ></textarea>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className={styles.button_center}>
                    <button shadow color="gradient" className={styles.button}>
                      Submit
                    </button>
                  </div>
                </div>
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

export default Contactus;
