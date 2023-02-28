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
const RichCommunicationService = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, [])


  return (
    <section>
      <Head>
        <title>Nettyfish - Rich Communication Service</title>
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
              <p className={styles.title}>Rich Communication Service</p>
              <p className={styles.breadcrumb}><a className={styles.home} href="/">Home</a> &gt;&gt; Rich Communication Service</p>
            </Col>
          </Row>
        </div>
      </div>
      {/* <<<<<<<<<<<<<<<<<<<<< Second Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <div className={styles.backdrop_color}>
        <div className={styles.backdrop} >
          <Container >

            <Row>
              <Col md={6} style={{ alignSelf: "center", textAlign: "center" }}>
                <div data-aos="fade-up" >
                  <Image
                    loader={myLoader}
                    src="assets/rich_communication_sms_2.png"
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
                  <div className={styles.mt_150}>
                    <Image
                      loader={myLoader}
                      src="assets/Rich_Communication_Service.png"
                      alt="Picture of the author"
                      width={380}
                      height={260}

                    />
                  </div>
                  <p className={styles.heading}>Rich Communication SMS</p>
                  <p>Businesses are using SMS to communicate with their customers. RCS (Rich Communication Services) is SMS with your own company branding where you can use your logo, this SMS service is interactive, and you call also showcase your products here. RCS can also be used with the default messaging app</p>
                  <br />
                  <p>Now many Businesses started to use RCS for branding and to interact easily with their customers. RCS messages are being used by millions of android users worldwide.</p>
                  <br />
                  <p>Compared to normal text SMS, there is increase in redemption rate because of the initiation of interactions in SMS and display of images and bot with immediate response.</p>

                </div>
              </Col>

            </Row>
          </Container>
        </div>
        {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}


        {/* <<<<<<<<<<<<<<<<<<<<< Fourth Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

        <div >
          <Container>

            <Row>

              <Col md={6} style={{ alignSelf: "center", marginBottom: 50 }}>








                <h1 className={styles.heading} >Features of Rich Commication services are </h1>
                <ul className={styles.ul1}>
                  <li><h6 className={styles.home}>
                    <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> 
                    Branding on messaging app with Company Name and logo:  </h6>
                    <p>The logo appears along the side of each message in the bot auto-response</p>
                  </li>

                  <li><h6 className={styles.home}>
                    <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} /> 
                    Customer Engagement with Quick Auto-response:  </h6>
                    <p>Quick conversations are created with button to action feature
                    </p>
                  </li>

                  <li><h6 className={styles.home}> 
                  <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} />
                    Blue Badge Verification:  </h6>
                    <p>Provides tickmark for the brand to show that it is a verified business</p>
                  </li>

                  <li><h6 className={styles.home}>
                    <Image
                    loader={myLoader}
                    src="./assets/list1.gif"
                    alt="Picture of the author"
                    width={30}
                    height={30} />
                    Carousels:

                  </h6>
                    <p>Customer can browse, scroll and view images of products for shopping

                    </p>
                  </li>



                </ul>


              </Col>

              <Col md={6} style={{ alignSelf: "center" }}>
                <Image
                  loader={myLoader}
                  src="assets/rich_communication_sms_1.png"
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











      </div>


    </section>
  );
};

export default RichCommunicationService;