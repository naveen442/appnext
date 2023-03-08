import Link from "next/link"
import Head from "next/head"
import Script from "next/script"
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image'
import styles from "../../styles/ServicePage.module.css";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import React, { useEffect, useState } from 'react';
const myLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 100}`
}
const Electrical = (props) => {
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
                <title>Telecom Software Solutions - Electrical & Electronics </title>
                <meta name="description" content="Nettyfish Solution is the best telecom software solution for Electrical-Electronics. We provide a one-stop-shop for all your telecom & Software Automation needs."/>

                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
            </Head>
            <div >
                <div className={styles.banner}>
                    {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <Row>
                        <Col md={7} className="offset-2">
                            <p className={styles.title}>Electrical & Electronics</p>
                            <p className={styles.breadcrumb}><a className={styles.home}  href="/">Home</a> &gt;&gt; Electrical & Electronics</p>
                        </Col>
                    </Row>
                </div>
            </div>
            <Container>
                {/* <<<<<<<<<<<<<<<<<<<<< Second Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <div className={styles.pt_30}>
                    <Row style={{ borderBottom: "2px solid #97949436" }}>


                        <Col md={6} style={{ alignSelf: "center" }}>
                            <Image
                                loader={myLoader}
                                src="assets/1653478512_ezgif.com-gif-maker (36).webp"
                                alt="Picture of the author"
                                height={300}
                                width={500}
                                quality={100}
                                priority
                                layout="responsive"
                            />
                        </Col>
                        <Col md={6} className={styles.content} style={{ paddingBottom: "30px" }}>
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
                            <h1 className={styles.heading}>Electrical & Electronics</h1>
                            <p >Electric and Electronics automation chatbot looks like a right solution for the current framework where we want each and every small task to be done with just a click.</p>
                            <p >Many companies are showcasing their products offline and giving best feature with customer care assistance in order to sell their products thorough online medium.</p>
                            <p>This eliminates the man power and more effort towards replying to the same kind of query or assistance that is required.</p>
                        </Col>

                    </Row>
                </div>
            </Container>
            {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

            <div >
                <Container>
                    <div className={styles.pb_30}>
                        <Row >
                            <Col md={12} >


                                <h1 className={styles.heading} >Electrical & Electronics AI - Auto WhatsApp Chatbot</h1>

                                <p className={styles.pera}>Electrical & Electronics WhatsApp Chatbot</p>


                            </Col>
                        </Row>

                        <div>

                            <div >
                                <div className={styles.border}>
                                    <Row >
                                        <Col md={4} style={{ alignSelf: "center" }}>
                                            <Image
                                                loader={myLoader}
                                                src="assets/1652528199_merbury electronics.gif"
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
                                            <p>Electric and Electronic manufacturing is on the level of change and digital representation. The chatbot in this sector is used most regular and frequently work. By this way the business in this industry is growing to a new digitalized tool.</p>
                                            <p>Keeping that in account the client will be contacting with you in multiple ways to get your services. The enterprise/company must be swift and should support 24/7 work period.</p>

                                            <p className={styles.sub_content}>Electric and Electronics assistance is available 24x7 and it handles:</p>
                                            <ol className={styles.ol}>
                                                <li>Product overview</li>
                                                <li>Free sample requests</li>
                                                <li>Automation of internal process request</li>
                                                <li>Intenral staff communication</li>
                                                <li>Referring to features and pricing</li>


                                            </ol>
                                        </Col>
                                    </Row>
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

export default Electrical;