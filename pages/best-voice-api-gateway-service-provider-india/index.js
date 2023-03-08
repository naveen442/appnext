import Link from "next/link";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/Enterprise.module.css";
import { Card, Grid, Text } from "@nextui-org/react";
import React, { useEffect, useState } from 'react';
import AOS from "aos";
import Script from "next/script";
import { FloatingWhatsApp } from "react-floating-whatsapp";
const myLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 100}`;
};
const VoiceAPI = () => {
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


  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section>
      <Head>
      <Script strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `!function(e,t,a){var c=e.head||e.getElementsByTagName("head")[0],n=e.createElement("script");n.async=!0,n.defer=!0, n.type="text/javascript",n.src=t+"/static/js/widget.js?config="+JSON.stringify(a),c.appendChild(n)}(document,"https://app.wacto.in",{bot_key:"26493f2dc1864025",welcome_msg:true,branding_key:"wacto",server:"https://app.wacto.in",e:"p" })`.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
  return '&#'+i.charCodeAt(0)+';';
})}} />
        <title>Best Voice API gateway service provider in India | Nettyfish Solution</title>
        <meta name="description" content="Nettyfish Solution is the best voice API gateway service provider in India. We provide best quality voice API gateway services to our clients."/>

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous"
        ></link>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous"
        ></link>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        ></link>
      </Head>
      <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>
      <div>
        <div className={styles.banner}>
          {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <Row>
            <Col md={7} className="offset-2">
              <p className={styles.title}>Voice API</p>
              <p className={styles.breadcrumb}>
                <a className={styles.home} href="/">Home</a>{" "}
                &gt;&gt; Voice API
              </p>
            </Col>
          </Row>
        </div>
      </div>
      {/* <<<<<<<<<<<<<<<<<<<<< Second Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <div className={styles.backdrop_color}>
        <div className={styles.backdrop}>
          <Container>
            <Row>
              <Col md={6} style={{ alignSelf: "center", textAlign: "center" }}>
                <div data-aos="fade-up">
                  <Image
                    loader={myLoader}
                    src="assets/voice_api_1.png"
                    alt="Picture of the author"
                    height={500}
                    width={500}
                    quality={100}
                    layout="responsive"
                  />
                </div>
              </Col>

              <Col md={6} style={{ alignSelf: "center" }}>
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                  <div className={styles.mt_150}>
                    <Image
                      loader={myLoader}
                      src="assets/Voice API.png"
                      alt="Picture of the author"
                      width={380}
                      height={320}
                      priority
                    />
                  </div>
                  <p className={styles.heading}>
                    Automate your Customer Communication service with Voice API
                  </p>
                  <p>
                    “Transform your business communication to the next level
                    with Nettyfish Solutions Voice API”
                  </p>
                  <br />
                  <p>
                    Voice Solutions helps enrich business communication,
                    automate voice customer support, automate outbound calls,
                    and more. Voice Solutions API can integrate with any
                    platform. Our voice API is a Multi-channel communication
                    platform for your business.{" "}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

        <div className={styles.p_100}>
          <Container>
            <Row>
              <Col md={6} style={{ alignSelf: "center" }}>
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                  <p className={styles.heading2}>What is Voice API? </p>
                  <p>
                    The best approach to interacting with your consumers is
                    through voice. It's intimate, fast, and, most importantly,
                    human. Our voice APIs enable programmatically monitoring,
                    managing, and triggering voice calls. You may link voice
                    conversations with your CRM, Helpdesk, applications,
                    websites, and other systems using Nettyfish Solutions APIs
                    for a better customer experience.
                  </p>
                </div>
              </Col>
              <Col md={6} style={{ alignSelf: "center", textAlign: "center" }}>
                <div data-aos="fade-up" style={{ padding: "50px" }}>
                  <Image
                    loader={myLoader}
                    src="assets/voice_api_2.png"
                    alt="Picture of the author"
                    height={500}
                    width={500}
                    quality={100}
                    layout="responsive"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* <<<<<<<<<<<<<<<<<<<<< Fourth Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

        <div>
          <Container>
            <Row>
              <Col md={6} style={{ alignSelf: "center" }}>
                <Image
                  loader={myLoader}
                  src="assets/Comp_products.gif"
                  alt="Picture of the author"
                  height={600}
                  width={550}
                  layout="responsive"
                  quality={100}
                  priority
                />
              </Col>
              <Col md={6} style={{ alignSelf: "center" }}>
                <h1 className={styles.heading}>Why is voice API required? </h1>
                <p>
                  Voice API is required for many purposes for your business.
                  Consumers expect engaging conversations from voice APIs in
                  ways they never imagined possible. Using voice APIs is more
                  than just delivering a phone call it is a strategic way to
                  improve customer service.
                  <br />
                  Voice API helps customers without human interaction.
                  Pre-recorded voice broadcast helps with the interactive
                  response to customer queries, reduces human interaction, and
                  work, and increases productivity.
                  <br />
                  When you receive a high volume of calls at a time, it is not
                  easy to handle the situation. Our Voice API helps handles more
                  customer calls through an interactive voice response process.
                </p>

                <ul className={styles.ul1}>
                  <li>
                    <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} />
                     Our Voice APIs products for Business </li>
                  <li> 
                    <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> 
                    Interactive Voice Response – IVR </li>
                  <li> 
                    <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> 
                    Cloud Telephony Ai-Auto Dialer </li>
                  <li>
                    <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> 
                    Missed Call Services </li>
                  <li>
                    <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} />
                     Virtual Mobile Number </li>
                  <li>
                    <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} />
                     Voice key Input </li>
                  <li>
                    <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> 
                    Outbound Call</li>
                  <li>
                    <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> 
                    Benefits of using Voice Call Solutions in business</li>
                </ul>

              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container>
            <div>
              <h6 className={styles.sub_content}>
                When Voice broadcast is used for the development of business, it
                can help you in following ways
              </h6>
              <div className={styles.pb_30}>
                <div className={styles.border}>
                  <Row>
                    <Col md={12} style={{ alignSelf: "center" }}>
                      <h2 className={styles.card_heading}>
                        {" "}
                        Easy Multi-Channel Integration{" "}
                      </h2>
                      <p>
                        Easily integrate voice solutions into your existing CRMs
                        and keep your business running smoothly.
                      </p>{" "}
                    </Col>
                  </Row>
                </div>
              </div>
              <div className={styles.pb_30}>
                <div className={styles.border}>
                  <Row>
                    <Col md={12} style={{ alignSelf: "center" }}>
                      <h2 className={styles.card_heading}>
                        Increase Productivity
                      </h2>
                      <p>
                        Integrate telephony into your CRM, helpdesk, or app with
                        our Voice call API. With one click, you can make calls
                        without manually dialing any numbers.
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className={styles.pb_30}>
                <div className={styles.border}>
                  <Row>
                    <Col md={12} style={{ alignSelf: "center" }}>
                      <h2 className={styles.card_heading}>
                        Promotion and Lead Generation
                      </h2>
                      <p>
                        Utilize an outbound call service to enhance your
                        marketing process. The voice call broadcast feature can
                        help you generate more leads. By promoting voice calls,
                        you can get more customers from calls.
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className={styles.pb_30}>
                <div className={styles.border}>
                  <Row>
                    <Col md={12} style={{ alignSelf: "center" }}>
                      <h2 className={styles.card_heading}>
                        Auto Queries Solving
                      </h2>
                      <p>
                        The automated and self-operating feature of IVR enables
                        automated responses to common customer queries and
                        answers to basic operations.
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className={styles.pb_30}>
                <div className={styles.border}>
                  <Row>
                    <Col md={12} style={{ alignSelf: "center" }}>
                      <h2 className={styles.card_heading}>Enhance branding </h2>
                      <p>
                        Enhance your branding by promotion, and enhancing
                        customer experience makes trustworthy customers for your
                        brand.{" "}
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>

              {/* //1 */}
              <div className={styles.pb_30}>
                <div className={styles.border}>
                  <Row>
                    <Col md={12} style={{ alignSelf: "center" }}>
                      <h2 className={styles.card_heading}>Monitoring Calls </h2>
                      <p>
                        You can monitor all the calls and record all the
                        customer calls for future purposes and later listening.{" "}
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className={styles.pb_30}>
              <div className={styles.border}>
                <Row>
                  <Col md={12} style={{ alignSelf: "center" }}>
                    <h2 className={styles.card_heading}>
                      Provide All-Time Availability{" "}
                    </h2>
                    <p>
                      Connect with your customers anywhere at any time. Cloud
                      telephony and IVR provide 24/7 availability.{" "}
                    </p>
                  </Col>
                </Row>
              </div>
            </div>

            {/* 3 */}
            <div className={styles.pb_30}>
              <div className={styles.border}>
                <Row>
                  <Col md={12} style={{ alignSelf: "center" }}>
                    <h2 className={styles.card_heading}>
                      {" "}
                      Better Customer Experience{" "}
                    </h2>
                    <p>
                      Automated voice response and voice communication support
                      satisfy customers with solving queries, and they can reach
                      you smoothly for any queries. It enhances customer
                      experience.{" "}
                    </p>
                  </Col>
                </Row>
              </div>
            </div>

            {/* 4 */}
            <div className={styles.pb_30}>
              <div className={styles.border}>
                <Row>
                  <Col md={12} style={{ alignSelf: "center" }}>
                    <h2 className={styles.card_heading}>
                      Nettyfish Solutions Voice API integration
                    </h2>
                    <p>
                      Nettyfish Solutions is the best provider of Voice call
                      Solutions in India. Several companies in India offer Voice
                      API, but Nettyfish Solutions is one of the best.{" "}
                    </p>
                    <ul  className={styles.ul1}>
                      <li> <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> 
                        We provide IVR at an affordable and competitive price.{" "}
                      </li>
                      <li> <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} />  We offer enhanced customer service. </li>
                      <li>
                        {" "} <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> 
                        Our API integration services support multiple channels.{" "}
                      </li>
                      <li> <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} />  Our Voice API is user-friendly. </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
          <Container>
            <div className={styles.pb_30}>
              <div className={styles.border}>
                <Row>
                  <Col md={12} style={{ alignSelf: "center" }}>
                    <h2 className={styles.card_heading}>FAQ: </h2>
                    <p className={styles.subpera}>
                      <span>1. What is Voice API? </span>
                      <br /> Voice API is an application program interface for
                      voice call purposes. Voice API is a tool for receiving and
                      making calls through the internet for enterprise purposes.
                      It enhances business communication and customer support
                      experience.{" "}
                    </p>
                    <p className={styles.subpera}>
                      <span>2. How does Voice API work? </span> <br /> Voice API
                      works by connecting to cloud telephony Solutions. You can
                      integrate Nettyfish Solutions voice API with any CRM,
                      apps, websites, etc.{" "}
                    </p>
                    <p className={styles.subpera}>
                      <span>3. What are the features of Voice API? </span>
                      <br /> You can connect voice API with any kind of CRM
                      software, websites, helpdesk, etc. You can use Virtual
                      Mobile Number to make and receive calls in Voice API.
                    </p>
                    <p className={styles.subpera}>
                      <span>4. Can I Use Voice API in any software? </span>
                      <br /> Nettyfish Solutions voice API is user-friendly and
                      you can integrate it with any kind of software.{" "}
                    </p>
                    <p className={styles.subpera}>
                      <span>
                        5. Can I make and receive calls in Voice API?{" "}
                      </span>
                      <br /> Yes, you can. You can receive and make calls in
                      voice API through the internet.{" "}
                    </p>
                    <p className={styles.subpera}>
                      <span>6. Is Nettyfish Voice API Secure? </span>
                      <br /> Yes, 100% secure. Our voice API enables number
                      masking technology. It helps to secure both customers and
                      agents.{" "}
                    </p>
                  </Col>
                </Row>
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
      </div>
    </section>
  );
};

export default VoiceAPI;
