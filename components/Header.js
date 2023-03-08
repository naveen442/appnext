import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import React, { useState, useRef } from "react";
import { useRouter } from 'next/router';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Link from "next/link";
import styles from '../styles/Header.module.css'
import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/poppins"; // Defaults to weight 400.


const myLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 100}`
}

const Header = () => {
  // const router=useRouter();
  // const wacto=()=>{
  //  router.push("http://wacto.in/");
  // }

  const firstClosef = useRef();

  function toggle() {
//  const targetDiv = document.getElementById("tabclose");
//     {
//       if (targetDiv.style.display !== "block") {
//         targetDiv.style.display = "none";
//       } else {
//         targetDiv.style.display = "block";
//       }
//     };
    //  setShowMe(!showMe);
    // setIsOpen(false); 
    document.getElementsByClassName("tabclose").style.display = "none";

    // close the menu when a link is clicked
  }
  function toggle1() {
    //  setShowMe(!showMe);
    // setIsOpen(false); 
    var style = document.getElementsByClassName("tabclose1")
    style.style.display = "none";

    // close the menu when a link is clicked
  }
  function toggle2() {
    // const targetDiv = document.getElementsByClassName("tabclose2");
    // {
    //   if (targetDiv.style.display !== "none") {
    //     targetDiv.style.display = "none";
    //   } else {
    //     targetDiv.style.display = "block";
    //   }
    // };
    //  setShowMe(!showMe);
    // setIsOpen(false); 
    document.getElementsByClassName("tabclose2").style.display = "none";

    // close the menu when a link is clicked
  }
  function toggle3() {
    //  setShowMe(!showMe);
    // setIsOpen(false); 
    document.getElementsByClassName("tabclose6")[0].style.display = "none";

    // close the menu when a link is clicked
  }
  return (
    <>
      <Head>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />

      </Head>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous"></Script>
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></Script>
      <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></Script>




      <nav className={`${styles['navbar-header']} navbar navbar-expand-xl justify-content-between`} >
        <div className="container">
          <a className="navbar-brand" href="/">
            <Image
              loader={myLoader}
              src="./assets/headerLogo.png"
              alt="Picture of the author"
              width={200}
              height={80}
            />
          </a>
          <button className="navbar-toggler "
            type="button" data-toggle="collapse"
            data-target="#navbarNavDropdown01"
            aria-controls="navbarNavDropdown01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ outlineColor: "#fff" }}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown01"
          >

            <ul className="navbar-nav ">

              {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<    Products Dropdown    >>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

              <li className={`${styles['nav-item']} ${styles['dropdown']} nav-item dropdown`}  >
                <div className={styles.borderBottom} >
                  <a className={`${styles['nav-link']} ${styles['dropdown-toggle']} ${styles['text-black']} nav-link dropdown-toggle `}

                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    PRODUCTS
                    <span className={styles.arrowz}><RiArrowDropDownLine /></span>
                  </a>
                </div>

                <div className={`${styles['dropdown-menu']} dropdown-menu "tabclose" `} aria-labelledby="navbarDropdown" >

                  <Row className={`${styles['dropdown-menu-mobile']}`}>

                    {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<     Communication Channels     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

                    <Col style={{ padding: "30px" }} >
                      <p className={styles.dropdown_heading}>Communication Channels</p>

                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>

                        <Col md={1} >
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10} className={`${styles['dropdown-bottom']}`}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/best-bulk-sms-services-provider-india" onClick={toggle}>Enterprise SMS</Link>
                        </Col>

                      </Row>

                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/airport.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/best-smart-sms-url-tracking-services-india" onClick={toggle}>Smart URL Tracking</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/cloud-network.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/best-cloud-telephone-ai-autodialer-service-india" onClick={toggle}>Cloud-telephony-ai-autodialer</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/phone-call.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/best-missed-call-services-provider-india" onClick={toggle}>Missed call Service</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/padlock.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/best-virtual-mobile-number-services-india" onClick={toggle}>Virtual Mobile Number</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/telephone.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/best-voice-sms-gateway-service-provider-india" onClick={toggle}>OBD Calls</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/microphone.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/best-voice-calls-services-provider-india" onClick={toggle}>Voice Key Input</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/support.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/best-ivr-services-provider-india" onClick={toggle}>IVR Service</Link>
                        </Col>
                      </Row>

                    </Col>

                    {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<      Conversational Platform     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

                    <Col style={{ padding: "30px" }} >
                      <p className={styles.dropdown_heading}>Conversational Platform</p>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/best-rich-communication-services-rcs-india" onClick={toggle}>Rich Communication Service</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/best-whatsapp-chatbot-business-india" onClick={toggle}>Whatsapp ChatBot</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="http://wacto.in/" target="_blank">WACTO - Omnichannel</Link>
                        </Col>
                      </Row>

                    </Col>
                    {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<     Developers API     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <Col style={{ padding: "30px" }} >
                      <p className={styles.dropdown_heading}>Developers API</p>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/best-sms-api-gateway-provider-india" onClick={toggle}>SMS API</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/best-voice-api-gateway-service-provider-india" onClick={toggle}>Voice API</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/best-whatsapp-api-gateway-service-india" onClick={toggle}> Whatsapp API</Link>
                        </Col>
                      </Row>
                    </Col>

                  </Row>

                </div>

              </li>

              {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<    Solutions dropdown  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

              <li className={`${styles['nav-item']} ${styles['dropdown']} nav-item dropdown`}>
                <div className={styles.borderBottom}>
                  <a className={`${styles['nav-link']} ${styles['dropdown-toggle']} ${styles['text-black']} nav-link dropdown-toggle `}
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    SOLUTIONS
                    <span className={styles.arrowz}><RiArrowDropDownLine /></span>
                  </a>
                </div>

                <div className={`${styles['dropdown-menu']} dropdown-menu  tabclose`} aria-labelledby="navbarDropdown" >
                  <Row className={`${styles['dropdown-menu-mobile']}`}>
                    {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<     By Industry     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <Col style={{ padding: "30px" }} >
                      <p className={styles.dropdown_heading}>By Industry</p>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/telecom-software-solutions-advertising-agencies" onClick={toggle}>Advertising agencies</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/airport.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/telecom-software-solutions-automobiles" onClick={toggle}>Automobiles</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/cloud-network.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/telecom-software-solutions-BFSI " onClick={toggle}>BFSI</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/phone-call.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/telecom-software-solutions-Community " onClick={toggle}>Community</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/padlock.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/telecom-software-solutions-Consultancy " onClick={toggle}>Consultancy</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/telephone.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/telecom-software-solutions-Ecommerce " onClick={toggle}>E-commerce Solutions</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/microphone.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/telecom-software-solutions-Education" onClick={toggle}>Education</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/support.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/telecom-software-solutions-Electrical-Electronics " onClick={toggle}>Electrical & Electronics</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/support.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/telecom-software-solutions-Food-Beverages" onClick={toggle}>Food & Beverages</Link>
                        </Col>
                      </Row>
                    </Col>

                    {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<      Conversational Platform     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

                    <Col style={{ padding: "30px" }} >
                      <p className={styles.dropdown_heading}>By Industry</p>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/telecom-software-solutions-Health-Care" onClick={toggle}>Healthcare</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/airport.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/telecom-software-solutions-Human-resource" onClick={toggle}>HR</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/cloud-network.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/telecom-software-solutions-Logistics " onClick={toggle}>Logistics</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/phone-call.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/telecom-software-solutions-Personal-Care" onClick={toggle}>Personal Care</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/padlock.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/telecom-software-solutions-Press-media" onClick={toggle}>Press/Media</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/telephone.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/telecom-software-solutions-Real-estate" onClick={toggle}>Real estate</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/microphone.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/telecom-software-solutions-Retail" onClick={toggle}>Retail</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/support.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/telecom-software-solutions-Software " onClick={toggle}> Software</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/support.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/telecom-software-solutions-travels-tours" onClick={toggle}>Tours & Travels</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/support.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/telecom-software-solutions-Trading" onClick={toggle}>Trading</Link>
                        </Col>
                      </Row>
                    </Col>
                    {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<     By Business Type     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

                    <Col style={{ padding: "30px" }} >
                      <p className={styles.dropdown_heading}>By Business Type</p>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/telecom-software-solutions-corporate" onClick={toggle}>Corporate</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/telecom-software-solutions-Government " onClick={toggle}>Government</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/telecom-software-solutions-Manufacturers" onClick={toggle}>Manufacturers</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/telecom-software-solutions-Startup" onClick={toggle}>Start-ups</Link>
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                </div>
              </li>

              {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<    Digital Marketing Dropdown    >>>>>>>>>>>>>>>>>>>>>>>>>>>> */}


              <li className={`${styles['nav-item']} ${styles['dropdown']} nav-item dropdown`}>
                <div className={styles.borderBottom}>
                  <a target="_blank" href={"https://nettyfish.in/"} rel="noopener noreferrer" className={`${styles['nav-link']} ${styles['dropdown-toggle']} ${styles['text-black']} nav-link dropdown-toggle `}>
                    DIGITAL MARKETING
                    <span className={styles.arrowz}></span>
                  </a>

                </div>
              </li>

              {/* <li className={`${styles['nav-item']} ${styles['dropdown']} nav-item dropdown`}>
                <div className={styles.borderBottom}>
                  <a className={`${styles['nav-link']} ${styles['dropdown-toggle']} ${styles['text-black']} nav-link dropdown-toggle `}
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    DIGITAL MARKETING
                    <span className={styles.arrowz}><RiArrowDropDownLine /></span>
                  </a>
                </div>

                <div className={`${styles['dropdown-menu-2']} dropdown-menu`} aria-labelledby="navbarDropdown" >
                  <Row className={`${styles['dropdown-menu-mobile']}`}>


              
                    <Col style={{ padding: "30px 20px" }} >
                     
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="/assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms">SMS Marketing</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="/assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms">Voice Boardcast</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="/assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms"> Whatsapp Boardcast</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="/assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms"> Email Marketing</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="/assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms">SEO</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="/assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms">Facebook (SMM)</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="/assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms"> Instagram (SMM)</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="/assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms"> Linked-in (SMM)</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="/assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms"> Youtube (SMM)</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="/assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms"> Google Ads (SEM)</Link>
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                </div>
              </li> */}

              {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<      Become a Partner     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

              <li className={`${styles['nav-item']} ${styles['dropdown']} nav-item dropdown`}>
                <div className={styles.borderBottom}>
                  <a className={`${styles['nav-link']} ${styles['dropdown-toggle']} ${styles['text-black']} nav-link dropdown-toggle `}
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    BECOME A PARTNER
                    <span className={styles.arrowz}><RiArrowDropDownLine /></span>
                  </a>
                </div>

                <div className={`${styles['dropdown-menu-2']} dropdown-menu  tabclose1`} aria-labelledby="navbarDropdown" >
                  <Row >


                    {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<     Developers API     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <Col style={{ padding: "15px 20px" }} >
                      {/* <p className={styles.dropdown_heading}>Developers API</p> */}
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms" onClick={toggle1}>Partner With Us</Link>
                        </Col>
                      </Row>

                    </Col>
                  </Row>

                </div>
              </li>

              {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<     Resources     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

              <li className={`${styles['nav-item']} ${styles['dropdown']} nav-item dropdown`}>
                <div className={styles.borderBottom}>
                  <a className={`${styles['nav-link']} ${styles['dropdown-toggle']} ${styles['text-black']} nav-link dropdown-toggle `}
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    RESOURCES
                    <span className={styles.arrowz}><RiArrowDropDownLine /></span>
                  </a>
                </div>

                <div className={`${styles['dropdown-menu-2']} dropdown-menu tabclose2
                `} aria-labelledby="navbarDropdown" >
                  <Row className={`${styles['dropdown-menu-mobile']}`}>


                    {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<     Developers API     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <Col style={{ padding: "15px 20px" }} >
                      {/* <p className={styles.dropdown_heading}>Developers API</p> */}
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item `} href="/blogs-nettyfish-solution" onClick={toggle2}>Blog</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item `} href="/e-manual-nettyfish-solution" onClick={toggle2}>E-manuals</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/distributed-ledger-technology-dlt" onClick={toggle2}>DLT</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/tutorial-product-videos" onClick={toggle2}>Videos</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item  `} href="/frequently-asked-questions" onClick={toggle2}>FAQ</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item `} href="/corporate-events" onClick={toggle2}>Event</Link>
                        </Col>
                      </Row>

                    </Col>
                  </Row>

                </div>
              </li>
              <li className={`${styles['nav-item']} ${styles['dropdown']} nav-item dropdown`}>
                <div className={styles.borderBottom}>
                  <Link onClick={toggle} href="/no1-telecom-company-india-contact" className={`${styles['nav-link']} ${styles['dropdown-toggle']} ${styles['text-black']} nav-link dropdown-toggle `}>
                    CONTACT US
                    <span className={styles.arrowz}></span>
                  </Link>
                </div>
              </li>
              <div style={{ alignSelf: "center", padding: "16px" }}>
                <button className={styles.freedemo} onClick={() => window.open("http://wacto.in/", "_blank")}>Free Demo</button>{' '}
              </div>
              {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<      Become a Partner     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

              <li className={`${styles['nav-item']} ${styles['dropdown']} nav-item dropdown`}>
                <div className={styles.borderBottom}>
                  <a className={`${styles['nav-link']} ${styles['dropdown-toggle']} ${styles['text-black']} nav-link dropdown-toggle `}
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <Image
                      loader={myLoader}
                      src="assets/button group.png"
                      alt="Picture of the author"
                      width={40}
                      height={40}
                    />
                    <span className={styles.arrowz}></span>
                  </a>
                </div>

                <div className={`${styles['dropdown-menu-2']} dropdown-menu tabclose6`} aria-labelledby="navbarDropdown" >
                  <Row className={`${styles['dropdown-menu-mobile']}`} >


                    {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<     Developers API     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <Col style={{ padding: "15px 20px" }}>
                      {/* <p className={styles.dropdown_heading}>Developers API</p> */}
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px", borderBottom: "1px solid #e0e0e0" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/login.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <a target="_blank" className={`${styles['dropdown-item']} dropdown-item`} href="/login" onClick={toggle3}>Login</a>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px", borderBottom: "1px solid #e0e0e0" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/payment.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item `} href="https://smssol.myinstamojo.com" target="_blank" onClick={toggle3}>Payment</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px", borderBottom: "1px solid #e0e0e0" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/sales.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item `} href="/enterprise_sms" onClick={toggle3}>Offers</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "20px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/smartphone.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms" onClick={toggle3}>+91 8608 666 111</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/worldwide.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item `} href="/enterprise_sms" onClick={toggle3}>support@nettyfish.com</Link>
                        </Col>
                      </Row>

                    </Col>
                  </Row>


                </div>
              </li>


            </ul>



          </div>
        </div>
      </nav>



    </>
  );
};

export default Header;