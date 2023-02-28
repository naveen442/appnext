import Link from "next/link"
import Head from "next/head"
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image'
import styles from "../../styles/ServicePage.module.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";



const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 100}`
}
const Advertising = (props) => {




    return (
        <section>
            <Head>
        <title>NettyFish - Advertising Agencies</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
    </Head>
            <div >
                <div className={styles.banner}>
                    {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <Row>
                        <Col md={7} className="offset-2">
                            <p className={styles.title}>Advertising Agencies</p>
                            <p className={styles.breadcrumb}><a className={styles.home}  href="/">Home</a> &gt;&gt; Advertising Agencies</p>
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
                            src="/assets/1653477261_ezgif.com-gif-maker (31).webp"
                            alt="Picture of the author"
                            height={300}
                            width={500}
                            quality={100}
                            priority
                            layout="responsive"
                        />
                    </Col>
                    <Col md={6} className={styles.content} style={{ paddingBottom: "30px" }} >
                        <div className={styles.mt_150}>
                            <Image
                                loader={myLoader}
                                src="/assets/Advertising agencies.png"
                                alt="Picture of the author"
                                width={380}
                                height={280}
                                quality={100}
                                priority
                           
                            />
                        </div>
                        <h1 className={styles.heading}>Advertising Agencies RCS</h1>
                        <p >Advertising agencies from digital marketing approaches b2b customers by promotion SMS through RCS. They can display the different types of marketing activities that will be suitable for all type of b2b as well as b2c businesses. Prospects can initiate by selecting required marketing activity that suits their business or they can also go for a free consultation to know about which marketing suits best. It can be used to direct customers to social media pages, and people who have visited to the pages will be captured as a lead. Call to action. Nettyfish RCS services for Marketing Agencies improves up-selling and cross-selling of products.</p>
                        <p >This is also mainly used for making secure payments and facilitate demo materials and onboarding for new customers. There are so many advantages of RCS like informing offers to customers, re-targeting the customers, initiating conversations with existing customers, it increases the ROI multiple times with the help of building conversations that solves customers queries. RCS can be used to get customer feedbacks, surveys, Answers FAQs.</p>
                    </Col>

                </Row>
            </Container>
            {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

            <div >
                <Container>

                    <Row >
                        <Col md={12} >


                            <h1 className={styles.heading} >Advertising Agencies AI - Auto WhatsApp Chatbot</h1>

                            <p className={styles.pera}>Advertising Agencies WhatsApp Chatbot</p>


                        </Col>
                    </Row>

                    <div>

                        <div >
                            <div className={styles.border}>
                                <Row >
                                    <Col md={4} style={{ alignSelf: "center" }}>
                                        <Image
                                            loader={myLoader}
                                            src="/assets/1652528529_vpdh digital marketing.gif"
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
                                        <p>Nettyfish Chatbot provides solutions for Advertising Agency industry with complete automation in interacting for customer queries and marketing activities that saves the time of agents working in the agency as well as the customers. Markting virtual assistant uses Artificial Intelligence specifically designed to do the role of Agents answering customer queries and marketing initiation.</p>
                                        <p>While most of the agencies collects information and analyzes business before setting marketing strategy where they need a manager to handle, bot services are being very convenient with a feature to integrate with existing applications, and initiates pre-set questions regarding marketing required for each business.</p>
                                        <p>Marketing assistant is mainly used for Giving options on what kind of marketing activities need, documents required to initiate marketing. </p>
                                        <p className={styles.sub_content}>Marketing assistant is available 24x7 and handles :</p>
                                        <ol className={styles.ol}>
                                            <li>Incoming queries from customers</li>
                                            <li>Sharing of marketing features and options</li>
                                            <li>Business consultation</li>
                                            <li>Reporting issues</li>
                                            <li>In taking up feedback</li>
                                            <li>In maintaining marketing data</li>
                                        </ol>
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

export default Advertising;