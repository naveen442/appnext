import Link from "next/link"
import Head from "next/head"
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image'
import styles from "../../styles/AIpowered.module.css";
import { Card, Grid, Text } from "@nextui-org/react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const myLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 100}`
}
const Aipowered = (props) => {




  return (
    <section>
      <Head>
      <title>Nettyfish - AI Powered - Cloud CRM</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
  </Head>
      <div >
        <div className={styles.banner}>
          {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <Row>
            <Col md={7} className="offset-2">
              <p className={styles.title}>AI Powered - Cloud CRM</p>
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
              src="assets/1653472711_CRM-4.webp"
              alt="Picture of the author"
              height={300}
              width={500}
              quality={100}
              layout="responsive"
            />

          </Col>

          <Col md={6} style={{ alignSelf: "center" }}>
            <div className={styles.mt_150}>
              <Image
                loader={myLoader}
                src="assets/Cloud-telephony-ai-autodialer.png"
                alt="Picture of the author"
                width={380}
                height={250}
                quality={100}

               
              />
            </div>
            <p className={styles.heading}>Cloudphone AI-Powered Auto-dialer</p>
            <p>AI-Powered cloud CRM is a great solution for maintaining and following up with huge customer data. Cloud CRM has a Auto-dialer with client number masking, this can be provided to multiple agent with login ids. It completely takes care of support, marketing, sales and service. It provides detailed report on total revenue sales, client transactions, payment pendings.</p>
            <p>Multi-channel broadcast feature is available to engage customer by sending offers and notifications in different channels.</p>
            <p>There is inbuilt feature for notifying through whatsapp, sms, email, voice.</p>
          </Col>
        </Row>
      </Container>
      {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div className={styles.colorback}>
        <Container>
          <h1 className={styles.secondHeading}>How Cloud Phone System Works </h1>
          <Row>
            <Col sm={12} md={3}>
              <h1 className={styles.subheading}>Sticky Agent routes call to right agent</h1>
              <Image
                loader={myLoader}
                src="assets/1653472302_CRM 2.webp"
                alt="Picture of the author"
                width={250}
                height={180}
                quality={100}
                layout="responsive"
               
              />
              <p className={styles.sub_content}>Sticky agent feature connects the client to right agent according to previous conversation</p>
            </Col>
            <Col sm={12} md={3}>
              <h1 className={styles.subheading}>Multi-Agent and Admin login</h1>
              <Image
                loader={myLoader}
                src="assets/1653472354_CRM 3.webp"
                alt="Picture of the author"
                width={250}
                height={180}
                quality={100}
                layout="responsive"
               
              />
              <p className={styles.sub_content}>Multiple Agents login can be created and a seperate client list are uploaded inside each agent login</p>
            </Col>
            <Col sm={12} md={3}>
              <h1 className={styles.subheading}>Broadcast using Multiple Channel</h1>
              <Image
                loader={myLoader}
                src="assets/1653472742_CRM-4.webp"
                alt="Picture of the author"
                width={250}
                height={180}
                quality={100}
                layout="responsive"
               
              />
              <p className={styles.sub_content}>Send notifications and informations from the software via SMS, Voice, Whatsapp, Email</p>
            </Col>
            <Col sm={12} md={3}>
              <h1 className={styles.subheading} style={{ paddingBottom: "43px" }}>Mask Customer Contacts</h1>
              <Image
                loader={myLoader}
                src="assets/1653472831_CRM-5.webp"
                alt="Picture of the author"
                width={250}
                height={180}
                quality={100}
                layout="responsive"
               
              />
              <p className={styles.sub_content}>Customer #no masking in agents login for security of data    </p>
            </Col>
          </Row>
        </Container>
      </div>
      <>



        <div className={styles.colorback}>
          <Container>
            <h1 className={styles.secondHeading}>Advantages of Nettyfish AI Auto-dialer </h1>
            <Row>
              <Col sm={12} md={4} style={{textAlign: "center"}}>
                <h1 className={styles.subheading}>Manage client Transaction Records</h1>
                <Image
                  loader={myLoader}
                  src="assets/1653472952_Adv-NF-1.webp"
                  alt="Picture of the author"
                  width={120}
                  height={120}
                  quality={100}

                 
                />
                <p className={styles.sub_content}>Manage client user records and transactions</p>
              </Col>
              <Col sm={12} md={4} style={{textAlign: "center"}}>
                <h1 className={styles.subheading}>Maintain Prospect lead Status</h1>
                <Image
                  loader={myLoader}
                  src="assets/1653472952_Adv-NF-1.webp"
                  alt="Picture of the author"
                  width={120}
                  height={120}
                  quality={100}

                 
                />
                <p className={styles.sub_content}>Create Sales-pipeline for each customer</p>
              </Col>
              <Col sm={12} md={4} style={{textAlign: "center"}}>
                <h1 className={styles.subheading}>Multi-channel Marketing Automation</h1>
                <Image
                  loader={myLoader}
                  src="assets/1653472952_Adv-NF-1.webp"
                  alt="Picture of the author"
                  width={120}
                  height={120}
                  quality={100}

                 
                />
                <p className={styles.sub_content}>Be in touch with customer using multi-channel</p>
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
                       <p> <b>Manage users module can be used to manage client list allotted to each agent. Each client follow-up status can be taken a note and pipeline can be created by marking prospect, qualified lead, lead, deal closed status.</b></p>
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
                        <p> <b>Generating Quotation and sending to clients and agent email feature in CRM system with auto-calculation of unit price volume and GST quickly</b></p>
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
                       <p> <b>Marketing Automation by notify option to send notifications via SMS, Voice, Whatsapp all with just one click by using pre-set templates</b></p>
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
                     <p> <b>Customer Number masking with a call now button that connects agent and client with a VMN hosted number that also has a sticky agent feature which connects client with right agent</b></p>
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

export default Aipowered;