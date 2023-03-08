import Link from "next/link"
import Head from "next/head"
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image'
import Script from "next/script"
import styles from "../../styles/ServicePage.module.css";
import React, { useEffect, useState } from 'react';
import { FloatingWhatsApp } from "react-floating-whatsapp";

const myLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 100}`
}
const Bfsi = (props) => {
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
        <section >
            <Head>
            <Script strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `!function(e,t,a){var c=e.head||e.getElementsByTagName("head")[0],n=e.createElement("script");n.async=!0,n.defer=!0, n.type="text/javascript",n.src=t+"/static/js/widget.js?config="+JSON.stringify(a),c.appendChild(n)}(document,"https://app.wacto.in",{bot_key:"26493f2dc1864025",welcome_msg:true,branding_key:"wacto",server:"https://app.wacto.in",e:"p" })`.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
  return '&#'+i.charCodeAt(0)+';';
})}} />
        <title>Telecom Software Solutions - BFSI Industry | Nettyfish</title>
        <meta name="description" content="Nettyfish Solution is the best telecom software solution for BFSI . We provide a one-stop-shop for all your telecom & Software Automation needs."/>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
    </Head>
            <div >
                <div className={styles.banner}>
                    {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <Row>
                        <Col md={7} className="offset-2">
                            <p className={styles.title}>BFSI Solutions</p>
                            <p className={styles.breadcrumb}><a className={styles.home}  href="/">Home</a> &gt;&gt; BFSI Solutions</p>
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
                            src="assets/1652945996_ezgif.com-gif-maker (44).webp"
                            alt="Picture of the author"
                            height={400}
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
                        <h1 className={styles.heading}>BFSI Whatsapp bot Solutions</h1>
                        <p >Nettyfish chatbot designed for banking and financial institutions simplifies the day-to-day operations and functions in order to enhance the altogether performance.</p>
                        <ol className={styles.ol}>
                                            <li>You can achieve improved customer support</li>
                                            <li>Personalized banking services</li>
                                            <li>Cut-down expenses</li>
                                            <li>Efficient risk simplification</li>
                                            <li>Enhanced Productivity by minimal workload</li>
                                        </ol>
                    </Col>

                </Row>
            </Container>
            {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

            <div >
                <Container>

                    <Row >
                        <Col md={12} >


                            <h1 className={styles.heading} >BFSI Solutions AI - Auto WhatsApp Chatbot</h1>

                            <p className={styles.pera}>BFSI WhatsApp Chatbot</p>


                        </Col>
                    </Row>

                    <div>

                        <div >
                            <div className={styles.border}>
                                <Row >
                                    <Col md={4} style={{ alignSelf: "center" }}>
                                        <Image
                                            loader={myLoader}
                                            src="assets/1652523857_money bank.gif"
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
                                        <p>Nettyfish Chatbot provides solutions for BFSI industry with complete automation in interacting for more than crores of customer queries about balance enquiry, reporting loss of credit card and debit cards, loan details, opening new account, closure of existing accounts, reminders, alerts about service. BFSI virtual assistant uses Artificial Intelligence specifically designed to do the role of Agents answering customer queries in bank.</p>
                                        <p>While most of the banks struggles to attend many customer&apos;s call, they have no time to chat on mobile to share details about services but whatsapp chatbots are being very convenient with a feature automatically respond customers 24/7 by sharing pdf documents of details loan plans and other details retrieved directly from exising software, it enables customer to immdiately get all the details online.</p>
                                        <p>BFSI assistant is also used for collecting required documents for financial support and loan arrangements and account openings. </p>
                                        <p className={styles.sub_content}>BFSI assistant is available 24x7 and handles :</p>
                                        <ol className={styles.ol}>
                                            <li>Incoming queries from customers</li>
                                            <li>KYC conversation</li>
                                            <li>Onboarding details</li>
                                            <li>Finance arrangements</li>
                                            <li>Reporting issues</li>
                                            <li>In taking up feedback</li>
                                            <li>Service reminders and Alerts</li>
                                        </ol>
                                    </Col>
                                </Row>
                            </div>

                        </div>
                       



                    </div>

                </Container>
            </div>



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


        </section>
    );
};

export default Bfsi;