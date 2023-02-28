import Link from "next/link"
import Head from "next/head"
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image'
import styles from "../../styles/ServicePage.module.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";


const myLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 100}`
}
const Education = (props) => {




    return (
        <section>
            <Head>
        <title>NettyFish - Education </title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
    </Head>
            <div >
                <div className={styles.banner}>
                    {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <Row>
                        <Col md={7} className="offset-2">
                            <p className={styles.title}>Education</p>
                            <p className={styles.breadcrumb}><a className={styles.home}  href="/">Home</a> &gt;&gt; Education</p>
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
                            src="assets/1653478374_ezgif.com-gif-maker (35).webp"
                            alt="Picture of the author"
                            height={430}
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
                                src="assets/Education.png"
                                alt="Picture of the author"
                                width={380}
                                height={250}
                                quality={100}
                                priority
                              
                            />
                        </div>
                        <h1 className={styles.heading}>Business Whatsapp Chatbot for Education</h1>
                        <p >Nettyfish helps students to submit admission form and information, application support, on-campus assignments, transport, class details. Students can also get payment details, fees payment status, due fees, and other queries related to fees structure. Nettyfish whatsapp bot provides multilingual support with different languages. You can also opt-in for regular newsletter about events and happenings in the school, colleges. Incase of placement, there are placement assistant materials that you can refer and apply for campus interviews. Scholarship can also be applied with chatbot services, where you get quick replies and response to proceed further.</p>
                        <p >By using Nettyfish whatsapp chatbot, the rate of admission increases, percentage of continous follow-ups and internal calls reduce, It saves money, time, man power to do this work. The College or school looks professional and branded by using this whatsapp API with auto-response that engages students, parents, teachers, with 24/7 automated response.</p>
                      
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


                            <h1 className={styles.heading} >Education AI - Auto WhatsApp Chatbot</h1>

                            <p className={styles.pera}>Education WhatsApp Chatbot</p>


                        </Col>
                    </Row>

                    <div>

                        <div >
                            <div className={styles.border}>
                                <Row >
                                    <Col md={4} style={{ alignSelf: "center" }}>
                                        <Image
                                            loader={myLoader}
                                            src="assets/1652519890_svs school.gif"
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
                                        <p>Educational chatbots are brilliantly transforming the way institutions interact with their students. They are working towards making it easier for students to learn and reach out to all the activities that they can do during their course of study.</p>
                                        <p>Educational chatbots are magnificently convert the way educational institutions collaborate with their students. They are functioning towards making it simpler for the students to learn and disclose to all the activities that they can do during their time of study.</p>
                 
                                        <p className={styles.sub_content}>Education assistance is available 24x7 and it handles:</p>
                                        <ol className={styles.ol}>
                                            <li>Increases student engagement</li>
                                            <li>Smart feedback</li>
                                            <li>Works as teaching assistance</li>
                                            <li>Provided instant solution</li>
                                            <li>Better support</li>
                                           
                                           
                                        </ol>
                                    </Col>
                                </Row>
                            </div>

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

export default Education;