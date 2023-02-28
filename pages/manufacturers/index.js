import Link from "next/link";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/ServicePage.module.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 100}`;
};
const Manufacturers = (props) => {
  return (
    <section>
      <Head>
        <title>NettyFish - Manufacturers</title>
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
              <p className={styles.title}>Manufacturers</p>
              <p className={styles.breadcrumb}>
                <a className={styles.home} href="/">Home</a>{" "}
                &gt;&gt; Manufacturers
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
              src="/assets/manufacturers.png"
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
            <h1 className={styles.heading}>
              {" "}
              Manufacturing
            </h1>
            <p>Nettyfish Chatbot in the Manufacturing industry has a dual role.

            </p><p>The first role is to help employees in receiving accurate information regarding some processes of various levels of production without time delay and to assist customer care representatives.

            </p>

            <p>The second role is to help customers with their queries.</p>




            <p>Chatbot use cases :</p>

            <ul className={styles.ul1}>
              <li>
                <Image
                loader={myLoader}
                src="/assets/list1.gif"
                alt="Picture of the author"
                width={30}
                height={30} />
                 Supplies and inventory check</li>
              <li>
                <Image
                loader={myLoader}
                src="/assets/list1.gif"
                alt="Picture of the author"
                width={30}
                height={30} /> 
                Automation of customer support</li>
              <li>
                <Image
                loader={myLoader}
                src="/assets/list1.gif"
                alt="Picture of the author"
                width={30}
                height={30} /> 
                Handling floor queries</li>
              <li>
                <Image
                loader={myLoader}
                src="/assets/list1.gif"
                alt="Picture of the author"
                width={30}
                height={30} />
                 Update delivery notifications</li>
              <li>
                <Image
                loader={myLoader}
                src="/assets/list1.gif"
                alt="Picture of the author"
                width={30}
                height={30} /> 
                Product recommendations</li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div>
        <Container>
          <Row>
            <Col md={12}>
              <h1 className={styles.heading}>
                Manufacturers AI - Auto WhatsApp Chatbot

              </h1>

              <p className={styles.pera}>Manufacturers WhatsApp Chatbot</p>
            </Col>
          </Row>

          <div>
            <div>
              <div className={styles.border}>
                <Row>
                  <Col md={4} style={{ alignSelf: "center" }}>
                    <Image
                      loader={myLoader}
                      src="/assets/1652530010_se.gif"
                      alt="Picture of the author"
                      width={300}
                      height={550}
                      quality={100}
                      priority
                      layout="responsive"
                    />
                  </Col>
                  <Col md={8}>
                    {/* <h2 className={styles.card_heading}>Benefits of IVR</h2> */}
                    <p>
                      Manufacturing sectors has to deal with the business functions and customer inquires on a huge range. When the communication is manual that could lead to inefficiency and delay the turn around time to the customers.


                    </p>
                    <br />
                    <p>
                      An AI chatbot for manufacturing sector can boost and automate this function with better effectiveness. It can be simplified a variety of tiresome tasks and attract suppliers right from the first interaction till they gets transformed into your customer.


                    </p>

                    <p className={styles.sub_content}>
                      Manufacturing assistance is available 24x7 and it handles:
                    </p>



                    <ol className={styles.ol}>
                      <li>Generate SQL</li>
                      <li>Manage inventory and supplies</li>
                      <li>Automate customer support</li>
                      <li>Provide customized recommendations</li>
                      <li>Send updates and delivery notes</li>
                    </ol>
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

export default Manufacturers;
