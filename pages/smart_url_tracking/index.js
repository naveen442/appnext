import Link from "next/link"
import Head from "next/head"
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image'
import styles from "../../styles/SmartURL.module.css";
import { Card, Grid, Text } from "@nextui-org/react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 100}`
}
const Smart_url = (props) => {




  return (
    <section>
   
     <Head>
     <title>Nettyfish - Smart URL Tracking</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
  </Head>
      <div >
        <div className={styles.banner}>
          {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <Row>
            <Col md={7} className="offset-2">
              <p className={styles.title}>Smart URL Tracking</p>
              <p className={styles.breadcrumb}><a className={styles.home}  href="/">Home</a> &gt;&gt; Smart URL Tracking</p>
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles.backcolor}>
      <Container>
        {/* <<<<<<<<<<<<<<<<<<<<< Second Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
       
        <div className={styles.pb_30}>
        <Row>
          <Col md={6} style={{ alignSelf: "center" }}>

            <Image
              loader={myLoader}
              src="/assets/smart_url_tracking_1.png"
              alt="Picture of the author"
              height={300}
              width={500}
              layout="responsive"
            />

          </Col>

          <Col md={6} style={{ alignSelf: "center" }}>
            <div className={styles.mt_150}>
              <Image
                loader={myLoader}
                src="assets/Smart URL Tracking.png"
                alt="Picture of the author"
                width={380}
                height={260}
              
              />
            </div>
            <p className={styles.heading}>Track SMS campaigns</p>
            <p> Nettyfish enterprise platform has a live tracking for your campaigns as it gives you the deep insights of your marketing as well as transaction campaigns. Tracking the click-throughs of your SMS campaign by grouping up whoever has clicked your URL. While getting started with SMART SMS campaign, you can first add on Auto Respondents and add agents and groups.</p>
            <p>Here Auto respondent messages are pre set messages where in client can get sms with recipients mobile number details for each and every click done by number of SMS recipients. Agents are added to set the destination mobile numbers for each campaign for sending auto respondent messages. Groups to be added to store the data of receipients givensale who clicked the URL SMS live tracking metrics provides a graph with recipients operator tracking like airtel, Vodafone, jio etc.., date and time tracking, device tracking like IOS, Android, Windows, mobile number tracking, location tracking.</p>
            <p>This option is to optimize your campaign in a smarter way to get in touch with your genuine targeted customers.</p>
          </Col>
        </Row>
        </div>
        {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <div className={styles.pb_30}>
        <Row>
          <Col md={6} style={{ alignSelf: "center" }}>


            <p className={styles.heading}>Enterprise Smart SMS solution</p>
            <p> Nettyfish Enterprise SMART SMS solution provides various ways to extend capabilities of Salesforce CRM, making it easy to manage all the leads between panels, send and retrieve data, and ensure that customer&apos;s needs are fulfilled up-to-date.</p>
            <p>This enterprise SMS salesforce platform, SMART SMS will allow you to easily create smart links with URL shortners and you can make SMS attachment. Yes, you Don&apos;t have to worry if your SMS needs to have an attachment, here is the solution, We&apos;ve got it covered for you. Attach your files in any format like mp3, mp4, jpeg, pdf, png etc…. When you have option to send SMS with attachments you can even send Video invitation, Invoice PDF, Images, Website URL to promote your products. It has an advanced feature where you can even group up the recipient’s mobile numbers from which your SMS URL is clicked. You can even let your customers know special offers by sending SMS attachments. This enterprise SMART SMS solution helps to develop any kind of business just by not missing any leads. Using SMART SMS , you can bring in and group up real genuine customers who will be interested in your products.</p>
            <p>This platform has an inbuilt URL shortner, so any URL or attachments you send can be sent through shortened URL that reduces SMS character size.</p>
          </Col>

          <Col md={6} style={{ alignSelf: "center" }}>
            <Image 
              loader={myLoader}
              src="/assets/smart_url_tracking_2.png"
              alt="Picture of the author"
              height={300}
              width={500}
              layout="responsive"
            />

          </Col>
        </Row>
</div>

      </Container>
      </div>
      <div className={styles.background}>
        <h1 className={styles.ta_center}>Steps to use SMS</h1>
        <Container>
          <Row>
            <Col>
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
                        <b>Step 1 :</b> Go to “Compose Smart SMS”
                      </Text>
                    </Grid>
                  </Grid.Container>
                </Card.Header>
              </Card>

              {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Step 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

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
                        <b>Step 2 :</b>  Select the required “Sender ID”
                      </Text>
                    </Grid>
                  </Grid.Container>
                </Card.Header>
              </Card>

              {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Step 3 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

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
                        <b>Step 3 :</b> Add contact list/Add contact number
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
                        <b>Step 4 :</b>  In “Enter message” section click on “Select Template” option and select any one of the templates that you want to send
                      </Text>
                    </Grid>
                  </Grid.Container>
                </Card.Header>
              </Card>

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
                        <b>Step 5 :</b>  In the place of variable you can add the URL (Image/PDF/Website URL/Video/invite) by clicking on smart link icon
                      </Text>
                    </Grid>
                  </Grid.Container>
                </Card.Header>
              </Card>

            </Col>
            <Col>

              {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Step 6 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

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
                        <b>Step 6 :</b> In the display URL field the URL will be shortened
                      </Text>
                    </Grid>
                  </Grid.Container>
                </Card.Header>
              </Card>

              {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Step 7 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

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
                          <b>Step 7 :</b>  If you want to save the contact numbers of audience who clicked smart Link, select add contacts in group (Note: You need to create a group name before choosing this option- Select group -&gt; Add New -&gt; Group Name) If you want to notify your agent regarding details of users who clicked on your link you can click on “Send SMS notification to agent, when the recipient clicks on Smart Link&quot; (Note: You need to add agents by clicking on Manage agent under Smart SMS option. Give agent&apos;s Name, Mobile no and Email ID)
                        </Text>
                      </Grid>
                    </Grid.Container>
                  </Card.Header>
                </Card>

              {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Step 8 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

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
                          <b>Step 8 :</b> Then click on Insert link
                        </Text>
                      </Grid>
                    </Grid.Container>
                  </Card.Header>
                </Card>

              {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Step 9 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

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
                          <b>Step 9 :</b> Send Smart SMS 
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

export default Smart_url;