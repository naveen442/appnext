import Link from "next/link"
import Head from "next/head"
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image'
import styles from "../../styles/ServicePage.module.css";

import { FloatingWhatsApp } from "react-floating-whatsapp";

const myLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 100}`
}
const Food = (props) => {



    return (
        <section>
        
    <Head>
        <title>NettyFish - Food & Beverages</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
    </Head>
            <div >
                <div className={styles.banner}>
                    {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <Row>
                        <Col md={7} className="offset-2">
                            <p className={styles.title}>Food & Beverages</p>
                            <p className={styles.breadcrumb}><a className={styles.home}  href="/">Home</a> &gt;&gt; Food & Beverages</p>
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
                                src="assets/1653478694_ezgif.com-gif-maker (37).webp"
                                alt="Picture of the author"
                                height={300}
                                width={500}
                                quality={100}
                                priority
                                layout="responsive"
                            />
                        </Col>
                        <Col md={6} className={styles.content} >
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
                            <h1 className={styles.heading}>RCS solution for restaurants</h1>
                            <p >Food and beverage Chatbot connect with users, give them with required information about menus and healthy recipes, or even trigger some effective actions, such as adding dishes to a cart or closing an account upon request.</p>
                            <p >To copy human replies, chatbots can use artificial intelligence (AI). While texting with specific virtual assistance, sometimes they not even realize that they are talking to machines and not with humans.</p>
                            <p>Numerous popular food brands, such as The Subway, WholeFoods, and Burger King have started using chatbots for communicating with their customers.</p>
                        </Col>

                    </Row>
                </div>

                <div >
                    <Row style={{ borderBottom: "2px solid #97949436" }}>
                        <Col md={6} className={styles.content} style={{ paddingBottom: "30px" }}>
                          
                            <h1 className={styles.heading}>Food & Beverages</h1>
                            <p >AI-powered Food and beverages industry like food manufacturers and restaurants use chatbot services that give automatic 24/7 response for customers food orders and delivery. Restaurant chatbot is also being used for issues, complaints or change in order with immediate responses.</p>
                            <p >Chatbot is mainly used by 5-star hotels which has multi cuisines and dining customers book table and different places, this reservation of table is also an automated process which saves time as it is integrated with existing table booking software using whatsapp API.</p>
                            <p>It can send automated customer requested information from the software, so manually searching, exporting of data is not required. Also while many restaurants are struggling to engage customers and answer their queries, this AI chatbot make it easy to communicate with the customers. </p>
                        </Col>

                        <Col md={6} style={{ alignSelf: "center" }}>
                            <Image
                            loader={myLoader}
                                src="assets/1653478773_ezgif.com-gif-maker (38).webp"
                                alt="Picture of the author"
                                height={300}
                                width={500}
                                quality={100}
                                priority
                                layout="responsive"
                            />
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


                                <h1 className={styles.heading} >Food & Beverages Solutions AI - Auto WhatsApp Chatbot</h1>

                                <p className={styles.pera}>Food & Beverages WhatsApp Chatbot</p>


                            </Col>
                        </Row>

                        <div>

                            <div >
                                <div className={styles.border}>
                                    <Row >
                                        <Col md={4} style={{ alignSelf: "center" }}>
                                            <Image
                                                loader={myLoader}
                                                src="assets/1652520488_r store.gif"
                                                alt="Picture of the author"
                                                width={300}
                                                height={550}
                                                quality={100}
                                                priority
                                            />
                                        </Col>
                                        <Col md={8} style={{ alignSelf: "center" }}>
                                            {/* <h2 className={styles.card_heading}>Benefits of IVR</h2> */}
                                            <p>Nettyfish Chatbot provides solutions for food and beverage industry with complete automation in restaurant management activities that saves the time of restaurant managers as well as the customers. Restaurant virtual assistant uses Artificial Intelligence specifically designed to do the role of Restaurant manager.</p>
                                            <p>While most of the restaurant uses billing softwares and a manager to handle, bot services are being very convenient with a feature to integrate with existing applications. Restaurant assistant is mainly used for Review order, Change in Order, Menu delivery, Cancellation, billing and many activities in restaurant. </p>
                                            <p className={styles.sub_content}>Restaurant assistant is available 24x7 and handles:</p>
                                            <ol className={styles.ol}>
                                                <li>Incoming queries from customers</li>
                                                <li>Sharing of Food Menu qr code</li>
                                                <li>Special Menu dishes</li>
                                                <li>Reporting issues</li>
                                                <li>In taking up feedback</li>
                                                <li>In tracking food delivery</li>
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

export default Food;