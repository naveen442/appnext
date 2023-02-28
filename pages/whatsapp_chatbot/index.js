import Link from "next/link"
import Head from "next/head"
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image'
import styles from "../../styles/Enterprise.module.css";
import { Card, Grid, Text } from "@nextui-org/react";
import React, { useEffect } from 'react';
import AOS from 'aos'
import Script from "next/script"
import { FloatingWhatsApp } from "react-floating-whatsapp";

const myLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 100}`
}
const WhatsappChatbot = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, [])


  return (
    <section>
      <Head>
        <title>Whatsapp - Chatbot</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
      </Head>
      <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>
      <div >
        <div className={styles.banner}>
          {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <Row>
            <Col md={7} className="offset-2">
              <p className={styles.title}>Whatsapp - Chatbot</p>
              <p className={styles.breadcrumb}><a className={styles.home} href="/">Home</a> &gt;&gt; Whatsapp - Chatbot</p>
            </Col>
          </Row>
        </div>
      </div>
      {/* <<<<<<<<<<<<<<<<<<<<< Second Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <div className={styles.backdrop_color}>
        <div className={styles.backdrop} >
          <Container >

            <Row>


              <Col md={12} style={{ alignSelf: "center" }}>
               
                  <div className={styles.mt_150}>
                    <Image
                      loader={myLoader}
                      src="assets/Whatsapp ChatBot.png"
                      alt="Picture of the author"
                      width={380}
                      height={300}

                    />
              

                  <p className={styles.heading}>Why is WhatsApp Business API for Business?</p>
                  <p>Now a day most customers and people like to make every process of purchase, communication, and customer support comfortable and easy. WhatsApp API gives the best solution for customer handling and business automation in the world’s most famous communication platform. WhatsApp API and WhatsApp chatbot have more benefits in business branding and handling.

                  </p>
                </div>
              </Col>

            </Row>
          </Container>
        </div>
        {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

        <div className={styles.p_100}>
          <Container >

            <Row>
              <Col md={6} style={{ alignSelf: "center" }}>
                <div data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom">
                  <p className={styles.heading2}>Business automation via WhatsApp API  </p>
                  <p>Business automation is a process of making the customer buy or get service from their beloved platforms. WhatsApp automation feature helps in automating the purchase through or getting the service from WhatsApp without visiting the website or other applications.  WhatsApp Business API helps to create the product showcase and product store in the WhatsApp business application. WhatsApp API is having the feature of integrating the WhatsApp button on the website. When they click the WhatsApp button it will directly redirect to their WhatsApp chat with our chat. It will help the visitors to contact you comfortably. Nettyfish WhatsApp API provides the best marketing, communication, and online platform for your business. </p>
                </div>
              </Col>
              <Col md={6} style={{ alignSelf: "center", textAlign: "center" }}>
                <div data-aos="fade-up" style={{ padding: "50px", paddingBottom: "20px" }}>
                  <Image
                    loader={myLoader}
                    src="assets/whatsapp_chatbot_1.png"
                    alt="Picture of the author"
                    height={500}
                    width={500}
                    quality={100}
                    layout="responsive"
                  />
                </div>
              </Col>


            </Row>
          </Container>
        </div>


        {/*---------------*/}
        <div className={styles.p_10}>
          <Container >

            <Row>
              <Col md={6} style={{ alignSelf: "center", textAlign: "center" }}>
                <div data-aos="fade-up" style={{ padding: "50px" }}>
                  <Image
                    loader={myLoader}
                    src="assets/whatsapp_chatbot_2.png"
                    alt="Picture of the author"
                    height={500}
                    width={500}
                    quality={100}
                    layout="responsive"
                  />
                </div>
              </Col>

              <Col md={6} style={{ alignSelf: "center" }}>
                <div data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom">

                  <p className={styles.heading2}>Automate Customer Engagement with the WhatsApp chatbot   </p>
                  <p>Every business wants customers, and every business faces the lack of handling customers in the demand situation, during non-business hours and peak hours. WhatsApp chatbot is the best solution for engaging customers in their favourite chat communication platform. WhatsApp chatbot provides instant quick replies and conversation flow. it will reduce 80-90% of human or agent involvement, solving queries, intaking of feedback and broadcasting campaigns, etc. WhatsApp chatbot is the smartest communication feature of business automation and customer support. Also, it helps in converting your leads to conversion and you can win customer engagement easily and efficiently. </p>
                </div>
              </Col>



            </Row>
          </Container>
        </div>

        {/* <<<<<<<<<<<<<<<<<<<<< Fourth Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

        <div >
          <Container>

            <Row>


              <Col md={6} style={{ alignSelf: "center" }}>


                <h1 className={styles.heading} >Best Features of WhatsApp Business API’s chatbot </h1>
                <ul className={styles.ul1}>
                  <li><h6 className={styles.home}>
                    <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> 
                    24/7 Auto Chat Support  </h6>
                    <p>Our WhatsApp business API provides 24/7 auto-replies and quick responses to customers when they started a conversation. Don’t worry about the non-business hours</p>
                  </li>
                  <li><h6 className={styles.home}>
                    <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> 
                    Online Store  </h6>
                    <p>WhatsApp Business API’s online shop provides product showcases and business automation. It helps the customer’s buying process without visiting the website or using other apps. </p>
                  </li>
                  <li><h6 className={styles.home}>
                    <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> 
                    WhatsApp marketing   </h6>
                    <p>WhatsApp marketing is a process of branding your business through broadcast messages. You can promote your business or service by sending bulk WhatsApp messages.

                    </p>
                  </li>
                  <li><h6 className={styles.home}>
                    <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> 
                    Customized auto-reply  </h6>
                    <p>You can customize your chatbot replies and chatbot conversation flow based on the customer FAQ or queries. </p>
                  </li>
                  <li><h6 className={styles.home}>
                    <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} />
                     Instant report  </h6>
                    <p>You will get an instant report of customer engagement, customer details, and customer conversation. </p>
                  </li>
                  <li><h6 className={styles.home}>
                    <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> 
                    Remainder  </h6>
                    <p>You can send delivery updates, order details, ticket booking details, etc. to the customers through WhatsApp automation</p>
                  </li>
                  <li><h6 className={styles.home}>
                    <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> 
                    Solving Queries  </h6>
                    <p>WhatsApp chatbot will solve 80-90% of customer support, customer queries, and issues without human interaction. </p>
                  </li>
                  <li><h6 className={styles.home}>
                    <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} />
                     Feedback   </h6>
                    <p>You can use WhatsApp API to intaking feedback from the customers after they purchase your product or used your services.</p>
                  </li>



                </ul>


              </Col>
              <Col md={6} style={{ alignSelf: "center" }}>
                <Image
                  loader={myLoader}
                  src="assets/Comp_products.gif"
                  alt="Picture of the author"
                  height={600}
                  width={550}
                  layout="responsive"
                  quality={100}
                  priority
                />

              </Col>

            </Row>


          </Container>
        </div>

        <div>
          <Container>
            <div className={styles.notes}>
              <h5 >Nettyfish provides the best AI-powered WhatsApp Chatbot provider in India</h5>
              <p >Nettyfish Solutions provides lots of ideas, Smart communication platforms, and digital marketing services for your business betterment. WhatsApp Business API and the WhatsApp chatbot are also one of our major smart communication products. Most people benefit and feel satisfied after utilizing our WhatsApp chatbot in their business. So, if you are planning to implement a WhatsApp chatbot in your business, reach Nettyfish Solutions. we provide the best AI-powered WhatsApp chatbot in India.  </p>

            </div>

          </Container>
        </div>
        <Container>
          <div className={styles.pb_30}>
            <div className={styles.border}>

              <Row >
                <Col md={12} style={{ alignSelf: "center" }}>
                  <h2 className={styles.card_heading}>FAQ: </h2>
                  <p className={styles.subpera}><span>Can I use the WhatsApp API for education sectors? </span><br /> Yes, of course, you can use WhatsApp API for sharing information, classroom activities, exam schedule, and attendance updates. </p>
                  <p className={styles.subpera}><span>What is the conversational support of the WhatsApp chatbot?  </span> <br /> It’s an automated conversation by the WhatsApp chatbot. But it is a two-communication conversation. AI WhatsApp chatbot provides interactive chat support to customers.</p>
                  <p className={styles.subpera}><span>Does really WhatsApp chatbot solve queries?  </span><br />  Yes, it will. WhatsApp chatbot solves most of the queries by conversation flow. but you have to update all the queries and solutions in the chatbot.</p>
                  <p className={styles.subpera}><span>Can I create an online store on WhatsApp?   </span><br />  yes, you can create with product showcase and purchase automation. </p>

                </Col>
              </Row>
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

export default WhatsappChatbot;