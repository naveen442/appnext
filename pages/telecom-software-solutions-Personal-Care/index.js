import Link from "next/link"
import Head from "next/head"
import Script from "next/script"
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image'
import styles from "../../styles/ServicePage.module.css";
import React, { useEffect, useState } from 'react';
import { FloatingWhatsApp } from "react-floating-whatsapp";

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 100}`
}
const PersonalCare = (props) => {
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
        <title>Telecom Software Solutions - Personal Care Industry </title>
        <meta name="description" content="Nettyfish Solution is the best telecom software solution for Personal care. We provide a one-stop-shop for all your telecom & Software Automation needs."/>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
    </Head>
            <div >
                <div className={styles.banner}>
                    {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <Row>
                        <Col md={7} className="offset-2">
                            <p className={styles.title}>Personal Care</p>
                            <p className={styles.breadcrumb}><a className={styles.home}  href="/">Home</a> &gt;&gt; Personal Care</p>
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
                            src="/assets/personalcare1.png"
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
                src="assets/Personal_Care1.png"
                alt="Picture of the author"
                width={380}
                height={300}
                priority
              />
            </div>
                        <h1 className={styles.heading}>Whatsapp API for Automobile dealers</h1>
                        <p>Customers are able to have a chat with a beauty chatbot same like they would speak to a human assistant in-store and get thousands of beauty information, tips and endorsements.

</p><br/>

                    <p>A series of questions will be asked by the bot, followed by that the user share photos and links by digital beauty consultation is provided. It is simple as that.

</p><br/><p>As the beauty industries are highly ambitious space. With much more brands introduced and sold for customer’s attention. Apart from that, clients in this area are sharp highly challenging. They come to you to have a customized, exclusive experience each time.

</p><br/>
                    </Col>

                </Row>
            </Container>
            {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

            <div >
                <Container>

                    <Row >
                        <Col md={12} >


                            <h1 className={styles.heading} >Personal Care AI - Auto WhatsApp Chatbot
</h1>

                            <p className={styles.pera}>Personal Care WhatsApp Chatbot

</p>


                        </Col>
                    </Row>

                    <div>

                        <div >
                            <div className={styles.border}>
                                <Row >
                                    <Col md={4} style={{ alignSelf: "center" }}>
                                        <Image
                                            loader={myLoader}
                                            src="/assets/1652437663_ezgif-4-4bf1a3f900.gif"
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
                                        <p>Personal Care Chatbot automates all beauty, haircare and wellness related activities that saves the manual intervention. Personal Care virtual assistant uses Artificial Intelligence specifically designed to do the role of various personal care service providers especially in beauty, skin and haircare.
</p><br/>
<p>Bot services are being very convenient with multiple services that allows the customer and the service provider to choose services as per their wish. They also use this platform to give announcements, offers, discounts and lot more. 

</p><br/>
                                        <p className={styles.sub_content}>Personal Care assistant is available 24x7 and it handles: </p>
                                        <ol className={styles.ol}>
                                            <li>   Booking appointments
</li>
                                            <li>Sharing images of new brand cars</li>
                                            <li>   Getting feedback
</li>
                                            <li>   Choosing services
</li>
                                            <li> Offers and discounts
</li>
                                            <li>  New product/service notification

</li>
                                        </ol>
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

export default PersonalCare;