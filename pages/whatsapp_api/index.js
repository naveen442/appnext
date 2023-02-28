import Link from "next/link";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/Enterprise.module.css";
import { Card, Grid, Text } from "@nextui-org/react";
import React, { useEffect } from "react";
import AOS from "aos";
import Script from "next/script";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const myLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 100}`;
};
const WhatsappApi = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section>
      <Head>
        <title>Nettyfish - Whatsapp API</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous"
        ></link>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous"
        ></link>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        ></link>
      </Head>
      <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>
      <div>
        <div className={styles.banner}>
          {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <Row>
            <Col md={7} className="offset-2">
              <p className={styles.title}>Whatsapp API</p>
              <p className={styles.breadcrumb}>
                <a className={styles.home} href="/">Home</a>{" "}
                &gt;&gt; Whatsapp API
              </p>
            </Col>
          </Row>
        </div>
      </div>
      {/* <<<<<<<<<<<<<<<<<<<<< Second Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <div className={styles.backdrop_color}>
        <div className={styles.backdrop}>
          <Container>
            <Row>
              <Col md={12} style={{ alignSelf: "center" }}>
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                  <p className={styles.heading}>
                    Empower customer rapport with WhatsApp Business API
                  </p>
                  <p>
                    Engage and retain your customers with a good relationship on their favorite conversation platform. Deploy a chatbot that will engage customers across all platforms. Nettyfish  Solutions is the best WhatsApp Business API provider in India
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

        <div className={styles.p_100}>
          <Container>
            <Row>
              <Col md={6} style={{ textAlign: "center" }}>
                <div
                  data-aos="fade-up"
                >
                  <Image
                    loader={myLoader}
                    src="assets/whatsapp_api_1.png"
                    alt="Picture of the author"
                    height={500}
                    width={500}
                    quality={100}
                    layout="responsive"
                  />
                </div>
              </Col>
              <Col md={6} style={{ alignSelf: "center" }}>
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                  <p className={styles.heading2}>
                    Why Does Your Business Need A WhatsApp Business API? {" "}
                  </p>

                  <ul className={styles.ul1}>

                    <li> 
                      <Image
                      loader={myLoader}
                      src="./assets/list1.gif"
                      alt="Picture of the author"
                      width={30}
                      height={30} /> 
                       2 billion users are using WhatsApp as a personal conversation app  </li>
                    <li>
                      <Image
                      loader={myLoader}
                      src="./assets/list1.gif"
                      alt="Picture of the author"
                      width={30}
                      height={30} /> 
                      	90-98% of WhatsApp has a higher open rate of notifications or messages than email  </li>
                    <li>
                      <Image
                      loader={myLoader}
                      src="./assets/list1.gif"
                      alt="Picture of the author"
                      width={30}
                      height={30} />
                       	70-80% of the conversion rate. It is massively higher than other marketing platforms  </li>
                    <li> 
                      <Image
                      loader={myLoader}
                      src="./assets/list1.gif"
                      alt="Picture of the author"
                      width={30}
                      height={30} />	
                      75-85% of the customer queries were resolved and automated       </li>              </ul>

                  .{" "}

                </div>

              </Col>

            </Row>
          </Container>
        </div>
        <div>

          <Container>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <p className={styles.heading2}>
                WhatsApp Marketing  {" "}
              </p>
              <p>
                WhatsApp is the best communication tool and a famous communication tool worldwide. Most people in the world were using WhatsApp for business communication and also for a personal chats. WhatsApp has a huge number of users in all age groups. WhatsApp marketing is a useful tool for every small-scale and big business and company. Most small companies and corporate companies have used WhatsApp marketing to promote their products and send offers to customers. WhatsApp marketing is easy, low-cost, and reaches more people. You can handle the leads from WhatsApp itself. WhatsApp Business API can send bulk WhatsApp messages to more people. You can promote a product, share information, share the status of ticket booking or orders, and also can send offers and discounts to make the customer buy the product.
                .{" "}
              </p>
            </div>
          </Container>
        </div>


        {/* <<<<<<<<<<<<<<<<<<<<< Fourth Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

        <div>
          <Container>
            <Row>
              <Col md={6} style={{ alignSelf: "center" }}>
                <h1 className={styles.heading}>
                  Fast And Secure Promotions On WhatsApp API {" "}
                </h1>
                <ul className={styles.ul1}>
                  <li>
                    <h6 className={styles.home}>
                      <Image
                      loader={myLoader}
                      src="./assets/list1.gif"
                      alt="Picture of the author"
                      width={30}
                      height={30} /> 
                      Send Promotions Via WhatsApp Marketing  </h6>
                    <p>
                      Send promotions through WhatsApp, like promoting products or services, offers, and stock reminders on WhatsApp and get more reliable customers.
                    </p>
                  </li>
                  <li>
                    <h6 className={styles.home}>
                      <Image
                      loader={myLoader}
                      src="./assets/list1.gif"
                      alt="Picture of the author"
                      width={30}
                      height={30} />
                      Online Store </h6>
                    <p>
                      WhatsApp Business API’s online shop provides product
                      showcases and business automation. It helps the customer’s
                      buying process without visiting the website or using other
                      apps.{" "}
                    </p>
                  </li>
                  <li>
                    <h6 className={styles.home}>
                      <Image
                      loader={myLoader}
                      src="./assets/list1.gif"
                      alt="Picture of the author"
                      width={30}
                      height={30} />
                       Sell More Directly On WhatsApp Commerce  </h6>
                    <p>
                      Accelerate more sales and sell more directly on WhatsApp commerce. Buy products or book services on WhatsApp without a click on any other link or website. .
                    </p>
                  </li>
                  <li>
                    <h6 className={styles.home}>
                      <Image
                      loader={myLoader}
                      src="./assets/list1.gif"
                      alt="Picture of the author"
                      width={30}
                      height={30} /> 
                      Send Messages With Customized Buttons  </h6>
                    <p>
                      With WhatsApp Business API, you can create message templates that make it quick and easy to communicate with your customers. Also, broadcasts to share updates and notifications with customized buttons for your customers to engage and interact easily. {" "}
                    </p>
                  </li>
                  <li>
                    <h6 className={styles.home}>
                      <Image
                      loader={myLoader}
                      src="./assets/list1.gif"
                      alt="Picture of the author"
                      width={30}
                      height={30} /> 
                      Customized Notifications to Customers  </h6>
                    <p>
                      Schedule Customized notifications to your customers and engage them on WhatsApp. The customized messages also help to clear abandoned carts on ecommerce. {" "}
                    </p>
                  </li>
                  <li>
                    <h6 className={styles.home}>
                      <Image
                      loader={myLoader}
                      src="./assets/list1.gif"
                      alt="Picture of the author"
                      width={30}
                      height={30} /> 
                      Instant Auto Reply to Queries   </h6>
                    <p>
                      Automate sales, customer support, and query solving with the WhatsApp chatbot. In 10 minutes, you can create and integrate a chatbot with a simple drag-and-drop method. You don't need any help from a developer to create a chatbot. The ability to send automated instant replies and reminders keeps customers informed and motivated to buy. It will reduce human interaction and customer satisfaction.
                    </p>
                  </li>
                  <li>
                    <h6 className={styles.home}>
                      <Image
                      loader={myLoader}
                      src="./assets/list1.gif"
                      alt="Picture of the author"
                      width={30}
                      height={30} /> 
                      Schedule Your Marketing Messages  </h6>
                    <p>
                      WhatsApp Business API allows businesses to send automated, scheduled messages to customers. You can send notifications, reminders, and promotions on specific dates automatically. {" "}
                    </p>
                  </li>

                </ul>
              </Col>
              <Col md={6} style={{ alignSelf: "center" }}>
                <Image
                  loader={myLoader}
                  src="assets/whatsapp_api_2.png"
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

export default WhatsappApi;
