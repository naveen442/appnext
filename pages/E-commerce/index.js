import Link from "next/link"
import Head from "next/head"
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image'
import styles from "../../styles/ServicePage.module.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";


const myLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 100}`
}
const Ecommerce = (props) => {

    


    return (
        <section>
        <Head>
        <title>NettyFish - E-commerce Solutions</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
    </Head>
            <div >
                <div className={styles.banner}>
                    {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <Row>
                        <Col md={7} className="offset-2">
                            <p className={styles.title}>E-commerce Solutions</p>
                            <p className={styles.breadcrumb}><a className={styles.home}  href="/">Home</a> &gt;&gt; E-commerce Solutions</p>
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
                            src="assets/1652849126_ezgif.com-gif-maker (22).webp"
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
                                src="assets/E-commerce Solutions.png"
                                alt="Picture of the author"
                                width={380}
                                height={250}
                                quality={100}
                                priority
                               
                            />
                        </div>
                        <h1 className={styles.heading}>E-commerce Solutions</h1>
                        <p >An eCommerce chatbot is an AI based Intelligent Virtual Assistant solution that can be executed by online distributors to attract end users at every single phase of their journey.</p>
                        <p >Enterprises nowadays can use chatbots to connect immediately with their customers and sort out their problems on various platforms, like social media or online retail store.</p>
                       <p>These 24*7 bots are using Artificial Intelligence to include customer’s choice and build a effective, customized shopping experience.</p>
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


                            <h1 className={styles.heading} >E-commerce Solutions AI - Auto WhatsApp Chatbot</h1>

                            <p className={styles.pera}>E-commerce WhatsApp Chatbot</p>


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
                                            layout="responsive"
                                        />
                                    </Col>
                                    <Col md={8} style={{ alignSelf: "center" }}>
                                        {/* <h2 className={styles.card_heading}>Benefits of IVR</h2> */}
                                        <p>eCommerce Chatbots are artificially intelligent systems that online retailers can utilize to attract their customers during their course of travel with them.</p>
                                        <p>eCommerce website can make use of this chatbot to reply on the product enquiry in person.</p>
                                       <p>eCommerce is being used for informal marketing and resolving any issues or doubts face by the customers before making a purchase. These bots also provide after sales support brilliantly and immediately without having to include human touch/an agent.</p>
                                        <p className={styles.sub_content}>eCommerce assistance is available 24x7 and it handles:</p>
                                        <ol className={styles.ol}>
                                            <li>Personalize your services</li>
                                            <li>Records real time interactions</li>
                                            <li>Allows executive to focus complex tasks</li>
                                            <li>Fast and reliable customer support</li>
                                            <li>Displaying catalogue across multiple channels</li>
                                           
                                           
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

export default Ecommerce;