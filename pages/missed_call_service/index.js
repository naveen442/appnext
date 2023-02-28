import Link from "next/link"
import Head from "next/head"
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image'
import styles from "../../styles/Missedcall.module.css";
import { Card, Grid, Text } from "@nextui-org/react";

import { FloatingWhatsApp } from "react-floating-whatsapp";
const myLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 100}`
}
const Missedcall = (props) => {

 


  return (
    <section>
     <Head>
   <title>NettyFish -Missed Call </title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
  </Head>
      <div >
        <div className={styles.banner}>
          {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <Row>
            <Col md={7} className="offset-2">
              <p className={styles.title}>Missed call Service</p>
              <p className={styles.breadcrumb}><a className={styles.home}  href="/">Home</a> &gt;&gt; Missed call Service</p>
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
              src="assets/missed_call_1.png"
              alt="Picture of the author"
              height={350}
              width={500}
              layout="responsive"
              quality={100}
              priority
            />

          </Col>

          <Col md={6} style={{ alignSelf: "center" }}>
            <div className={styles.mt_150}>
              <Image
                loader={myLoader}
                src="assets/Missed call Service.png"
                alt="Picture of the author"
                width={340}
                height={280}
                quality={100}
               
                priority
              />
            </div>
            <h1 className={styles.heading}>Connect Your Desired Audience Quickly Missed Call Services</h1>
            <p>Sometimes, you don’t even need to talk. A missed call is a simple way to communicate with your customers at no cost.</p>
            <h1 className={styles.heading}>How does a missed call solution work for communication?</h1>
            <p>The origin of missed call marketing is based on the way people in the Indian subcontinent communicate. Brands have been cashing in on this by customizing the response to a simple missed call.</p>
            <p>A missed call can be followed by an SMS, another call, or a combination of the two.</p>
            <h1 className={styles.heading}>How Missed call service benefits your business?</h1>
            <p>One of the most benefit is to appraise your customers for free of cost.</p>
            <p>It could be for an offer/to redeem a coupon or requesting to call-back the Missed call service will omit all the hindrances to reach you. This will enhance the customer’s involvement.</p>
            <p>Customers will find this as an user friendly service. </p>
          </Col>
        </Row>
      </Container>
      {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div className={styles.colorback}>
        <Container>
          <h1 className={styles.secondHeading}>How Cloud Phone System Works </h1>
          <Row>
            <Col sm={12} md={3}>
              <h1 className={styles.subheading}>Customer sees your ad/promotion</h1>
              <Image
                loader={myLoader}
                src="assets/1653473433_MIS-2.webp"
                alt="Picture of the author"
                width={250}
                height={200}
                quality={100}
                layout="responsive"
                priority
              />
              <p className={styles.sub_content}>Customer calls your virtual number seen on an ad</p>
            </Col>
            <Col sm={12} md={3}  >
              <h1 className={styles.subheading} style={{ paddingBottom: "43px" }}>Call lands and disconnects</h1>
              <Image
                loader={myLoader}
                src="assets/1653473766_Mis-3.webp"
                alt="Picture of the author"
                width={250}
                height={200}
                quality={100}
                layout="responsive"
                priority
              />
              <p className={styles.sub_content}>Call gets disconnected the moment it lands on your virtual #no, which is connected to a missed-call flow</p>
            </Col>
            <Col sm={12} md={3}>
              <h1 className={styles.subheading}>Leads are generated to spread sheets</h1>
              <Image
                loader={myLoader}
                src="assets/1653473778_Mis-4.webp"
                alt="Picture of the author"
                width={250}
                height={200}
                quality={100}
                layout="responsive"
                priority
              />
              <p className={styles.sub_content}>The contact information of your callers can be exported to a Google spread sheet</p>
            </Col>
            <Col sm={12} md={3}>
              <h1 className={styles.subheading}>Automated call back or SMS</h1>
              <Image
                loader={myLoader}
                src="assets/1653473788_Mis-5.webp"
                alt="Picture of the author"
                width={250}
                height={200}
                quality={100}
                layout="responsive"
                priority
              />
              <p className={styles.sub_content}>To notify a customer, an automated call back or SMS can be triggered once a missed call lands on your virtual #no</p>
            </Col>
          </Row>
        </Container>
      </div>
      <>



        <div className={styles.colorback}>
          <Container>
            <h1 className={styles.secondHeading}>Advantages of Missed Call Services</h1>
            <Row>
              <Col sm={12} md={4} style={{textAlign: "center"}}>
                <h1 className={styles.subheading}>Cost</h1>
                <Image
                  loader={myLoader}
                  src="assets/1653473899_ezgif.com-gif-maker (11).webp"
                  alt="Picture of the author"
                  width={120}
                  height={120}
                  quality={100}
               
                  priority
                />
                <p className={styles.sub_content}>The customer incurs absolutely no cost. Missed call services increases engagement.</p>
              </Col>
              <Col sm={12} md={4} style={{textAlign: "center"}}>
                <h1 className={styles.subheading}>Customization</h1>
                <Image
                  loader={myLoader}
                  src="assets/1653472952_Adv-NF-1.webp"
                  alt="Picture of the author"
                  width={120}
                  height={120}
                  quality={100}

                  priority
                />
                <p className={styles.sub_content}>A missed call can be followed by a variety of actions – another call, a text message, an affirmation etc.,</p>
              </Col>
              <Col sm={12} md={4} style={{textAlign: "center"}}>
                <h1 className={styles.subheading}>Analysis</h1>
                <Image
                  loader={myLoader}
                  src="assets/1653473999_ezgif.com-gif-maker (13).webp"
                  alt="Picture of the author"
                  width={120}
                  height={120}
                  quality={100}

                  priority
                />
                <p className={styles.sub_content}>The actions are all trackable and can be easily analysed</p>
              </Col>

            </Row>

            <Row>
              <Col sm={12} md={4} style={{textAlign: "center"}}>
                <h1 className={styles.subheading}>Enhanced Efficiency</h1>
                <Image
                  loader={myLoader}
                  src="assets/1653991214_icon_benefits_consistent-quality-_2_.webp"
                  alt="Picture of the author"
                  width={120}
                  height={120}
                  quality={100}

                  priority
                />
                <p className={styles.sub_content}>You can self-regulate many processes such as lead generation, redemption of coupons, voting and registrations.</p>
              </Col>
              <Col sm={12} md={4} style={{textAlign: "center"}}>
                <h1 className={styles.subheading}>Improved Experience</h1>
                <Image
                  loader={myLoader}
                  src="assets/1654672194_Satis.webp"
                  alt="Picture of the author"
                  width={120}
                  height={120}
                  quality={100}

                  priority
                />
                <p className={styles.sub_content}>Customers find it more user-friendly than online chats/WhatsApp. This is available for 7 days a week. Business can use this service to feel simple that it always has availability.</p>
              </Col>
              <Col sm={12} md={4} style={{textAlign: "center"}}>
                <h1 className={styles.subheading}>Enhanced Involvement</h1>
                <Image
                  loader={myLoader}
                  src="assets/1653992140_istockphoto-1257210303-612x612 (2).webp"
                  alt="Picture of the author"
                  width={120}
                  height={120}
                  quality={100}

                  priority
                />
                <p className={styles.sub_content}>Lot of customers will reach you for wide range of services for various reasons. They will find this as a simple and user-friendly solution.</p>
              </Col>

            </Row>
          </Container>
        </div>
      </>



      <div className={styles.background}>
        <h1 className={styles.secondHeading}>How Cloud Phone System Works</h1>
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
                       <p> <b>Step 1 :</b> Signup in voicesms.nettyfish.com and provide your username</p>
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
                                    <p> <b>Step 2 :</b> Choose your desired number from Number list provided by Nettyfish, Free numbers and Vanity number available</p>
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
                                   <p> <b>Step 3 :</b> Chosen number will be configured under your user’s name as per your missed call plan</p>
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
                                   <p> <b>Step 4 :</b> Start using Missed call Service, Check instant received missed call reports</p>
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

export default Missedcall;