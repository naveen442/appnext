import Link from "next/link";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/ServicePage.module.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 100}`;
};
const Automobile = (props) => {
  return (
    <section>
      <Head>
        <title>NettyFish - Tours & Travels</title>
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
              <p className={styles.title}>Tours & Travels</p>
              <p className={styles.breadcrumb}>
              <a className={styles.home}  href="/">Home</a>{" "}
                &gt;&gt; Tours & Travels
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
              src="/assets/tour.jpeg"
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
            <h1 className={styles.heading}>Tours & Travels</h1>
            <h6 style={{ fontWeight: "bold" }}>
              Grow Your Tours and Travel Business with our Marketing Solutions
            </h6>
            <p>
              Nettyfish Solutions is one of the top-notch brands in industries
              to provide valuable solutions for those looking to upgrade or
              maximize their businesses. Nettyfish Solutions helps businesses
              grow to their full potential. We offer strategically proven
              solutions that can transform your business powerfully through
              branding, marketing, competitive intelligence, and more. Our
              solutions are the best in industries like bulk SMS services,
              WhatsApp marketing, WhatsApp chatbots, IVR services, Cloud
              telephony, digital marketing, and omnichannel Solutions.
            </p>
          </Col>
        </Row>
      </Container>
      {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <Container>
        {/* <<<<<<<<<<<<<<<<<<<<< Second Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <Row style={{ borderBottom: "2px solid #97949436" }}>
          <Col
            md={12}
            className={styles.content}
            style={{ paddingBottom: "30px" }}
          >
            <div className={styles.mt_150} style={{ marginTop: "70px" }}></div>
            <h6 style={{ fontWeight: "bold" }}>
              Reach More with Bulk SMS service for Tours and Travels business
            </h6>
            <p>
              The Tours and Travel business is one of the best businesses in the
              industry. Everyone like traveling and exploring the world and
              always anticipates safe and flawless travel. SMS Service assists
              in keeping traveling audiences informed. SMS helps tour and travel
              businesses communicate with customers in a variety of ways, such
              as sending confirmation texts, providing updates on travel
              itineraries, and sending reminders about upcoming trips. It allows
              them to communicate with customers in real time, providing them
              with important information about their upcoming trips, such as
              flight times, hotel reservations, and tour itineraries. This helps
              reduce the stress and anxiety customers may experience when
              traveling, as they can receive updates and confirmations on their
              phones rather than rely on email or phone calls. The SMS service
              can use to send promotional messages to customers, such as
              discounts on upcoming trips or special offers on vacation
              packages. This helps to increase customer engagement and can lead
              to increased sales for the business. Another benefit of SMS
              service is that it allows tour and travel businesses to reach
              customers who may not have access to email or the internet. It is
              particularly useful for reaching customers in remote or rural
              areas, who may not have reliable internet access. SMS service also
              allows tours and travel businesses to send automated messages to
              customers, such as reminders about upcoming trips or flight times.
              This helps to ensure that customers are always informed and
              prepared for their upcoming travel plans.{" "}
            </p>
            <h6 style={{ fontWeight: "bold" }}>
              Enhance Customer Engagement With WhatsApp Business API
            </h6>
            <p>
              {" "}
              WhatsApp Business API is a powerful tool that can help tours and
              travel businesses in many ways. One of the main benefits is that
              it allows businesses to communicate with their customers in
              real-time, which is crucial in the travel industry. Customers can
              use WhatsApp to ask questions, make bookings, and receive updates
              on their itineraries. WhatsApp Business API allows businesses to
              send automated messages, such as confirmations and reminders,
              which can save time and improve efficiency. Businesses can use
              WhatsApp Business API to send multimedia messages, such as
              pictures and videos, which can use to showcase their services and
              destinations. WhatsApp Business API allows businesses to create
              customer profiles, which can use to personalize customer
              interactions and provide better customer service. In short,
              WhatsApp Business API can help tours and travel businesses improve
              customer communication, increase sales and reduce operational
              costs.
            </p>
          </Col>
        </Row>
      </Container>

      <div>
        <Container>
          <Row>
            <Col md={12}>
              <h1 className={styles.heading}>
                Tours & Travels AI - Auto WhatsApp Chatbot
              </h1>

              <p className={styles.pera}>Tours & Travels WhatsApp Chatbot</p>
            </Col>
          </Row>

          <div>
            <div>
              <div className={styles.border}>
                <Row>
                  <Col md={4} style={{ alignSelf: "top" }}>
                    <Image
                      loader={myLoader}
                      src="/assets/1652344300_tours.gif"
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
                      Benefits Of WhatsApp Chatbot In Tours And Travel Business{" "}
                    </h2>
                    <p>
                      WhatsApp Business API is a crucial tool for tour and
                      travel companies. WhatsApp chatbot is one of the nicest
                      features of the WhatsApp Business API. WhatsApp chatbot is
                      essential for tour and travel companies. By offering
                      speedy and effective customer care, WhatsApp chatbots may
                      substantially assist tour and travel firms. Customers may
                      use the chatbot to quickly learn about available tours,
                      costs, and book choices. The chatbot may also deliver
                      real-time updates on tour timetables and itineraries.
                      WhatsApp chatbot can handle customer inquiries and
                      complaints, freeing staff to focus on other tasks. The
                      chatbot can also provide personalized recommendations and
                      suggestions based on the customer's preferences and past
                      bookings. WhatsApp chatbot can improve customer
                      satisfaction and streamline the online booking process for
                      tours and travel businesses.
                    </p>
                    <h2 className={styles.sub_content}>
                      IVR Solutions For Enrich Customer Support
                    </h2>

                    <p>
                      IVR (Interactive Voice Response) services help tours and
                      travel businesses in several ways. It allows customers to
                      access information and make bookings 24/7, even when the
                      business is closed, It is particularly useful for
                      customers who are in different time zones or have busy
                      schedules. IVR services can handle a high volume of calls
                      simultaneously, reducing the need for a large customer
                      service team. This can save the business money and allow
                      for more efficient operations. IVR services also offer a
                      level of personalization, allowing customers to access
                      specific information or make specific bookings based on
                      their needs. For example, a client may utilize IVR to book
                      a flight or learn more about a certain trip package. It
                      gives customers a sense of control over their travel
                      experience, which can lead to higher customer
                      satisfaction. IVR services may assist tour and travel
                      companies in increasing efficiency, personalization, and
                      client happiness. It may eventually result in higher
                      income and growth for the sector.
                    </p>
                  </Col>
                </Row>
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

export default Automobile;
