import Link from "next/link";
import Head from "next/head";
import Script from "next/script"
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/ServicePage.module.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import React, { useEffect, useState } from 'react';
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 100}`;
};
const Automobile = (props) => {
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
  return (
    <section>
      <Head>
      <Script strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `!function(e,t,a){var c=e.head||e.getElementsByTagName("head")[0],n=e.createElement("script");n.async=!0,n.defer=!0, n.type="text/javascript",n.src=t+"/static/js/widget.js?config="+JSON.stringify(a),c.appendChild(n)}(document,"https://app.wacto.in",{bot_key:"26493f2dc1864025",welcome_msg:true,branding_key:"wacto",server:"https://app.wacto.in",e:"p" })`.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
  return '&#'+i.charCodeAt(0)+';';
})}} />
        <title>Telecom Software Solutions - Retail Industry | Nettyfish</title>
        <meta name="description" content="Nettyfish Solution is the best telecom software solution for Retail Industry.  We provide a one-stop-shop for all your telecom & Software Automation needs."/>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <div>
        <div className={styles.banner}>
          {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <Row>
            <Col md={7} className="offset-2">
              <p className={styles.title}>Retail Solutions</p>
              <p className={styles.breadcrumb}>
              <a className={styles.home}  href="/">Home</a>{" "}
                &gt;&gt; Retail Solutions
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
              src="/assets/retail.png"
              alt="Picture of the author"
              height={300}
              width={500}
              quality={100}
              priority
              layout="responsive"
            />
          </Col>
          <Col
            md={6}
            className={styles.content}
            style={{ paddingBottom: "30px" }}
          >
            <div className={styles.mt_150} style={{ marginTop: "70px" }}></div>
            <h1 className={styles.heading}>Retail Solutions</h1>

            <p>Boost Your Retail Business Sales With our Marketing Solutions</p>
            <p>
              Are you looking for ways to increase sales and improve customer
              engagement for your retail business? Look no further! Our
              marketing solutions can help boost your business and take it to
              the next level.
            </p>
            <h6 style={{ fontWeight: "bold" }}>
              Attract customers via SMS Marketing Service{" "}
            </h6>
            <p>
              SMS marketing is a powerful tool for retail businesses because it
              helps them to connect with customers and promote their products
              and services separately. SMS marketing allows retailers to send
              personalized messages to their customers, such as special offers,
              promotions, and discounts, which can increase sales and customer
              loyalty. One of the key benefits of SMS marketing for retail
              businesses is that it is an opt-in service, meaning that customers
              have to consent to receive messages from the retailer.
              Additionally, SMS marketing is a cost-effective way for retailers
              to reach their customers. SMS marketing also has a high open rate,
              which means customers are more likely to read the messages and
              take action. SMS marketing allows merchants to engage with
              customers, advertise their products and services, and enhance
              sales.
            </p>
          </Col>
        </Row>
      </Container>
      {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div>
        <Container>
          <Row>
            <Col md={12}>
              <h1 className={styles.heading}>
                Retail Solutions AI - Auto WhatsApp Chatbot
              </h1>

              <p className={styles.pera}>Retail Solutions WhatsApp Chatbot</p>
            </Col>
          </Row>

          <div>
            <div>
              <div className={styles.border}>
                <Row>
                  <Col md={4} style={{ alignSelf: "top" }}>
                    <Image
                      loader={myLoader}
                      src="/assets/1652337912_retail (shopit).gif"
                      alt="Picture of the author"
                      width={300}
                      height={550}
                      quality={100}
                      priority
                      layout="responsive"
                    />
                  </Col>
                  <Col md={8} style={{ alignSelf: "center" }}>
                    <h2 className={styles.sub_content}>
                      Enrich your customer-centric with WhatsApp API{" "}
                    </h2>
                    <p>
                      WhatsApp Marketing can be a crucial tool for retail
                      businesses to engage with customers and increase sales.
                      Using the WhatsApp API, retailers can send attractive
                      messages, including promotions, discounts, and new product
                      announcements to customers. Additionally, WhatsApp API
                      helps businesses to create WhatsApp groups for their
                      customers. Additionally, retailers can use WhatsApp to
                      provide customer support and helps customer with their
                      orders. WhatsApp Marketing can be a valuable tool for
                      retail businesses to connect with customers, increase
                      sales, and improve customer satisfaction. With its ease of
                      use and vast reach, WhatsApp can help the business reach
                      more customers than ever before and grow their business.
                    </p>
                    <h2 className={styles.sub_content}>
                      Reach, target, and engage more audiences with Omnichannel
                      marketing
                    </h2>

                    <p>
                      Omnichannel marketing is a strategy that helps retail
                      businesses reach customers through multiple channels,
                      including in-store, online, and mobile. This approach
                      allows businesses to create a seamless customer experience
                      by providing a consistent message and branding across all
                      channels. By tracking customer interactions across
                      different channels, retailers can gain valuable insights
                      into what drives customer behaviour and use this
                      information to create more targeted marketing campaigns.
                      The retailer can boost consumer loyalty and repeat
                      business by delivering a smooth and personalized
                      purchasing experience. Additionally, by using data from
                      different channels to create targeted promotions and
                      offers, the retailer can attract new customers and drive
                      sales. Omnichannel marketing is an effective strategy for
                      retail businesses to increase customer engagement, sales,
                      and revenue. Retailers may build a strong brand and boost
                      consumer loyalty by delivering a smooth and customized
                      purchasing experience across numerous platforms.
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
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
    </section>
  );
};

export default Automobile;
