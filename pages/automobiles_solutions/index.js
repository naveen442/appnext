import Link from "next/link"
import Head from "next/head"
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image'
import styles from "../../styles/ServicePage.module.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";


const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 100}`
}
const Automobile = (props) => {

  


    return (
        <section>
          <Head>
        <title>NettyFish - Automobiles Solutions</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
    </Head>
            <div >
                <div className={styles.banner}>
                    {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <Row>
                        <Col md={7} className="offset-2">
                            <p className={styles.title}>Automobiles Solutions</p>
                            <p className={styles.breadcrumb}><a className={styles.home}  href="/">Home</a> &gt;&gt; Automobiles Solutions</p>
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
                            src="/assets/1653477359_ezgif.com-gif-maker (32).webp"
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
                                src="/assets/Automobiles.png"
                                alt="Picture of the author"
                                width={380}
                                height={270}
                                quality={100}
                                priority
                               
                            />
                        </div>
                        <h1 className={styles.heading}>Whatsapp API for Automobile dealers</h1>
                        <p >Nettyfish Bot assistant gives automated service reminders for all the customers who have purchased from their showroom. This automates the process of booking service appointments. In case of new purchase, all enquiries are being answered instantly by bot assistant about the car details, car models, car pricing, car recommendations with car images, mileage details, comparison with other cars, booking test drives, address the queries about breakdown, repair and maintenance support.</p>
                        <p >It also helps in qualifying the leads and prioritize the leads and does the complete sales process without human intervention.</p>
                    </Col>

                </Row>
            </Container>
            {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

            <div >
                <Container>

                    <Row >
                        <Col md={12} >


                            <h1 className={styles.heading} >Automobiles Solutions AI - Auto WhatsApp Chatbot</h1>

                            <p className={styles.pera}>Automobiles WhatsApp Chatbot</p>


                        </Col>
                    </Row>

                    <div>

                        <div >
                            <div className={styles.border}>
                                <Row >
                                    <Col md={4} style={{ alignSelf: "center" }}>
                                        <Image
                                            loader={myLoader}
                                            src="/assets/1653886666_ezgif.com-gif-maker.gif"
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
                                        <p>Nettyfish Chatbot provides solutions for Automotive industry with complete automation in interacting for customer queries about finding a new car, auto brands, financing options, car parts, car tires, reminders about service. Automobile virtual assistant uses Artificial Intelligence specifically designed to do the role of Agents answering customer queries in showroom.</p>
                                        <p>While most of the automobiles  takes time to attend customers who visit the showrroom, they have no time to chat on mobile to share new brands of cars but whatsapp chatbot services are being very convenient with a feature automatically respond customers by sharing videos and images of newly launched car models and it enables customer to book a test drive online by giving a scheduled date and time for test drive.</p>
                                        <p>Automotive assistant is also used for collecting required documents for financial support and loan arrangements and collect all required documents on phone. </p>
                                        <p className={styles.sub_content}>Automotive assistant is available 24x7 and handles :</p>
                                        <ol className={styles.ol}>
                                            <li>Incoming queries from customers</li>
                                            <li>Sharing images of new brand cars</li>
                                            <li>Finance arrangements</li>
                                            <li>Reporting issues</li>
                                            <li>In taking up feedback</li>
                                            <li>Service reminders</li>
                                        </ol>
                                    </Col>
                                </Row>
                            </div>

                        </div>
                       



                    </div>

                </Container>
            </div>

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



        </section>
    );
};

export default Automobile;