import Link from "next/link"
import Head from "next/head"
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image'
import styles from "../../styles/ServicePage.module.css";

import { FloatingWhatsApp } from "react-floating-whatsapp";

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 100}`
}
const Healthcare = (props) => {

  


    return (
        <section>
          <Head>
        <title>NettyFish - Healthcare Solutions</title>
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

export default Healthcare;