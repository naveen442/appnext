import Link from "next/link"
import Head from "next/head"
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image'
import styles from "../../styles/ServicePage.module.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";


const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 100}`
}
const Logistics = (props) => {

  


    return (
        <section>
          <Head>
        <title>NettyFish - Logistics Solutions
 </title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
    </Head>
            <div >
                <div className={styles.banner}>
                    {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <Row>
                        <Col md={7} className="offset-2">
                            <p className={styles.title}>Logistics Solutions
</p>
                            <p className={styles.breadcrumb}><a className={styles.home}  href="/">Home</a> &gt;&gt; Logistics Solutions
</p>
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
                            src="/assets/logistics.png"
                            alt="Picture of the author"
                            height={300}
                            width={500}
                            quality={100}
                            priority
                            layout="responsive"
                        />
                    </Col>
                    <Col md={6} className={styles.content} style={{ paddingBottom: "30px"  }}>
                    <div className={styles.mt_150}>
              <Image
                loader={myLoader}
                src="assets/Logistics1.png"
                alt="Picture of the author"
                width={380}
                height={300}
                priority
              />
            </div>
                        <h1 className={styles.heading}>Enhanced Marketing Solutions for logistics Business </h1>
                        <p>Our Enhanced Marketing Solutions can help your business to reach its potential within a short period. Nettyfish Solutions streamline the process of customer engagement, lead generation, and conversion with the AI-powered automation process. Our strategic proven Solutions can transform your business powerfully through branding, marketing, competitive intelligence, and more. Our solutions are the best in industries, they are Bulk SMS services, WhatsApp marketing, WhatsApp chatbot, IVR services, Cloud telephony, digital marketing, and omnichannel Solutions.  </p>
                    </Col>

                </Row>
            </Container>


            <Container>
                {/* <<<<<<<<<<<<<<<<<<<<< Second Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <Row style={{ borderBottom: "2px solid #97949436" }}>
                    


  
                    <Col md={6} className={styles.content} style={{ paddingBottom: "30px" }}>
               
                        <h1 className={styles.heading}>Use cases of SMS Service in Logistics Business  </h1>
                        <p>SMS services can be a valuable tool for logistics businesses to improve communication and streamline operations. One of the best benefits of SMS services is the ability to send real-time updates and notifications to customers, drivers, and other stakeholders. It can include information about delivery times, tracking information, and any changes or delays in the delivery schedule. SMS services can help logistics businesses by improving communication with drivers and other staff members. A driver can receive updates on their delivery routes and any changes to the schedule, while managers can send out reminders and instructions to their teams. It can help ensure everyone is on the same page and that deliveries are made on time and without complications. SMS services can also be used to automate certain processes, such as sending out automated delivery confirmations or reminders to customers. This can save time and improve efficiency for logistics businesses, allowing them to focus on other important tasks. SMS services can also be used to improve customer service by providing customers with a convenient way to contact the company with any questions or concerns. It will help to build trust and loyalty with customers, leading to repeat business and positive word-of-mouth recommendations. SMS services can be a valuable tool for logistics businesses to improve communication, streamline operations, and provide better customer service.</p>
                    </Col>
                    <Col md={6} style={{ alignSelf: "center" }}>
                        <Image
                        loader={myLoader}
                            src="/assets/logistics.png"
                            alt="Picture of the author"
                            height={300}
                            width={500}
                            quality={100}
                            priority
                            layout="responsive"
                        />
                    </Col>

                </Row>
            </Container>

            <div >
                <Container>

                    <Row >
                        <Col md={12} >


                            <h1 className={styles.heading} >Logistics Solutions AI - Auto WhatsApp Chatbot
</h1>

                            <p className={styles.pera}>Logistics WhatsApp Chatbot

</p>


                        </Col>
                    </Row>

                    <div>

                        <div >
                            <div className={styles.border}>
                                <Row >
                                    <Col md={4} style={{ alignSelf: "center" }}>
                                        <Image
                                            loader={myLoader}
                                            src="/assets/1652337740_getexk.gif"
                                            alt="Picture of the author"
                                            width={300}
                                            height={550}
                                            quality={100}
                                            priority
                                            layout="responsive"
                                        />
                                    </Col>
                                    <Col md={8} style={{ alignSelf: "center" }}>
                                        <h2 className={styles.card_heading}>Benefits of WhatsApp Business API in Logistics Business </h2> 
                                            <p>WhatsApp Business API is a crucial platform for logistics businesses to streamline their operations and improve customer service. Using WhatsApp API, logistics businesses can easily send automated messages to customers to keep them updated on the status of their deliveries, including tracking information and estimated delivery times. The API allows businesses to create custom menus and automated responses to frequently asked questions, which can help reduce the workload on customer service teams. WhatsApp Business API also allows logistics businesses to send multimedia messages, such as images and videos, which can help to provide customers with more detailed and informative updates on their deliveries. WhatsApp API allows businesses to create chatbots that can help to automate customer service interactions, which can help to improve response times and reduce the workload on customer service teams. </p>
                                         <br></br>  <p>Furthermore, WhatsApp Business API enables logistics businesses to manage multiple conversations with customers simultaneously and also allows them to track performance metrics such as delivery success rates and customer satisfaction levels. This data can be used to improve operations and develop more effective customer service strategies. WhatsApp Business API can help logistics businesses to improve customer service, streamline business, and reduce the workload on customer service teams. It can help logistics businesses to provide customers with timely and detailed updates on their deliveries, automate customer service interactions, and track performance metrics to improve operations.</p>                                        
                                    </Col>
                                </Row>
                            </div>

                        </div>
                       



                    </div>

                </Container>
                <a  href="https://app.wacto.in/admin/login" target="_blank" className="float1">
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

export default Logistics;