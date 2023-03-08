
import { Card, Grid, Text } from "@nextui-org/react";
import styles from "../../styles/Blog.module.css";
import { Container,Row,Col} from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Head from "next/head"
import Script from "next/script"
import Link from "next/link"
import Image from 'next/image';
import AOS from 'aos'
import React, { useEffect, useState } from 'react';

import { FloatingWhatsApp } from "react-floating-whatsapp";

const myLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 100}`
  }

export default function Blog() {

  const [isBrowser, setIsBrowser] = useState(false);
  const showChatbotPopup = () => {
      if (typeof window !== 'undefined' && window.wacto) {
        window.wacto.open();
      }
    };
  useEffect(() => {
      setIsBrowser(true);
    }, []);
  
    useEffect(() => {
      if (isBrowser) {
        const script = document.createElement('script');
        script.async = true;
        script.defer = true;
        script.type = 'text/javascript';
        script.src = 'https://app.wacto.in/static/js/widget.js?config=' + encodeURIComponent(JSON.stringify({
          bot_key: '26493f2dc1864025',
          welcome_msg: true,
          branding_key: 'wacto',
          server: 'https://app.wacto.in',
          e: 'p'
        }));
        document.head.appendChild(script);
      }
    }, [isBrowser]);
  
    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    }, [])

  const list = [
    {
      title: "Benefits of sending Smart SMS",
      img: "/assets/1658997276_Why IVR in Healthcare Sector.png",
      price: "1. Receive Feedback -  You use the Smart SMS option in order to receive feedback from your customers.it is import",
      seemore: "See More",
    },
    {
      title: "How to Use WhatsApp Chatbot for Lead Generation",
      img: "/assets/1659080384_Whatsapp Chatbot.png",
      price: "Introduction Lead generation is attracting, identifying, and gathering the correct",
      seemore: "See More",
    },
    {
      title: "Why Implement WhatsApp API for E-Commerce?",
      img: "/assets/1659161680_Whatsapp Business API in E- Commerce.png",
      price: "Introduction of WhatsApp API and E-commerce Business WhatsApp and Ecommerce are l",
      seemore: "See More",
    },
    {
      title: "Why SMS Marketing is Perfect for the Automobile Industry",
      img: "/assets/1659354655_Bulk SMS in Different Sector.png",
      price: "Are you planning to do bulk SMS marketing for your automobile company? Let’",
      seemore: "See More",
    },
    {
      title: "WhatsApp Chatbots for The Food & Beverage Industry",
      img: "/assets/1659431742_Bulk sms in Automobiles.png",
      price: "Introduction of WhatsApp business API with Chatbot",
      seemore: "See More",
    },
    {
      title: "How SMS Builds Customer Relationships?",
      img: "/assets/1659596269_How SMS Builds Customer Relationships.png",
      price: "Introduction of SMS marketing SMS Marketing is a useful tool in several ways. SMS",
      seemore: "See More",
    },
    {
      title: "What is WhatsApp Business API - The Complete Guide",
      img: "/assets/1659684425_What is Whatsapp API.png",
      price: "What is WhatsApp API? WhatsApp API is an application program interface that helps",
      seemore: "See More",
    },
    {
      title: "Do you need to Boost Your Customer Experience with Voice Call Support?",
      img: "/assets/1659776881_Voice Call.png",
      price: "Different types of voice call and customer care services Introduction",
      seemore: "See More",
    },
  ];

  return (
    <>
    <Head>
    <Script strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `!function(e,t,a){var c=e.head||e.getElementsByTagName("head")[0],n=e.createElement("script");n.async=!0,n.defer=!0, n.type="text/javascript",n.src=t+"/static/js/widget.js?config="+JSON.stringify(a),c.appendChild(n)}(document,"https://app.wacto.in",{bot_key:"26493f2dc1864025",welcome_msg:true,branding_key:"wacto",server:"https://app.wacto.in",e:"p" })`.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
  return '&#'+i.charCodeAt(0)+';';
})}} />
    <title>Nettyfish Solutions | Latest Blogs, News, and Updates </title>
    <meta name="description" content="Nettyfish Solutions is a blog that provides news, blogs, and updates on the latest developments in the Nettyfish Solution."/>

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
          <p className={styles.title}>Blogs</p>
          <p className={styles.breadcrumb}><a className={styles.home} href="/">Home</a> &gt;&gt; Blogs</p>
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
              <Row wrap="wrap" justify="space-between" >
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
    <div className="sticky-social">
  <ul className="social">
  <li className="insta pt-3"><a href="https://www.nettyfish.in/NF_Services.pdf" target="_blank" ><img  src="./assets/pdf_pdf.svg"/></a></li>
    <li className="insta"><a href="https://www.instagram.com/nettyfishsolutions/" target="_blank"><img src="./assets/insta1.png"/></a></li>
        <li className="insta"><a href="https://www.facebook.com/nettyfishsolutions" target="_blank"><img src="./assets/face1.png"/></a></li>
      <li className="insta"><a href="https://twitter.com/Nettyfish_offic" target="_blank" ><img src="./assets/twit1.png"/></a></li>     
      <li   className="insta whatsapp-csm"><FloatingWhatsApp
                                    className="twitter12"
                                     phoneNumber=" 8608666111"
                                     accountName="Nettyfish"
                                     allowEsc
                                     allowClickAway
                                     notification
                                     notificationSound
                                     avatar="./assets/nettyfish.png"
                    
                          /></li>
         {/* <li className=""><a   
 target="_blank" >
                                            <Image
                                           
                                        className="Twitter1"
                                                src="/assets/wacto.png"
                                                alt="Picture of the author"
                                                width={60}
                                                height={60}
                                            />
                                            </a>
                                            </li> */}
                                           {/* <li className="wtsapp"><a href="https://api.whatsapp.com/send?phone=8608666111&"  target="_blank"><img src="./assets/Whats1.png"/></a>
</li> */}


    </ul>
   
  </div>

    </div>
    </div>
    </>
  );
}
