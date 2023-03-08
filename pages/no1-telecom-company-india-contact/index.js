import Link from "next/link";
import Head from "next/head";
import Script from "next/script"
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/Contactus.module.css";
import { Input, Grid } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import React, { useEffect, useState } from 'react';
const myLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 100}`;
};
const Contactus = (props) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const showChatbotPopup = () => {
      if (typeof window !== 'undefined' && window.wacto) {
        window.wacto.open();
      }
    };
  useEffect(() => {
      setIsBrowser(true);
    }, []);
  
    useEffect(() => {
      if (isBrowser) {
        const script = document.createElement('script');
        script.async = true;
        script.defer = true;
        script.type = 'text/javascript';
        script.src = 'https://app.wacto.in/static/js/widget.js?config=' + encodeURIComponent(JSON.stringify({
          bot_key: '26493f2dc1864025',
          welcome_msg: true,
          branding_key: 'wacto',
          server: 'https://app.wacto.in',
          e: 'p'
        }));
        document.head.appendChild(script);
      }
    }, [isBrowser]);

  return (
    <section>
      <Head>
      <Script strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `!function(e,t,a){var c=e.head||e.getElementsByTagName("head")[0],n=e.createElement("script");n.async=!0,n.defer=!0, n.type="text/javascript",n.src=t+"/static/js/widget.js?config="+JSON.stringify(a),c.appendChild(n)}(document,"https://app.wacto.in",{bot_key:"26493f2dc1864025",welcome_msg:true,branding_key:"wacto",server:"https://app.wacto.in",e:"p" })`.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
  return '&#'+i.charCodeAt(0)+';';
})}} />
        <title>No#1 Telecom Company in India | Nettyfish Solutions |Contact</title>
        <meta name="description" content="Nettyfish Solutions is one of the No#1 telecom company in India with over 10 million customers. Contact us to learn more about our products and services."/>

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
        <div className="sticky-social">
  <ul className="social">
  <li className="insta pt-3"><a href="https://www.nettyfish.in/NF_Services.pdf" target="_blank" ><img  src="./assets/pdf_pdf.svg"/></a></li>
    <li className="insta"><a href="https://www.instagram.com/nettyfishsolutions/" target="_blank"><img src="./assets/insta1.png"/></a></li>
        <li className="insta"><a href="https://www.facebook.com/nettyfishsolutions" target="_blank"><img src="./assets/face1.png"/></a></li>
      <li className="insta"><a href="https://twitter.com/Nettyfish_offic" target="_blank" ><img src="./assets/twit1.png"/></a></li>     
      <li   className="insta whatsapp-csm"><FloatingWhatsApp
                                    className="twitter12"
                                     phoneNumber=" 8608666111"
                                     accountName="Nettyfish"
                                     allowEsc
                                     allowClickAway
                                     notification
                                     notificationSound
                                     avatar="./assets/nettyfish.png"
                    
                          /></li>
         {/* <li className=""><a   
 target="_blank" >
                                            <Image
                                           
                                        className="Twitter1"
                                                src="/assets/wacto.png"
                                                alt="Picture of the author"
                                                width={60}
                                                height={60}
                                            />
                                            </a>
                                            </li> */}
                                           {/* <li className="wtsapp"><a href="https://api.whatsapp.com/send?phone=8608666111&"  target="_blank"><img src="./assets/Whats1.png"/></a>
</li> */}


    </ul>
   
  </div>
      </div>
    </section>
  );
};

export default Contactus;
