import Link from "next/link"
import Head from "next/head"
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image'
import styles from "../../styles/SMS.module.css";
import { Card, Grid, Text } from "@nextui-org/react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const myLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 100}`
}
const Marketing = (props) => {




  return (
    <section>
      <Head>
      <title>Nettyfish - SMS Marketing</title>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
  </Head>
      <div >
        <div className={styles.banner}>
          {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <Row>
            <Col md={7} className="offset-2">
              <p className={styles.title}>SMS Marketing</p>
              <p className={styles.breadcrumb}><a className={styles.home}  href="/">Home</a> &gt;&gt; AI Powered - Cloud CRM</p>
            </Col>
          </Row>
        </div>
      </div>
      <Container>
        {/* <<<<<<<<<<<<<<<<<<<<< Second Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <Row>
          <Col md={6} style={{ alignSelf: "center" }}>

            <Image
            loader={myLoader}
              src="assets/1654850985_SMS Mark.webp"
              alt="Picture of the author"
              height={480}
              width={500}
              layout="responsive"
            />

          </Col>

          <Col md={6} style={{ alignSelf: "center" }}>
            <div className={styles.mt_150}>
              <Image
                loader={myLoader}
                src="assets/Untitled-9 1.png"
                alt="Picture of the author"
                width={380}
                height={250}
                quality={100}

             
              />
            </div>
            <p className={styles.heading}>Whats is SMS Marketing?</p>
            <p>SMS Marketing is used to send Promotional SMS campaigns and Transactional SMS for various marketing benefits. These kinds of SMS are usually for the purpose of communicating short period offers, alerts and updates to those who provided consent to receive such SMS from your business.</p>
            <p className={styles.backfont}>Nettyfish SMS Marketing service isn&apos;t just convenient for your customers, it&apos;s good for business. Discover how we provide you a competitive edge</p>
            <p className={styles.sub_content}>How Your Business Can Use Bulk SMS for promotion?</p>
            <p className={styles.p_tag}><span>Sales and Support</span> – Helps to close more leads, Time saving, Customer satisfaction, Team work</p>
            <p className={styles.p_tag}><span>Marketing and Promotions</span> – Wide range of reach, to promote sales and services, Customization of SMS, reports and analysis</p>
            <p className={styles.p_tag}><span>To pass information</span> – Simple SMS to pass on information such as follow up, find new, categorize your viewers</p>
            <p className={styles.p_tag}><span>HR and Recruitment</span> – Schedule interviews, finding out candidate, Team coordination, Inviting new candidates</p>
            <p className={styles.p_tag}><span>Reminders</span> – Template creation, reschedule simply, reduces missed opportunities, fasten with software</p>
          </Col>
        </Row>
      </Container>
      {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div className={styles.colorback}>
        <Container>
          <h1 className={styles.secondHeading}>Various types of SMS marketing</h1>
          <Row>
            <Col sm={12} md={3}>
              <h1 className={styles.subheading} style={{paddingBottom:"43px"}}>Personalized Promotions</h1>
              <Image
                loader={myLoader}
                src="assets/1654845766_Promotional.webp"
                alt="Picture of the author"
                width={265}
                height={180}
                quality={100}

                layout="responsive"
              />
              <p className={styles.sub_content}>They are used to keep the users posted about new services. It persuades customers to buy your services. It also helps in reminding about your products to the customers.</p>
            </Col>
            <Col sm={12} md={3}>
              <h1 className={styles.subheading}>Discounts, Coupon code offers</h1>
              <Image
                loader={myLoader}
                src="assets/1654845891_Offer 2.webp"
                alt="Picture of the author"
                width={265}
                height={180}
                quality={100}

                layout="responsive"
              />
              <p className={styles.sub_content}>It is a great way to establish your services to prospective clients on their smartphones and enable them to make purchases using discounts.</p>
            </Col>
            <Col sm={12} md={3}>
              <h1 className={styles.subheading} style={{paddingBottom:"43px"}}>Remarketing</h1>
              <Image
                loader={myLoader}
                src="assets/1654846072_Remarketing 2.webp"
                alt="Picture of the author"
                width={265}
                height={180}
                quality={100}

                layout="responsive"
              />
              <p className={styles.sub_content}>SMS remarketing is one of the best way to retarget your customers where you can send SMS for reminders, Follow-ups, Review requests. It will be great if you take some of additional steps to stay connected with your customers.</p>
            </Col>
            <Col sm={12} md={3}>
              <h1 className={styles.subheading} >Surveys and Inauguration information</h1>
              <Image
                loader={myLoader}
                src="assets/1654845222_ezgif.com-gif-maker (93).webp"
                alt="Picture of the author"
                width={265}
                height={180}
                quality={100}

                layout="responsive"
              />
              <p className={styles.sub_content}>SMS Survey enables you to get the user feedback, suggestions, comments about your product via text message to understand their expectations in a better way. Any SMS related to inauguration or update of a new launch SMS can also be more exciting for the audience</p>
            </Col>
          </Row>
        </Container>
      </div>
      <>



        <div className={styles.colorback}>
          <Container>
            <h1 className={styles.secondHeading}>Purpose of using SMS Marketing</h1>
            <Row>
              <Col sm={12} md={4} style={{textAlign: "center"}}>
                <h1 className={styles.subheading}>Top-priority updates</h1>
                <Image
                  loader={myLoader}
                  src="assets/1654862509_1654862208_Event.webp"
                  alt="Picture of the author"
                  width={120}
                  height={120}
                  quality={100}
                
             
                />
                <p className={styles.sub_content}>You can simply communicate the information about any alterations in plan/general announcement or live update. This is possible only by having a real time involvement than any other channels of marketing.</p>
              </Col>
              <Col sm={12} md={4} style={{textAlign: "center"}}>
                <h1 className={styles.subheading}>Reminders on Consultations</h1>
                <Image
                  loader={myLoader}
                  src="assets/1654862522_2 (1).webp"
                  alt="Picture of the author"
                  width={120}
                  height={120}
                  quality={100}
              
                />
                <p className={styles.sub_content}>Sending reminders through SMS, this is one of an amazing way to keep the appointment timings up to date. It can avoid last minute confusions and it is time saving.</p>
              </Col>
              <Col sm={12} md={4} style={{textAlign: "center"}}>
                <h1 className={styles.subheading}>Internal alerts</h1>
                <Image
                  loader={myLoader}
                  src="assets/1654862540_3.webp"
                  alt="Picture of the author"
                  width={120}
                  height={120}
                  quality={100}

                 
                />
                <p className={styles.sub_content}>SMS serves as a foremost solution at an emergency situation at work to huge numbers at a time. It can be office closure intimation/event plan or any internal update.</p>
              </Col>

            </Row>
          </Container>
        </div>
      </>



      <div className={styles.background}>
        <h1 className={styles.secondHeading}>Features of SMS Marketing</h1>
        <Container>
          <Row>
            <Col md={6} sm={12}>
              {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Step 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
              <Card css={{ p: "$6", mw: "100%" }}  md={4}>
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
                       <p> <b>Group SMS for sending SMS to selected groups</b></p>
                      </Text>
                    </Grid>
                  </Grid.Container>
                </Card.Header>
              </Card>

              {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Step 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

              <Card css={{ p: "$6", mw: "100%", mt: "30px" }}  md={4}>
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
                        <p> <b>Schedules SMS for sending SMS later at fixed date, fixed time</b></p>
                      </Text>
                    </Grid>
                  </Grid.Container>
                </Card.Header>
              </Card>

             

           

         

            </Col>
            <Col sm={12} md={6}>
 {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Step 3 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

 <Card css={{ p: "$6", mw: "100%" }} >
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
                       <p> <b>Dynamic SMS for sending personalized SMS</b></p>
                      </Text>
                    </Grid>
                  </Grid.Container>
                </Card.Header>
              </Card>

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
                     <p> <b>API for integrating with client&apos;s software and websites and send automated SMS</b></p>
                      </Text>
                    </Grid>
                  </Grid.Container>
                </Card.Header>
              </Card>
             
            </Col>
            <Col sm={12} md={12}>
 {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Step 5 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

 <Card css={{ p: "$6", mw: "100%",mt: "30px" }} >
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
                          fontSize: "$13",
                          alignSelf:"center"
                        }}>
                       <p> <b>Dynamic SMS for sending personalized SMS</b></p>
                      </Text>
                    </Grid>
                  </Grid.Container>
                </Card.Header>
              </Card>

             

              
             
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

export default Marketing;