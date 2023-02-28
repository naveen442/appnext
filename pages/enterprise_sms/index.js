import Link from "next/link"
import Head from "next/head"
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image'
import styles from "../../styles/Enterprise.module.css";
import { Card, Grid, Text } from "@nextui-org/react";
import React, { useEffect } from 'react';
import AOS from 'aos'
import Script from "next/script";
import { FloatingWhatsApp } from "react-floating-whatsapp";


const myLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 100}`
}
const Enterprise = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, [])


  return (
    <section>
      <Head>
        <title>Nettyfish - Enterprise SMS</title>
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
              <p className={styles.title}>Enterprise SMS</p>
              <p className={styles.breadcrumb}><a className={styles.home} href="/">Home</a> &gt;&gt; Enterprise SMS</p>
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
                    src="assets/enterprise_sms_1.png"
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
                      src="assets/Enterprise SMS.png"
                      alt="Picture of the author"
                      width={260}
                      height={250}
                      quality={100}


                    />
                  </div>
                  <p className={styles.heading}>Best Bulk SMS Service Provider in India</p>
                  <p>Businesses and corporate companies can leverage bulk SMS for marketing and communication purposes to promote or communicate with millions of audiences in a cost-effective manner. Bulk SMS is the easiest way to connect people or customers through mobile phones without an internet specialty. Most sectors use the bulk SMS feature for different purposes.</p>
                  <br />
                  <p>Bulk SMS is used for sending messages to clients and customers, circulars for employees, activities, reports for students, etc. Nettyfish provides the best bulk SMS API service in India. Choose Nettyfish for better service and friendly customer support. </p>
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

                  <p className={styles.heading2}>Enterprise Bulk SMS Services </p>
                  <p>Enterprise bulk SMS is a cost-effective solution for many sectors. This bulk SMS service allows you to send all types of marketing messages, promotions, business communications, notifications, OTP services, and promotional SMS with attachments. Also, you can send customized messages to customers, clients, and employees in more than 20 multilingual languages. </p>
                </div>
              </Col>
              <Col md={6} style={{ alignSelf: "center", textAlign: "center" }}>
                <div data-aos="fade-up" style={{ padding: "50px" }}>
                  <Image
                    loader={myLoader}
                    src="assets/enterprise_sms_2.png"
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

        {/* <<<<<<<<<<<<<<<<<<<<< Fourth Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

        <div >
          <Container>

            <Row>

              <Col md={6} style={{ alignSelf: "center"}}>
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
              <Col md={6} style={{ alignSelf: "center"}}>


                <h1 className={styles.heading} >Attract your customers </h1>
                <ul className={styles.ul1}>
                  <li> <Image
                loader={myLoader}
                src="./assets/list1.gif"
                alt="Picture of the author"
                width={30}
                height={30} /> Sending offers and coupons.</li>
                  <li> <Image
                loader={myLoader}
                src="./assets/list1.gif"
                alt="Picture of the author"
                width={30}
                height={30} /> Feedback </li>
                  <li> <Image
                loader={myLoader}
                src="./assets/list1.gif"
                alt="Picture of the author"
                width={30}
                height={30} /> Flash notifications</li>
                  <li> <Image
                loader={myLoader}
                src="./assets/list1.gif"
                alt="Picture of the author"
                width={30}
                height={30} /> Vouchers  </li>
                  <li> <Image
                loader={myLoader}
                src="./assets/list1.gif"
                alt="Picture of the author"
                width={30}
                height={30} /> Promoting product launches</li>

                </ul>
                <p className={styles.notes}>Bulk SMS marketing can generate more leads by creating catchy content and attracting customers. SMS marketing lead generation has a higher conversion value than email marketing.</p>


              </Col>

            </Row>


          </Container>
        </div>











        <div>
          <Container >
            <div data-aos="fade-up">
              <p className={styles.ta_center_extra}>Our Bulk SMS Services  </p>
            </div>
            <Row style={{ paddingBottom: "50px" }}>


              <Col md={4}>
                <div data-aos="fade-up">

                  <Card css={{ p: "$10", height: "500px" }} className={`${styles['card_shadow']}`}>
                    <Card.Header>
                      <Row>
                        <Col md={12}>
                          <Image
                            loader={myLoader}
                            src="./assets/promotional_sms.png"
                            alt="Picture of the author"
                            width={90}
                            height={90}
                            />
                        </Col>

                      </Row>
                    </Card.Header>
                    <div>
                    <Card.Body css={{ py: "$1" }} >
                      <Text h4 css={{ lineHeight: "$xs", pb: "$0" }} className={`${styles['card_head_hover']}`}> Promotional SMS  </Text>
                      <Text size={15} weight="" className={`${styles['card_head_hover']}`}>
                        Promotional SMS is used to market businesses by sending discounts, flash notifications, offers, coupons, and vouchers to customers for promotion and lead generation. Delivering promotional SMS should only be to non-DND numbers, registering for DLT is mandatory, and the sender ID should be numeric. 9 AM to 9 PM is the most ideal time to send.
                      </Text>
                    </Card.Body>
                    </div>
                  </Card>
                 
                </div>
              </Col>
              <Col md={4}>
                <div data-aos="fade-up">
                  <Card css={{ p: "$10", height: "500px" }} className={`${styles['card_shadow']}`}>
                    <Card.Header>
                      <Row>
                        <Col md={12}>
                          <Image
                            loader={myLoader}
                            src="./assets/transactional_sms.png"
                            alt="Picture of the author"
                            width={90}
                            height={90}
                             />
                        </Col>

                      </Row>
                    </Card.Header>
                    <Card.Body css={{ py: "$1" }}>
                      <Text h4 css={{ lineHeight: "$xs", pb: "$0" }} > Transactional SMS</Text>
                      <Text size={15} weight="" className={`${styles['card_head_hover']}`}>
                        Transactional SMS is used to send transactional messages like bank money transactions, OTP verifications, circulars, and announcements. DLT registration is mandatory for transactional SMS, and promotional SMS content and templates are not allowed in transactional SMS. It can be sent using an alphabetic ID.
                      </Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col md={4}>
                <div data-aos="fade-up">
                  <Card css={{ p: "$10", height: "500px" }} className={`${styles['card_shadow']}`}>
                    <Card.Header>
                      <Row>
                        <Col md={12}>
                          <Image
                            loader={myLoader}
                            src="./assets/offline_sms.png"
                            alt="Picture of the author"
                            width={90}
                            height={90}
                            />
                        </Col>

                      </Row>
                    </Card.Header>
                    <Card.Body css={{ py: "$1" }}>
                      <Text h4 css={{ lineHeight: "$xs", pb: "$8" }} className={`${styles['card_head_hover']}`}> Offline SMS </Text>
                      <Text size={15} weight="" className={`${styles['card_head_hover']}`}>
                        Offline SMS helps to send promotional and transactional SMS from 10-digit mobile numbers with certain criteria. Signup with the Enterprise SMS portal, and send an SMS with a 10-digit mobile number, 9 Am to 9 PM, Quick access to reports for promotional purposes.
                      </Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

            </Row>

            <Row>
              <div data-aos="fade-up">
                <p className={styles.ta_center_extra}>Features of Bulk SMS API </p>
              </div>
              <Col md={3}>
                <div data-aos="fade-up">
                  <Card css={{ p: "$10", height: "430px" }} className={`${styles['card_shadow']}`}>
                    <Card.Header>
                      <Row>
                        <Col md={12}>
                          <Image
                            loader={myLoader}
                            src="./assets/compose_sms.png"
                            alt="Picture of the author"
                            width={90}
                            height={90}
                            />
                        </Col>

                      </Row>
                    </Card.Header>
                    <Card.Body css={{ py: "$1" }}>
                      <Text h4 css={{ lineHeight: "$xs"}} className={`${styles['card_head_hover']}`}> Compose SMS </Text>
                      <Text size={15} weight="" className={`${styles['card_head_hover']}`}>
                        you can compose messages from the Nettyfish Bulk SMS login platform. A composed message can be sent scheduled or instantly.
                      </Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col md={3}>
                <div data-aos="fade-up">
                  <Card css={{ p: "$10", height: "430px" }} className={`${styles['card_shadow']}`}>
                    <Card.Header>
                      <Row>
                        <Col md={12}>
                          <Image
                            loader={myLoader}
                            src="./assets/save_templates.png"
                            alt="Picture of the author"
                            width={90}
                            height={90}
                            />
                        </Col>

                      </Row>
                    </Card.Header>
                    <Card.Body css={{ py: "$1" }}>
                      <Text h4 css={{ lineHeight: "$xs", pb: "$8" }} className={`${styles['card_head_hover']}`}> Save templates </Text>
                      <Text size={15} weight="" className={`${styles['card_head_hover']}`}>
                        You can save your template and see the history of old templates. You can use it again easily without creating a new one.
                      </Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col md={3}>
                <div data-aos="fade-up">
                  <Card css={{ p: "$10", height: "430px" }} className={`${styles['card_shadow']}`}>
                    <Card.Header>
                      <Row>
                        <Col md={12}>
                          <Image
                            loader={myLoader}
                            src="./assets/bulk_sms.png"
                            alt="Picture of the author"
                            width={90}
                            height={90}
                            />
                        </Col>

                      </Row>
                    </Card.Header>
                    <Card.Body css={{ py: "$1" }}>
                      <Text h4 css={{ lineHeight: "$xs", pb: "$8" }} className={`${styles['card_head_hover']}`}> Bulk SMS </Text>
                      <Text size={15} weight="" className={`${styles['card_head_hover']}`}>
                        You can send one message to more than lakhs of people. It will reach more people and it will give you more leads
                      </Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col md={3}>
                <div data-aos="fade-up">
                  <Card css={{ p: "$10", height: "430px" }} className={`${styles['card_shadow']}`}>
                    <Card.Header>
                      <Row>
                        <Col md={12}>
                          <Image
                            loader={myLoader}
                            src="./assets/scheduled_sms.png"
                            alt="Picture of the author"
                            width={90}
                            height={90}
                            />
                        </Col>

                      </Row>
                    </Card.Header>
                    <div>
                    <Card.Body css={{ py: "$1" }}>
                      <Text h4 css={{ lineHeight: "$xs", pb: "$8" }} className={`${styles['card_head_hover']}`}> Scheduled SMS </Text>
                      <Text size={15} weight="" className={`${styles['card_head_hover']}`}>
                        Scheduling your messages allows you to send them whenever you want. Schedule SMS marketing campaigns with the preferred time and date for sending messages.
                      </Text>
                    </Card.Body>
                    </div>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className={styles.background}>
        <p className={styles.ta_center}>Steps to use SMS</p>
        <Container>
          <Row>
            <Col md={6}>


              <div data-aos="fade-up">
                {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Step 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <Card css={{ p: "$6", mw: "100%", mt: "30px" }} md={4}>
                  <Card.Header>
                    <Image
                      loader={myLoader}
                      src="assets/Ellipse 42 (1).png"
                      alt="Picture of the author"
                      width={35}
                      height={35}

                    />
                    <Grid.Container css={{ pl: "$6" }}>
                      <Grid xs={12}>
                        <Text h4 css=
                          {{
                            lineHeight: "$2",
                            fontSize: "$13"
                          }}>
                          <b>Step 1 :</b> Signup with Nettyfish - Firstly, Sign up with Nettyfish Solutions on Smart SMS login
                        </Text>
                      </Grid>
                    </Grid.Container>
                  </Card.Header>
                </Card>
              </div>
            </Col>
            {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Step 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <Col md={6}>
              <div data-aos="fade-up">
                <Card css={{ p: "$6", mw: "100%", mt: "30px" }} md={4}>
                  <Card.Header>
                    <Image
                      loader={myLoader}
                      src="assets/Ellipse 42 (1).png"
                      alt="Picture of the author"
                      width={35}
                      height={35}
                    />
                    <Grid.Container css={{ pl: "$6" }}>
                      <Grid xs={12}>
                        <Text h4 css=
                          {{
                            lineHeight: "$2",
                            fontSize: "$13"
                          }}>
                          <b>Step 2 :</b>  DLT Registration is mandatory, 1. Entity Registration 2. Header Registration 3. Template Registration
                        </Text>
                      </Grid>
                    </Grid.Container>
                  </Card.Header>
                </Card>
              </div>
            </Col>
            {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Step 3 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <Col md={6}>
              <div data-aos="fade-up">
                <Card css={{ p: "$6", mw: "100%", mt: "30px" }} md={4}>
                  <Card.Header>
                    <Image
                      loader={myLoader}
                      src="assets/Ellipse 42 (1).png"
                      alt="Picture of the author"
                      width={35}
                      height={35}
                    />
                    <Grid.Container css={{ pl: "$6" }}>
                      <Grid xs={12}>
                        <Text h4 css=
                          {{
                            lineHeight: "$2",
                            fontSize: "$13"
                          }}>
                          <b>Step 3 :</b> Integrate your DLT Entity with Nettyfish Smart SMS Portal Login to Nettyfish Smart SMS portal Enter your PE id into Nettyfish Profile Upload DLT registered Header and Templates Send SMS
                        </Text>
                      </Grid>
                    </Grid.Container>
                  </Card.Header>
                </Card>
              </div>
            </Col>
            <Col md={6}>
              <div data-aos="fade-up">
                {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Step 4 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

                <Card css={{ p: "$6", mw: "100%", mt: "30px" }} md={4}>
                  <Card.Header>
                    <Image
                      loader={myLoader}
                      src="assets/Ellipse 42 (1).png"
                      alt="Picture of the author"
                      width={35}
                      height={35}
                    />
                    <Grid.Container css={{ pl: "$6" }}>
                      <Grid xs={12}>
                        <Text h4 css=
                          {{
                            lineHeight: "$2",
                            fontSize: "$13"
                          }}>
                          <b>International SMS :</b>  International SMS can be sent globally for all the countries by adding country code in contact numbers
                        </Text>
                      </Grid>
                    </Grid.Container>
                  </Card.Header>
                </Card>
              </div>
            </Col>
            <Col md={12}>
              <div data-aos="fade-up">
                {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Step 5 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

                <Card css={{ p: "$6", mw: "100%", mt: "30px" }} md={4}>
                  <Card.Header>
                    <Image
                      loader={myLoader}
                      src="assets/Ellipse 42 (1).png"
                      alt="Picture of the author"
                      width={35}
                      height={35}
                    />
                    <Grid.Container css={{ pl: "$6" }}>
                      <Grid xs={12}>
                        <Text h4 css=
                          {{
                            lineHeight: "$2",
                            fontSize: "$13"
                          }}>
                          <b>
                            Whitelabel SMS :</b> You can manage your clients under your admin panel with your own branding.
                        </Text>
                      </Grid>
                    </Grid.Container>
                  </Card.Header>
                </Card>
              </div>
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

    </section>
  );
};

export default Enterprise;