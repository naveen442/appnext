import Link from "next/link"
import Head from "next/head"
import Script from "next/script"
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image'
import styles from "../../styles/VoiceKey.module.css";
import React, { useEffect, useState } from 'react';
import { FloatingWhatsApp } from "react-floating-whatsapp";

const myLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 100}`
}
const VoiceKey = (props) => {
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
        <title>Best Voice Calls Service Provider in India | Nettyfish </title>
        <meta name="description" content="Nettyfish Solutions is India's best voice calls service provider. We offer best quality voice calls at affordable prices. Contact us today !"/>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
    </Head>
            <div >
                <div className={styles.banner}>
                    {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <Row>
                        <Col md={7} className="offset-2">
                            <p className={styles.title}>Voice Key Input</p>
                            <p className={styles.breadcrumb}><a className={styles.home} href="/">Home</a> &gt;&gt; Voice Key Input</p>
                        </Col>
                    </Row>
                </div>
            </div>
            <Container>
                {/* <<<<<<<<<<<<<<<<<<<<< Second Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <Row >



                    <Col md={12} className={styles.content} >
                        <div className={styles.mt_150} >
                            <Image
                                loader={myLoader}
                                src="assets/Voice Key Input.png"
                                alt="Picture of the author"
                                height={290}
                                width={370}
                       
                                quality={100}
                             
                                priority
                            />
                        </div>
                        {/* <h1 className={styles.heading}>Voice Broadcast</h1> */}
                        <p className={styles.backfont}>How Voice Key Input works?</p>
                        <p className={styles.backfontone}>Voice Key Input service enables the end user to send their choice by receiving a voice call.</p>

                        <p>By encapsulating VoC(Voice of Cutomers), you can bind and engross with customers at every liaison in the customer&apos;s move and automatically enhance their experience with your company. </p>
                        <p>In the voice call, the user will be given a set of choices from which he/she can click on the keypad from 0 to 9 on their mobile handset.</p>

                    </Col>

                </Row>
            </Container>
            {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

            <div >
                <Container>

                    <Row >
                        <Col md={6} >


                            <h1 className={styles.heading} >Voice of Customers Techniques (VoC)</h1>
                            <ul className={styles.ul1}>
                                <li>
                                <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> 
                                    Customer Interviews</li>
                                <li>  <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> Online surveys</li>
                                <li>  <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} />  Online Customer Reviews</li>
                           
                            </ul>
                            <p className={styles.notes}>For a ready reference please check for the sample Voice call key input image on the right side of this section</p>
                            <p className={styles.notes}>This study conceptualize and bridges the gap between customer expectation and their actual experience.  </p>
                           
                            <h1 className={styles.heading} >How it impacts your business?</h1>
                            <ul className={styles.ul1}>
                                <li> <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} />Gives cautions in business promptly and also you can figure out possible brand setback</li>
                                <li> <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} />Estimate new ideas and concept solutions</li>
                                <li> <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} />Customize your products and it&apos;s feature</li>
                                <li> <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} />Increase in cutomer withholding</li>
                           
                            </ul>
                        </Col>

                        <Col md={6} style={{ alignSelf: "center", paddingBottom: "20px", paddingTop: "20px" }}>
                            <Image
                            loader={myLoader}
                                src="assets/1653474628_ezgif.com-gif-maker (19).webp"
                                alt="Picture of the author"
                                height={600}
                                width={550}
                             
                                quality={100}
                                priority
                            />

                        </Col>
                    </Row>

                    <Row >
                    <Col md={6} style={{ alignSelf: "center", paddingBottom: "20px", paddingTop: "20px" }}>
                            <Image
                            loader={myLoader}
                                src="assets/1653474681_ezgif.com-gif-maker (20).webp"
                                alt="Picture of the author"
                                height={300}
                                width={550}
                                layout="responsive"
                                quality={100}
                                priority
                            />

                        </Col>
                        <Col md={6} >


                            <h1 className={styles.heading} >Voice of your customer</h1>
                            <p>By generating robust Voice of the customer program you will be able to find:</p>
                            <ul className={styles.ul1}>
                                <li>  <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> Why your customer need you</li>
                                <li>  <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> How can you help your customers</li>
                                <li>  <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> What your customers are looking for</li>
                                <li>  <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> What are their interests</li>
                           
                            </ul>
                           
                        </Col>

                      
                    </Row>

                    <div>
                        <h6 className={styles.heading}>Voice Key Input</h6>
                        <div className={styles.pb_30}>
                            <div className={styles.border}>
                                <Row >
                                    <Col md={12} style={{ alignSelf: "center" }}>
                                        <h2 className={styles.card_heading}>VoC strategy</h2>
                                        <p>In order to understand customer preferences, problems, feedbacks and complaints.</p>
                                        <p>Identification of performance and improvisation wherever necessary in an organization</p>
                                        <ul className={styles.ul1}>
                                <li> <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> By measuring latest implementations</li>
                                <li> <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> By enhancing business outcome or product</li>
                                
                           
                            </ul>
                                    </Col>
                                </Row>
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

export default VoiceKey;