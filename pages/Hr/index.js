import Link from "next/link";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/ServicePage.module.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
const myLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 100}`;
};
const Education = (props) => {
  return (
    <section>
      <Head>
        <title>NettyFish - HR Solutions</title>
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
              <p className={styles.title}>HR Solutions</p>
              <p className={styles.breadcrumb}>
              <a className={styles.home}  href="/">Home</a>{" "}
                &gt;&gt; HR Solutions
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <Container>
        {/* <<<<<<<<<<<<<<<<<<<<< Second Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <div className={styles.pt_30}>
          <Row style={{ borderBottom: "2px solid #97949436" }}>
            <Col md={6} style={{ alignSelf: "center" }}>
              <Image
                loader={myLoader}
                src="assets/hr1.png"
                alt="Picture of the author"
                height={430}
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
              <div className={styles.mt_150}>
              <Image
                loader={myLoader}
                src="assets/HR11.png"
                alt="Picture of the author"
                width={380}
                height={300}
                priority
              />
            </div>
               
              <h1 className={styles.heading}>
                Enhance the Process Of HRM With Omnichannel Marketing Solutions{" "}
              </h1>
              <p>
                Omnichannel marketing solutions can help Human Resources
                departments in several ways. By leveraging the power of
                analytics, omnichannel marketing solutions can help HR
                departments better understand employee engagement, recruitment,
                and retention. With this data, HR departments can develop and
                implement customized strategies to improve employee engagement
                and build a robust workforce. For example, HR departments can
                use omnichannel marketing solutions to create targeted campaigns
                to attract and retain top talent, additionally creating
                personalized employee engagement initiatives. HR departments can
                adjust and refine their strategies based on the results of these
                campaigns using omnichannel marketing solutions.
              </p>
            </Col>
          </Row>
        </div>
      </Container>

      <Container>
        {/* <<<<<<<<<<<<<<<<<<<<< Second Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <div className={styles.pt_30}>
          <Row style={{ borderBottom: "2px solid #97949436" }}>
            <Col
              md={6}
              className={styles.content}
              style={{ paddingBottom: "30px" }}
            >
              <h1 className={styles.heading}>
                Try Bulk SMS to Reach Maximum in Cost Effective Way{" "}
              </h1>
              <p>
                SMS Service is the oldest and still popular way of marketing for
                many industries. Brands, businesses, and industries are using
                SMS services to improve customer rapport and promotional
                purposes. Additionally, SMS services can be used to send out
                updates on company policies, upcoming events, and other news.
                This helps to keep employees informed and engaged in the
                organization. Employers can use SMS services to remind employees
                of upcoming performance reviews, which makes it easier for them
                to evaluate their employees regularly.
              </p>
              <p>
                SMS services are a crucial tool for the hiring process of HRM.
                Bulk SMS helps in sending bulk messages to all candidates, Job
                seekers, freshers, and more. This results in less expensive
                recruiting and helps applicants recall the date of the
                interview. Many leading firms' HR departments utilize SMS
                services more successfully to meet hiring targets and engage
                staff through easy communication.
              </p>
            </Col>

            <Col md={6} style={{ alignSelf: "center" }}>
              <Image
                loader={myLoader}
                src="assets/hr2.png"
                alt="Picture of the author"
                height={430}
                width={500}
                quality={100}
                priority
                layout="responsive"
              />
            </Col>
          </Row>
        </div>
      </Container>
      {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div>
        <Container>
          <div className={styles.pb_30}>
            <Row>
              <Col md={12}>
                <h1 className={styles.heading}>
                  HR Solutions AI - Auto whatsapp Chatbot
                </h1>

                <p className={styles.pera}>HR whatsapp Chatbot</p>
              </Col>
            </Row>

            <div>
              <div>
                <div className={styles.border}>
                  <Row>
                    <Col md={4} style={{ alignSelf: "center" }}>
                      <Image
                        loader={myLoader}
                        src="assets/1652331507_hr.gif"
                        alt="Picture of the author"
                        width={300}
                        height={550}
                        quality={100}
                        priority
                        layout="responsive"
                      />
                    </Col>
                    <Col md={8} style={{ alignSelf: "center" }}>
                      <h2 className={styles.card_heading}>
                        {" "}
                        WhatsApp API Solutions for Human Resource Management{" "}
                      </h2>
                      <p>
                        WhatsApp Business API Solutions is one of the efficient
                        tools for types of sectors and industries of any size.
                        WhatsApp Business API can help Human Resource
                        Development by streamlining communication and providing
                        an efficient way for HR team members to communicate with
                        each other and with the rest of the organization. It can
                        be used to share documents and resources, provide
                        updates on projects and tasks, and coordinate meetings
                        and training sessions. It can also be used to set up
                        automated responses to customer inquiries, which can
                        help to lighten the load of HR staff. WhatsApp Business
                        API can also help to create a more connected workplace,
                        as its platform can help build relationships between
                        team members and encourage collaboration. WhatsApp
                        chatbot is also one of the features of WhatsApp business
                        API. WhatsApp chatbot can handle many employees with
                        real-time interaction and a quick automated reply
                        feature. So Employees can be engaged all the time
                        without human interaction, it will help in solving FAQs,
                        Leave requests, and more. WhatsApp business boosts your
                        productivity to the core and improves communication
                        between employees and employers.{" "}
                      </p>
                      <br />
                      <p>
                        Try Our Solutions to improve the productivity of your
                        employees and the hiring process. We offer productivity
                        Solutions for businesses and all sectors. Just try and
                        boost yours.{" "}
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
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

export default Education;
