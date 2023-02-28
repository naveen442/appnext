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
const SMSApi = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section>
      <Head>
        <title>Nettyfish - SMS API</title>
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
              <p className={styles.title}>SMS API</p>
              <p className={styles.breadcrumb}>
              <a className={styles.home}  href="/">Home</a>{" "}
                &gt;&gt; SMS API
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
              <Col md={6} style={{ alignSelf: "center", textAlign: "center" }}>
                <div data-aos="fade-up">
                  <Image
                    loader={myLoader}
                    src="assets/sms_api.png"
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
                <div className={styles.mt_150}>
              <Image
                loader={myLoader}
                src="assets/SMS API.png"
                alt="Picture of the author"
                width={380}
                height={320}
                priority
              />
            </div>
                  <p className={styles.heading}>SMS API</p>
                  <p>
                    Application Programming Interface, create the functions of a
                    device program accessible to another device program.
                  </p>
                  <br />
                  <p>
                    It is a particular set of rules ('code') and specificatios
                    that software can follow to communicate with each other. It
                    serves as an interface between different software programs
                    and facilities their interactions.
                  </p>
                  <p>
                    API generally operates in the backdrop of software
                    applications and they are out of sight of the users.
                  </p>{" "}
                  <p>
                    Computer specialists on each side of the application use a
                    conventional agreement (called an API specification) to
                    build this relation.
                  </p>{" "}
                  <p>
                    “API” refers to this agreement as well as to the service
                    performed via the use of the API.
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
              <Col md={6} style={{ alignSelf: "center" }}>
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                  <p className={styles.heading2}>Who can use SMS API?</p>
                  <p>
                    {" "}
                    It is a set of routine definitions, protocols, library, and
                    tools that assists developers in writing code that connects
                    our SMS software with other software. We will provide API
                    documentation or sample code and the customer can use it to
                    integrate our functionalities with their software. There is
                    no necessity for the customer to open Nettyfish SMS Panel to
                    send sms, check reports, check balance. They can simply use
                    their software to check all the functionalities after
                    integration using API.
                  </p>
                  <br />
                  <p>
                    For instance, Call taxi - A call taxi customer will have his
                    own software to send automated SMS to Driver as well as to
                    their “travel booking customer” at a time after every
                    booking order they receive.{" "}
                  </p>
                  <br />{" "}
                  <p>
                    E-commerce website - A shopping website will have to send
                    immediate booking confirmation to their customer{" "}
                  </p>{" "}
                  <br />
                  <p>
                    Other uses: OTP SMS, Verification code, Automated alert.
                  </p>
                </div>
              </Col>
              <Col md={6} style={{ alignSelf: "center", textAlign: "center" }}>
                <div data-aos="fade-up" style={{ padding: "50px" }}>
                  <Image
                    loader={myLoader}
                    src="assets/sms_api2.png"
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

        <div>
          <Container>
            <Row>
              <Col md={6} style={{ alignSelf: "center" }}>
                <Image
                  loader={myLoader}
                  src="assets/sms_api3.png"
                  alt="Picture of the author"
                  height={600}
                  width={550}
                  layout="responsive"
                  quality={100}
                  priority
                />
              </Col>
              <Col md={6} style={{ alignSelf: "center" }}>
                <h1 className={styles.heading}>
                  How SMS API work with Nettyfish gateways?{" "}
                </h1>
                <ul className={styles.ul1}>
                  <li>
                    <Image
                      loader={myLoader}
                      src="./assets/list1.gif"
                      alt="Picture of the author"
                      width={30}
                      height={30}
                    />
                     Sender sends from Nettyfish application using given API
                    access.
                  </li>
                  <li>
                    <Image
                      loader={myLoader}
                      src="./assets/list1.gif"
                      alt="Picture of the author"
                      width={30}
                      height={30}
                    />
                     SMS content data travels to the dedictaed server from the
                    application
                  </li>
                  <li>
                    <Image
                      loader={myLoader}
                      src="./assets/list1.gif"
                      alt="Picture of the author"
                      width={30}
                      height={30}
                    />
                     From Nettyfish Server data pushed to Operators servers
                  </li>
                  <li>
                    <Image
                      loader={myLoader}
                      src="./assets/list1.gif"
                      alt="Picture of the author"
                      width={30}
                      height={30}
                    />
                     From the operator server SMS is received by the end user's
                    mobile number
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>

        <div>
          <Container>
            <Row style={{ marginTop: 200 }}>
              <Col md={6} style={{ alignSelf: "center", marginBottom: 200 }}>
                <h1 className={styles.heading}>Advantages of SMS API</h1>
                <ul className={styles.ul1}>
                  <h6 className={styles.home }>
                    <Image
                      loader={myLoader}
                      src="./assets/list1.gif"
                      alt="Picture of the author"
                      width={30}
                      height={30}
                    />{" "}
                    Configuration
                  </h6>
                  <li>
                    Indigenous prolixity for reduced downtime Intuitive routing
                    technology to choose the finest feasible routes Safe SMS
                    gateway, reliable by major clients.
                  </li>

                  <h6 className={styles.home}>
                    <Image
                      loader={myLoader}
                      src="./assets/list1.gif"
                      alt="Picture of the author"
                      width={30}
                      height={30}
                    />{" "}
                    SMS Delivery
                  </h6>
                  <li>
                    Quickest accordance with Pre-eminent telecom Service
                    providers Extraordinary delivery percentage, even if it is
                    one SMS or one million SMS
                  </li>
                  <h6 className={styles.home}>
                    <Image
                      loader={myLoader}
                      src="./assets/list1.gif"
                      alt="Picture of the author"
                      width={30}
                      height={30}
                    />{" "}
                    Cost Effective
                  </h6>

                  <li>
                    You can obtain APIs for endless period, pay only for SMS
                    credit purchase Self-operating texting option from your
                    Software Application, Website, CRM by connecting our SMS API
                    just only onc
                  </li>
                </ul>
              </Col>

              <Col md={6} style={{ alignSelf: "center" }}>
                <Image
                  loader={myLoader}
                  src="assets/sms_api4.png"
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
                        <Text
                          h4
                          css={{
                            lineHeight: "$2",
                            fontSize: "$13",
                          }}
                        >
                          <b>Step 1 :</b> Login and Go to Developer API menu
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
                        <Text
                          h4
                          css={{
                            lineHeight: "$2",
                            fontSize: "$13",
                          }}
                        >
                          <b>Step 2 :</b> Click on “View API Document” button to
                          view API docs
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
                        <Text
                          h4
                          css={{
                            lineHeight: "$2",
                            fontSize: "$13",
                          }}
                        >
                          <b>Step 3 :</b> ​​​​​​Scroll down to view SMS and
                          choose Send SMS option
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
                        <Text
                          h4
                          css={{
                            lineHeight: "$2",
                            fontSize: "$13",
                          }}
                        >
                          <b>Step 4 :</b> Click on “Try it out”
                        </Text>
                      </Grid>
                    </Grid.Container>
                  </Card.Header>
                </Card>
              </div>
            </Col>
          </Row>
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
                        <Text
                          h4
                          css={{
                            lineHeight: "$2",
                            fontSize: "$13",
                          }}
                        >
                          <b>Step 5 :</b> Enter the required Sender ID in Sender
                          ID field
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
                        <Text
                          h4
                          css={{
                            lineHeight: "$2",
                            fontSize: "$13",
                          }}
                        >
                          <b>Step 6 :</b> Enter the required SMS template in
                          Template field
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
                        <Text
                          h4
                          css={{
                            lineHeight: "$2",
                            fontSize: "$13",
                          }}
                        >
                          <b>Step 7 :</b> Enter mobile no. (Note: If you have
                          added 91 in profile, no need to add 91 in API testing)
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
                        <Text
                          h4
                          css={{
                            lineHeight: "$2",
                            fontSize: "$13",
                          }}
                        >
                          <b>Step 8 :</b> Enter ApiKey (Refer Developer API
                          available in your user login)
                        </Text>
                      </Grid>
                    </Grid.Container>
                  </Card.Header>
                </Card>
              </div>
            </Col>
          </Row>
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
                        <Text
                          h4
                          css={{
                            lineHeight: "$2",
                            fontSize: "$13",
                          }}
                        >
                          <b>Step 9 :</b> Enter ClientID (Refer Developer API
                          available in your user login)
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
                        <Text
                          h4
                          css={{
                            lineHeight: "$2",
                            fontSize: "$13",
                          }}
                        >
                          <b>Step 10 :</b> In Responses {"-->"} “Media type”{" "}
                          {"-->"} Select “application/json”
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
                        <Text
                          h4
                          css={{
                            lineHeight: "$2",
                            fontSize: "$13",
                          }}
                        >
                          <b>Step 11 :</b> Integrate your DLT Entity with
                          Nettyfish Smart SMS Portal Login to Nettyfish Smart
                          SMS portal Enter your PE id into Nettyfish Profile
                          Upload DLT registered Header and Templates Send SMS
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

export default SMSApi;
