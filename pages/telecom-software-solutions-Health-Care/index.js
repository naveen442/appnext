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
const Healthcare = (props) => {
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
        <title>Telecom Software Solutions - Health Care Industry</title>
        <meta name="description" content="Nettyfish Solution is the best telecom software solution for Health Care. We provide a one-stop-shop for all your telecom & Software Automation needs."/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
    </Head>
            <div >
                <div className={styles.banner}>
                    {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <Row>
                        <Col md={7} className="offset-2">
                            <p className={styles.title}>Healthcare Solutions</p>
                            <p className={styles.breadcrumb}><a className={styles.home}  href="/">Home</a> &gt;&gt; Healthcare Solutions</p>
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
                            src="/assets/healthcare.png"
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
                src="assets/Healthcare1.png"
                alt="Picture of the author"
                width={380}
                height={300}
                priority
              />
            </div>
                        <h1 className={styles.heading}>Our Engagement Solution Enhances your Healthcare Sector </h1>
                        <p>Communicational platforms can help healthcare in many ways. They can use to facilitate remote consultations between healthcare providers and patients, allow patients to book or reschedule appointments, and exchange vital health information quickly and securely. Additionally, they can help healthcare organizations with patient outreach, such as providing educational and promotional materials and streamlining communication between healthcare providers, insurers, and other stakeholders. Ultimately, communicational platforms can help improve the quality and efficiency of healthcare delivery. </p>
                    </Col>

                </Row>
            </Container>
            {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

            <div >
                <Container>

                    <Row >
                        <Col md={12} >


                            <h1 className={styles.heading} >SMS Services for Healthcare  </h1>

                            <p className={styles.pera}>SMS Services help healthcare and hospitals enrich communication between the healthcare provider and patients. SMS services create a bridge between healthcare providers and patients. SMS services allow healthcare providers to effortlessly and efficiently send reminders, updates, appointment times, insurance-related messages, and preoperative instructions. SMS service communication improves patient satisfaction, reminds appointments, and increases overall efficiency. </p>
                            <br/>
                            <p className={styles.pera}>SMS services also help healthcare organizations reach out to patients who may not have access to other forms of communication. Healthcare organizations can ensure that they reach their target audience by delivering messages directly to a patient's phone. It is especially beneficial for healthcare providers that serve low-income and rural populations, who may not access internet or email services. Patients can receive information about their health status via SMS Service, which is the simple and most satisfying method. Healthcare providers can use SMS to send patients health status reports such as blood pressure, diabetes, and other reports. The patient benefits from SMS reports because they do not need to bring their physical documents and can smoothly check the status. SMS services can also used to deliver health-related tips and advice.</p>

                        </Col>
                    </Row>

                    <div>

                        <div >
                            <div className={styles.border}>
                                <Row >
                                    <Col md={4} style={{ alignSelf: "center" }}>
                                        <Image
                                            loader={myLoader}
                                            src="/assets/1652425645_we cure.gif"
                                            alt="Picture of the author"
                                            width={300}
                                            height={550}
                                            quality={100}
                                            priority
                                            layout="responsive"
                                        />
                                    </Col>
                                    <Col md={8} style={{ alignSelf: "center" }}>
                                     <h2 className={styles.card_heading}>WhatsApp Business API Solutions for Healthcare </h2> 
                                            <p>WhatsApp Business API helps healthcare providers to deliver better communication, information, and customer service to patients. Healthcare providers can create campaigns with automation features to send health tips, health reports, medicine information, appointment reminder, and insurance-related messages. Also, healthcare providers can efficiently manage customer service, inquiries, payment processes, and medical records. </p>
                                      <p>WhatsApp chatbot helps healthcare providers by offering automated healthcare support 24/7 for the patient and healthcare professionals. In addition to answering inquiries and arranging appointments, the WhatsApp chatbot can also check doctors' availability, book follow-up visits, and schedule appointments. WhatsApp chatbot is a convenient, efficient, and cost-effective tool for healthcare services to enhance patient support. Also, the WhatsApp chatbot will help with internal communication. The WhatsApp chatbot can help healthcare providers improve patient satisfaction and reduce wait times. Moreover, it can help reduce the burden on the medical staff, freeing up resources to focus on more crucial tasks.</p>
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

export default Healthcare;