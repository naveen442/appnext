import Link from "next/link"
import Head from "next/head"
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image'
import styles from "../../styles/Obdcalls.module.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 100}`
}
const Obdcalls = (props) => {

    


    return (
        <section>
        <Head>
        <title>NettyFish - OBD Calls </title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
    </Head>
            <div >
                <div className={styles.banner}>
                    {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <Row>
                        <Col md={7} className="offset-2">
                            <p className={styles.title}>OBD Calls</p>
                            <p className={styles.breadcrumb}><a className={styles.home}  href="/">Home</a> &gt;&gt; OBD Calls</p>
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
                            src="/assets/obd_calls_1.png"
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
                                src="/assets/obd_calls_2.png"
                                alt="Picture of the author"
                                width={380}
                                height={250}
                                quality={100}
                           
                                priority
                            />
                        </div>
                        <h1 className={styles.heading}>Voice Broadcast</h1>
                        <p>Nettyfish bulk voice SMS service in India makes you reach out to thousands of customers at a time by broadcasting a pre-recorded voice that adds a human touch to your messages by adding speech to it that explains your product or service</p>

                        <p>Nettyfish uses a fully automated online interface with zero set-up costs that can broadcast voice calls to thousands instantly also by customizing it in any language as per the client’s needs which saves the time spent on personalized calling.</p>
                        <p>Also literacy barriers can be breached easily through voiceSMS. Nettyfish voice call platform is ideal for communication where it can be extremely helpful for marketing, political campaign, promotion, sales, event invitation, important notification etc...</p>
                    </Col>

                </Row>
            </Container>
            {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

            <div >
                <Container>

                    <Row >
                        <Col md={6} >


                            <h1 className={styles.heading} >How it works?</h1>
                            <p>Nettyfish has its Voice SMS gateway, once the mobile numbers that are to receive the voice SMS are enlisted, the pre-recorded voice call is delivered to all those mobile numbers through our SMS gateway.</p>
                            <p>This is simple and easy-to-use web-based software to send bulk voice calls. The voice messages can be broadcasted as soon as they are uploaded or else they can also be scheduled to be sent sometime later.</p>
                            <p className={styles.notes}>Once the voice call is received by the recipient, the software automatically updates reports instantly on acknowledging the delivery of the voice call.</p>
                        </Col>

                        <Col md={6} style={{ alignSelf: "center", paddingBottom: "20px", paddingTop: "20px" }}>
                            <Image
                              loader={myLoader}
                                src="/assets/1653474522_ezgif.com-gif-maker (18).webp"
                                alt="Picture of the author"
                                height={300}
                                width={500}
                                layout="responsive"
                                quality={100}
                                priority
                            />

                        </Col>
                    </Row>

                    <div>
                        <h6 className={styles.sub_content}>When Voice broadcast is used for the development of business, it can help you in following ways</h6>
                        <div className={styles.pb_30}>
                            <div className={styles.border}>
                                <Row >
                                    <Col md={12} style={{ alignSelf: "center" }}>
                                        <h2 className={styles.card_heading}>Reach</h2>
                                        <p>Nettyfish Voice-SMS Gateway can share your pre-recorded voice message with thousands of people at the same time at a fraction of the speed that human beings would take for the same activity.</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className={styles.pb_30}>
                            <div className={styles.border}>
                                <Row >
                                    <Col md={12} style={{ alignSelf: "center" }}>
                                        <h2 className={styles.card_heading}>Cost-effective</h2>
                                        <p>Voice broadcasting is cost effective when compared to calling each person individually which takes more of man power, effort and money.</p>
                                        <p>This is affordable, and has no installation and setup fee, you can get the results that would otherwise take a long time for employees to achieve.</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className={styles.pb_30}>
                            <div className={styles.border}>
                                <Row >
                                    <Col md={12} style={{ alignSelf: "center" }}>
                                        <h2 className={styles.card_heading}>Insights and Delivery Reports</h2>
                                        <p>Nettyfish Voice SMS software provides instant reports on metrics like number of answered calls, waiting calls, duration of recipient who heard the call, DND numbers, and so on.</p>
                                        <p>Accordingly to this received data, you can refine your next campaign to improve output.</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className={styles.pb_30}>
                            <div className={styles.border}>
                                <Row >
                                    <Col md={12} style={{ alignSelf: "center" }}>
                                        <h2 className={styles.card_heading}>Simple to Use</h2>
                                        <p>Nettyfish user-friendly platform allows you to send voice rolex campaign in simple 3 steps: upload numbers, upload the recorded voice, schedule the campaign, and be done.</p>
      
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className={styles.pb_30}>
                            <div className={styles.border}>
                                <Row >
                                    <Col md={12} style={{ alignSelf: "center" }}>
                                        <h2 className={styles.card_heading}>Integrates with your application</h2>
                                        <p>The voice API document available in Nettyfish Voice SMS Portal that helps you to sync this service with your existing software or any web application.</p>
                                        <p>You can also capture the responses directly into your software and run campaigns from your application.</p>
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

export default Obdcalls;