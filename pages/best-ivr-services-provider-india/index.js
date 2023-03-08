import Link from "next/link"
import Head from "next/head"
import Script from "next/script"
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image'
import styles from "../../styles/IVR.module.css";
import React, { useEffect, useState } from 'react';
import { FloatingWhatsApp } from "react-floating-whatsapp";
const myLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 100}`
}
const IVR = (props) => {
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
        <title>Best IVR Service Provider in India | Nettyfish Solution </title>
        <meta name="description" content="Nettyfish Solution is one of the best IVR Service Provider in India. We provide top-of-the-line services that meet the needs of our clients. Contact us today"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
    </Head>
            <div >
                <div className={styles.banner}>
                    {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <Row>
                        <Col md={7} className="offset-2">
                            <p className={styles.title}>IVR Service</p>
                            <p className={styles.breadcrumb}><a className={styles.home}  href="/">Home</a> &gt;&gt; IVR Service</p>
                        </Col>
                    </Row>
                </div>
            </div>
            <Container>
                {/* <<<<<<<<<<<<<<<<<<<<< Second Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <Row >



                    <Col md={12} className={styles.content} >
                        <div className={styles.mt_150}>
                            <Image
                                loader={myLoader}
                                src="assets/IVR Service.png"
                                alt="Picture of the author"
                                width={320}
                                height={250}
                                quality={100}
                              
                                priority
                            />
                        </div>
                        {/* <h1 className={styles.heading}>Voice Broadcast</h1> */}
                        <p className={styles.backfont}>IVR - <span>&quot;A self-operating customer assistance made user-friendly&quot;</span></p>
                        <p className={styles.backfontone}>The greatly assembled IVR connection system that presents a magnificent and expert vision of the company, disregarding of the range of the business enterprise.</p>
                    </Col>

                </Row>
            </Container>
            {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

            <div >
                <Container>

                    <Row >
                        <Col md={6} >


                            <h1 className={styles.heading} >IVR Features</h1>

                            <p className={styles.pera}>IVR stands for <span>Interactive Voice Response</span>.</p>
                            <p className={styles.pera}>It is a Self-Operating administrative solution that connects with customers with a customized salutation while presenting a classification of menus to choose the required query.  </p>
                            <p className={styles.pera}>Nettyfish’s hosted IVR system(IVRS) permits you to customize the service to the customers. </p>

                        </Col>

                        <Col md={6} style={{ alignSelf: "center", paddingBottom: "20px", paddingTop: "20px" }}>
                            <Image
                            loader={myLoader}
                                src="assets/IVR_1.png"
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
                                src="assets/IVR_2.png"
                                alt="Picture of the author"
                                height={300}
                                width={550}
                                layout="responsive"
                                quality={100}
                                priority
                            />

                        </Col>
                        <Col md={6} >


                            <h1 className={styles.heading} >Why IVR is required?</h1>

                            <ul className={styles.ul1}>
                                <li>  <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> To produce more leads</li>
                                <li>  <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> Widening your business brand image</li>
                                <li>  <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> Strengthen representative&apos;s output</li>
                                <li>  <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> Supervise a wide range of call capacity</li>
                                <li>  <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> Render customized know-how</li>
                            </ul>

                        </Col>


                    </Row>

                    <div>

                        <div className={styles.pt_30}>
                            <div className={styles.border}>
                                <Row >
                                    <Col md={12} style={{ alignSelf: "center" }}>
                                        <h2 className={styles.card_heading}>Benefits of IVR</h2>
                                        <p>There are various benefits to the user to have a well organized communication process with strong solutions to Get your customers on their desired channel by giving them a customised experience.</p>

                                        <ul className={styles.ul1}>
                                            <li><Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> CRM association</li>
                                            <li><Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> Reliability</li>
                                            <li><Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> Adaptable</li>
                                            <li><Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> Personalized</li>
                                            <li><Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> 24*7 Support</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                            
                        </div>
                        <div className={styles.pb_30}>
                            <div className={styles.border}>
                                <Row >
                                    <Col md={12} style={{ alignSelf: "center" }}>
                                        <h2 className={styles.card_heading}>Steps to Use IVR Service</h2>
                                        <p className={styles.subpera}><span>Step 1 : </span> Signup in voicesms.nettyfish.com and provide your username</p>
                                        <p className={styles.subpera}><span>Step 2 : </span> Choose your desired number from IVR Number list provided by Nettyfish</p>
                                        <p className={styles.subpera}><span>Step 3 : </span> Chosen number will be configured under your user’s name as per your IVR plan</p>
                                        <p className={styles.subpera}><span>Step 4 : </span> Provide flowchart with script, welcome recordings and other recording according to script of the IVR Channels</p>
                                        <p className={styles.subpera}><span>Step 5 : </span> Provide destination mobile numbers or landline</p>
                                        <p className={styles.subpera}><span>Step 6 : </span> Start Using the IVR service</p>
                                        <p className={styles.subpera}><span>Step 7 : </span> Check updated reports with Numbers, Time of call, Call conversation recordings and destinations connected</p>
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

export default IVR;