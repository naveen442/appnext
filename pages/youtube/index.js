import React, { useEffect } from 'react';
import { Card, Grid, Text } from "@nextui-org/react";
import styles from "../../styles/Blog.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head"
import Script from "next/script"
import Link from "next/link"
import Image from 'next/image';
import AOS from 'aos'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

import { FloatingWhatsApp } from "react-floating-whatsapp";

const myLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 100}`
}

export default function Youtube() {


  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, [])

  const list = [
    {
      title: "Nettyfish whatsapp chatbot",
      video_id: "eWTDvNhko3g",
    },
    {
      title: "Send Smart SMS - URL Tracking",
      video_id: "Cc2xlQFH5iU",
    },
    {
      title: "Header/ Sender ID registration on DLT Portal",
      video_id: "EAFqEudgz8I",
    },
    {
      title: "Enterprise Messaging",
      video_id: "-xjM-6zRY0g",
    },
    {
      title: "How to send Voice broadcast?",
      video_id: "W-hJK2CKuVk",
    },
    {
      title: "Uses of Smart SMS",
      video_id: "Cc2xlQFH5iU",
    },
  ];

  return (
    <>
      <Head>
        <title>Nettyfish - E-Manuals</title>
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
              <p className={styles.title}>E-Manuals</p>
              <p className={styles.breadcrumb}><a className={styles.home}  href="/">Home</a> &gt;&gt; E-Manuals  </p>
            </Col>
          </Row>
        </div>
      </div>


      <div className={styles.backdrop_color}>
        <div className={styles.backdrop} >
          <Container >
            <div className={styles.mt_150}>
              <Image
                loader={myLoader}
                src="assets/HEADER.png"
                alt="Picture of the author"
                width={310}
                height={300}
                quality={100}


              />
            </div>

            <Grid.Container gap={2} justify="flex-start">

              {list.map((item, index) => (

                <Grid xs={12} sm={4} key={index}>
                  <div data-aos="fade-down" style={{width:"-webkit-fill-available"}}>
                    <Card isPressable>
                      <Card.Body css={{ p: 0 }}>
                        <LiteYouTubeEmbed
                          id={item.video_id}
                          title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
                        />
                      </Card.Body>
                      <Card.Footer css={{ justifyItems: "flex-start" }}>
                        <Row wrap="wrap" justify="space-between" >
                          <Text b>{item.title}</Text>
                        </Row>
                      </Card.Footer>
                    </Card>
                  </div>
                </Grid>

              ))}

            </Grid.Container>

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
    </>
  );
}
