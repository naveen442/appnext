import Link from "next/link"
import Head from "next/head"
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image'
import styles from "../../styles/ServicePage.module.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";


const myLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 100}`
}
const Community = (props) => {



    return (
        <section>
        
    <Head>
        <title>NettyFish - Community</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
    </Head>
            <div >
                <div className={styles.banner}>
                    {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <Row>
                        <Col md={7} className="offset-2">
                            <p className={styles.title}>Community</p>
                            <p className={styles.breadcrumb}><a className={styles.home}  href="/">Home</a> &gt;&gt; Community</p>
                        </Col>
                    </Row>
                </div>
            </div>
            <Container>
                {/* <<<<<<<<<<<<<<<<<<<<< Second Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <div className={styles.pt_30}>
                <Row style={{ borderBottom: "2px solid #97949436" }} >


                    <Col md={6} style={{ alignSelf: "center" }}>
                        <Image
                        loader={myLoader}
                            src="assets/1653477507_ezgif.com-gif-maker (33).webp"
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
                                src="assets/Community.png"
                                alt="Picture of the author"
                                width={380}
                                height={270}
                                quality={100}
                                priority
                               
                            />
                        </div>
                        <h1 className={styles.heading}>Community</h1>
                        <p >In Community Chatbot, through replying to needless questions and assisting people to appropriate forums, a bot helps a community avoid some sort of data contamination.</p>
                        <p >Bots can also help cogitatively, by identifying questions that have been raised and then actually replying them.</p>
                       <p>Community Chatbots are designed to provide the best information experience for people who enjoy that type of interaction without having to staff 1,000 agents to respond to chats.</p>
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


                            <h1 className={styles.heading} >Community AI - Auto WhatsApp Chatbot</h1>

                            <p className={styles.pera}>Community WhatsApp Chatbot</p>


                        </Col>
                    </Row>

                    <div>

                        <div >
                            <div className={styles.border}>
                                <Row >
                                    <Col md={4} style={{ alignSelf: "center" }}>
                                        <Image
                                            loader={myLoader}
                                            src="assets/1653128776_ezgif.com-gif-maker-_5_.gif"
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
                                        <p>Community Chatbot automates the activities of domain-specific community and users. This eventually reduces the manual intervention. Communities can cut down costs and onboarding time dramatically by building such an infrastructure with the help of a chatbot.</p>
                                        <p>There are many expanding communities where you can share your chatbots, recognize new chatbots, learn how to use new tools, compare the structure, and keep up with recognitions.</p>
                                       
                                        <p className={styles.sub_content}>Community assistance is available 24x7 and it handles:</p>
                                        <ol className={styles.ol}>
                                            <li>Personal assistant</li>
                                            <li>Secure login</li>
                                            <li>Community guidelines</li>
                                            <li>Privacy and reliability</li>
                                            <li>Feedback sheets</li>
                                           
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

export default Community;