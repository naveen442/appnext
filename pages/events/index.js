import React, { useEffect } from 'react';
import { Card,Grid,Text } from "@nextui-org/react";
import styles from "../../styles/Blog.module.css";
import { Container,Row,Col} from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Head from "next/head"
import Script from "next/script"
import Link from "next/link"
import Image from 'next/image';
import AOS from 'aos';
import { FloatingWhatsApp } from "react-floating-whatsapp";



const myLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 100}`
  }

export default function Events() {


    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    }, [])

  const list = [
    {
      title: "Nettyfish 9th Anniversary Celebration And Year Plan",
      img: "/assets/1654319165_1652521389_Photo 6 (1).webp",
      price: "This year 2022 in the month of March, here at Nettyfish we celebrated our 9th anniverssary at our office premises in Chennai.  Prese",
      seemore: "See More",
    },
    {
      title: "Get together",
      img: "/assets/1654319465_Lunch.webp",
      price: "Bringing Team together for a lunch is exactly the way we find it easy to communicate over a meal.  This would be the tasty option for employee",
      seemore: "See More",
    },
    {
      title: "Physical Event TiECON 2022 - Chennai",
      img: "/assets/1663244289_event tie sandhai 03.png",
      price: "Event: Marketplace and Entrepreneur to Network Date: 8th Oct, 2022 Venue: IITM Research Park,",
      seemore: "See More",
    },
  ];

  return (
    <>
    <Head>
    <title>Nettyfish - Events</title>
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
          <p className={styles.title}>Events</p>
          <p className={styles.breadcrumb}><a className={styles.home}  href="/">Home</a> &gt;&gt; Events</p>
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
        <div data-aos="fade-down"> 
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={item.img}
                objectFit="contain"
                width="100%"
              
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between">
                <Text b>{item.title}</Text>
                <Text css={{ fontSize: "$sm",paddingTop:"10px" }}>
                  {item.price}
                </Text>
                <Text css={{ fontSize: "$sm",paddingTop:"10px" }}>
                  {item.seemore } <BsFillArrowRightCircleFill/>
                </Text>
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
