import React, { useEffect, useState } from 'react';
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
    <Script strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `!function(e,t,a){var c=e.head||e.getElementsByTagName("head")[0],n=e.createElement("script");n.async=!0,n.defer=!0, n.type="text/javascript",n.src=t+"/static/js/widget.js?config="+JSON.stringify(a),c.appendChild(n)}(document,"https://app.wacto.in",{bot_key:"26493f2dc1864025",welcome_msg:true,branding_key:"wacto",server:"https://app.wacto.in",e:"p" })`.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
  return '&#'+i.charCodeAt(0)+';';
})}} />
    <title>Nettyfish Solutions - Corporate Event Management</title>
    <meta name="description" content="Nettyfish Solutions offers a wide variety of corporate events, from team-building exercises to lavish galas. Our experienced team will make your event a success"/>

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
