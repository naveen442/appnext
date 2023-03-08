import Link from "next/link"
import Head from "next/head"
import Script from "next/script"
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image'
import styles from "../../styles/VirtualMobileNumber.module.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import React, { useEffect, useState } from 'react';

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 100}`
}
const Mobile = (props) => {

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
        <title>Best Virtual Mobile Number Service in India | Nettyfish Solution </title>
        <meta name="description" content="Nettyfish Solutions is the best virtual mobile number service in India. We offer a range of services including VoIP, SMS, and MMS. Contact us today"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
      </Head>
      <div >
        <div className={styles.banner}>
          {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <Row>
            <Col md={7} className="offset-2">
              <p className={styles.title}>Virtual Mobile Number</p>
              <p className={styles.breadcrumb}><a className={styles.home}  href="/">Home</a> &gt;&gt; Virtual Mobile Number</p>
            </Col>
          </Row>
        </div>
      </div>
      <Container>
        {/* <<<<<<<<<<<<<<<<<<<<< Second Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <Row >

          <Col md={6} style={{ alignSelf: "center" }}>

            <Image
              loader={myLoader}


              src="/assets/1653988161_VR-Mob-No.webp"
              alt="Picture of the author"
              height={300}
              width={500}
              layout="responsive"
              quality={100}
              priority
            />

          </Col>

          <Col md={6} className={styles.content} >
            <div className={styles.mt_150}>
              <Image
                loader={myLoader}
         
                src="assets/Virtual Mobile Number.png"
                alt="Picture of the author"
                width={370}
                height={290}
                quality={100}
               
                priority
              />
            </div>
            <h1 className={styles.heading}>What is Virtual Mobile number?</h1>
            <p>A virtual phone number is usually a particular mobile number that which is not connected to any phone physically or to a SIM-Card by the phone company.</p>

            <p>When you have a virtual Mobile Number, you will be able to answer incoming calls with an application across the networks.</p>

          </Col>

        </Row>
      </Container>
      {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div style={{paddingTop:"50px"}}>
        <Container>

          <Row >
            <Col md={6} >


              <h1 className={styles.heading} >Premium MO & MT<br />Shortcode/Longcode (VMN) </h1>
              <p>2 way SMS starts when the message is sent by the client to short or long code. This message received by the short or long code is then delivered through to the ‘PULL’ server by the mobile operator.</p>

              <p>The server, in turn, processes the message based on the keyword. The incoming messages are delivered back to the client’s web application by initiating a reverse ‘PUSH’ process.</p>

            </Col>

            <Col md={6} style={{ alignSelf: "center", paddingBottom: "20px", paddingTop: "20px" }}>
              <Image
                loader={myLoader}
                src="/assets/1653988348_VMN-4 (1).webp"
                alt="Picture of the author"
                height={300}
                width={500}
                layout="responsive"
                quality={100}
                priority
              />

            </Col>
          </Row>
          <Row >
            <Col md={6} style={{ alignSelf: "center", paddingBottom: "20px", paddingTop: "20px" }}>
              <Image
                loader={myLoader}
                src="/assets/1653987586tele.webp"
                alt="Picture of the author"
                height={300}
                width={500}
                layout="responsive"
                quality={100}
                priority
              />

            </Col>
            <Col md={6} >


              <h1 className={styles.heading} >Who can use SMS Shortcode/Longcode Service? </h1>
              <ul className={styles.ul1}>
                <li><Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> Businesses looking to get feedback from the customers</li>
                <li><Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> Creating Poll campaigns.</li>
                <li><Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> To answer Quiz questions for lucky draw </li>
                <li><Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> Voting through SMS for reality shows, etc.,</li>
                <li><Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> Surveys for marketing purposes.</li>
                <li><Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> Promotion of new products.</li>
              </ul>

            </Col>


          </Row>
          <div>
            <h1 className={styles.heading}>Benefits of Using Virtual Mobile Number</h1>
            <div className={styles.border}>
              <Row >
                <Col md={6} style={{ alignSelf: "center" }}>
                  <Image
                    loader={myLoader}
                    src="/assets/ppl-34223.webp"
                    alt="Picture of the author"
                    height={300}
                    width={450}
                    layout="responsive"
                    quality={100}
                    priority
                  />

                </Col>
                <Col md={6} style={{ alignSelf: "center"}} xs={{ offset: 0 }}>

                  <ul className={styles.ul1}>
                    <li><Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> No mobile required separately</li>
                    <li><Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> Access calls from everywhere</li>
                    <li><Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> Adaptable in navigating calls</li>
                    <li><Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> Keep record of your Marketing</li>
                    <li><Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> Missed calls can be eliminated</li>
                    <li><Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> Obtain better quality services</li>
                  </ul>

                </Col>


              </Row>
            </div>
          </div>
          <div className={styles.pb_30}>
            <h1 className={styles.heading}>Key Features</h1>
            <div className={styles.border}>
              <Row >
                <Col md={6} style={{ alignSelf: "center", textAlign: "center" }}>
                  <Image
                    loader={myLoader}
                    src="/assets/Key-pana.svg"
                    alt="Picture of the author"
                    height={250}
                    width={250}
                    layout="responsive"
                    quality={100}
                    priority
                  />

                </Col>
                <Col md={6} style={{ alignSelf: "center" }}>

                  <ul className={styles.ul1}>
                    <li><Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> No mobile required separately</li>
                    <li><Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> Access calls from everywhere</li>
                    <li><Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> Adaptable in navigating calls</li>
                    <li><Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> Keep record of your Marketing</li>
                    <li><Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> Missed calls can be eliminated</li>
                    <li><Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> Obtain better quality services</li>
                  </ul>

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





    </section>
  );
};

export default Mobile;