
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
import React, { useEffect, useState } from 'react';

import { FloatingWhatsApp } from "react-floating-whatsapp";

const myLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 100}`
}

export default function Youtube() {
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
      <Script strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `!function(e,t,a){var c=e.head||e.getElementsByTagName("head")[0],n=e.createElement("script");n.async=!0,n.defer=!0, n.type="text/javascript",n.src=t+"/static/js/widget.js?config="+JSON.stringify(a),c.appendChild(n)}(document,"https://app.wacto.in",{bot_key:"26493f2dc1864025",welcome_msg:true,branding_key:"wacto",server:"https://app.wacto.in",e:"p" })`.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
  return '&#'+i.charCodeAt(0)+';';
})}} />
        <title>Nettyfish Solution - Tutorial Product Videos</title>
        <meta name="description" content="Nettyfish Solution provides tutorial product videos to help you learn how to use our software."/>

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
