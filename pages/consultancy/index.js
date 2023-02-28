import Link from "next/link"
import Head from "next/head"
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image'
import styles from "../../styles/ServicePage.module.css";

import { FloatingWhatsApp } from "react-floating-whatsapp";

const myLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 100}`
}
const Consultancy = (props) => {




    return (
        <section>
            <Head>
        <title>NettyFish - Consultancy Solutions </title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
    </Head>
            <div >
                <div className={styles.banner}>
                    {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <Row>
                        <Col md={7} className="offset-2">
                            <p className={styles.title}>Consultancy Solutions</p>
                            <p className={styles.breadcrumb}><a className={styles.home}  href="/">Home</a> &gt;&gt; Consultancy Solutions</p>
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
                            src="assets/1653478280_ezgif.com-gif-maker (34).webp"
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
                                src="assets/Consultancy.png"
                                alt="Picture of the author"
                                width={380}
                                height={270}
                                quality={100}
                                priority
                            
                            />
                        </div>
                        <h1 className={styles.heading}>Consultancy Solutions</h1>
                        <p >Consultancy chatbot assists you to get the end user’s required documents rightly thorugh chat window using the File Upload function. The same way, it allows you to check the end user’s details through OTP sent to email/number.</p>
                        <p >High end experience is building chatbots in marketing, selection of a product, feedback and so on.</p>
                       <p>We understand the intense details of this technology and how to design and write discussions that will create chatbot victory.</p>
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


                            <h1 className={styles.heading} >Consultancy Solutions AI - Auto WhatsApp Chatbot</h1>

                            <p className={styles.pera}>Consultancy WhatsApp Chatbot</p>


                        </Col>
                    </Row>

                    <div>

                        <div >
                            <div className={styles.border}>
                                <Row >
                                    <Col md={4} style={{ alignSelf: "center" }}>
                                        <Image
                                            loader={myLoader}
                                            src="assets/1652528465_yaya consultancy.gif"
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
                                        <p>In Consultancy, the Chatbot automates the activities of the consultant and their clients. A consultancy chatbot can free up human agents from answering the monotonous queries of the customers, and make it easier for them to handle the complex queries of the users.</p>
                                        <p>Including this, it can help in reducing the cost of operations while boosting the revenue as well. It also helps in identifying interests, saving the time spent and gather information.</p>
                                       
                                        <p className={styles.sub_content}>Consultancy assistance is available 24x7 and it handles:</p>
                                        <ol className={styles.ol}>
                                            <li>Comprehensive technical support</li>
                                            <li>Provide robust data analytics</li>
                                            <li>Decrease employee training cost</li>
                                            <li>Unlimited Agents conversation</li>
                                            <li>Input of visitor’s data</li>
                                            <li>Project management</li>    
                                           
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

export default Consultancy;