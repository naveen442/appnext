import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Head from 'next/head'
import styles from "../styles/Footer.module.css";
import Script from 'next/script'
import Link from 'next/link'
import Image from 'next/image';




const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 100}`
}

export default function footer() {



    return (
        <>
            <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;1,100&display=swap" rel="stylesheet"/>

                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins"/>
        <link rel="stylesheet" href="https://kit.fontawesome.com/c2422d7d5c.css" crossOrigin="anonymous"></link>
            </Head>
            <Script src="https://kit.fontawesome.com/c2422d7d5c.js" crossrigin="anonymous"></Script>
       
            <div className={`${styles['footer-all']}`}>

                <div className={`${styles['footer']}`}>

                    <Container>

                        <div className={`${styles['bor-bot']}`}>
                            <Row>

                                <Col md={3}>
                                    <div></div>
                                    <h4>Products</h4>
                                    <ul >
                                        <li className='font_family'><a href="/enterprise_sms" className='font_family'>Enterprise sms</a></li>
                                        <li><a href="/smart_url_tracking">Smart url tracking</a></li>
                                        <li><a href="/cloud-telephony-ai-autodialer">Cloud telephony-ai-autodialer</a></li>
                                        <li><a  href="/missed_call_service">Missed call</a></li>
                                        <li><a href="/virtual_mobile_number">Virtual mobile number</a></li>
                                        <li><a href="/obd_calls">Out bound dialer calls</a></li>
                                        <li><a href="/voice_key_input">Voice key input</a></li>
                                        <li><a href="/ivr_service">Interactive Voice Response</a></li>
                                    </ul>
                                </Col>

                                <Col md={3}>
                                <h4>Solutions</h4>
                                    <Row>
                                    
                                        <Col md={5}>
                                        <ul className='margin_top_a'>
                                        <li ><a href="/advertising_agencies">Advertising agencies</a></li>
                                        <li><a href="/automobiles_solutions">Automobiles</a></li>
                                        <li><a href="/bfsi_solutions">BFSI</a></li>
                                        <li><a href="/healthcare">Healthcare</a></li>
                                        <li><a href="/retail">Retail</a></li>
                                        <li><a href="/Logistics">Logistics</a></li>
                                       
                                       

                                    </ul>
                                        </Col>
                                        <Col md={6}>
                                            <ul className='margin_top_a'>
                                        <li><a href="/E-commerce">E-commerce</a></li>
                                        <li><a href="/education">Education</a></li>
                                        <li><a href="/software">Software</a></li>
                                        <li><a href="/trading">Trading</a></li>
                                        <li><a href="/electrical_electronics">Electrical&electronics</a></li>
                                        <li><a href="/food_beverages">Food & beverages</a></li>
                                        <li><a href="/tour_travels" >Tours & Travels</a></li>
                                        
                                        </ul>
                                        </Col>
                                    </Row>
                                    
                                   
                                </Col>

                                <Col md={3}>
                                    <h4>Digital Marketing</h4>
                                    <ul>
                                        <li><a href='https://www.nettyfish.in/search-engine-optimization/'>Search Engine Optimization</a></li>
                                        <li><a href='https://www.nettyfish.in/social-media-optimization/'>Social Media Optimization </a></li>
                                        <li><a href='https://www.nettyfish.in/ecommerce-web-development/'>Ecommerce Web Development</a></li>
                                        <li><a href='https://www.nettyfish.in/hybrid-app-development/'>Hybrid App Development </a></li>
                                        <li><a href='https://www.nettyfish.in/flutter-app-development/'>Flutter App Development </a></li>
                                        <li><a href='https://www.nettyfish.in/android-app-development/'>Android App Development</a></li>
                                        <li><a href='https://www.nettyfish.in/ios-app-development/'>IOS App Development  </a></li>
                                    </ul>
                                </Col>

                                <Col md={3}>
                                    <h4>Become a Partner</h4>
                                    <ul>
                                        <li><a href="/enterprise_sms">Partner with Us</a></li>
                                    </ul>

                                    <h4>Social Connect</h4>
                                    <Row>
                                        <Col>
                                        <a href="https://www.facebook.com/nettyfishsolutions">
                                            <Image className={styles.imagecount}
                                                loader={myLoader}
                                                src="/assets/facebook 1.svg"
                                                alt="Picture of the author"
                                                width={60}
                                                height={60}
                                            />
                                            </a>
                                            <a href="https://twitter.com/Nettyfish_offic ">
                                            <Image className={styles.imagecount}
                                                loader={myLoader}
                                                src="/assets/twitter 1.svg"
                                                alt="Picture of the author"
                                                width={60}
                                                height={60}
                                            />
                                            </a>
                                            <a href="https://www.instagram.com/nettyfishsolutions/ ">
                                            <Image className={styles.imagecount}
                                                loader={myLoader}
                                                src="/assets/instagram 1.svg"
                                                alt="Picture of the author"
                                                width={60}
                                                height={60}
                                            />
                                            </a>
                                            <a href="https://www.linkedin.com/company/nettyfish-solutions-pvt-ltd ">
                                            <Image className={styles.imagecount}
                                                loader={myLoader}
                                                src="/assets/linkedin 1.svg"
                                                alt="Picture of the author"
                                                width={60}
                                                height={60}
                                            />
                                            </a>
                                        </Col>

                                    </Row>
                                   
                                    
                                    <h4>Get Started for DEMO</h4>
                                    <form className="d-flex">
                                    <Row>
                                    <Col md={12} style={{paddingBottom:"15px"}}>
                                        <input className={`${styles['form-control']} form-control me-2`} type="search" placeholder="Enter Your Email" aria-label="Search" />
                                        </Col>
                                        <Col md={12}  style={{paddingBottom:"15px"}}>
                                        <button className={`${styles['btn-outline-success']} ${styles['sea-btn']} btn btn-outline-success sea-btn`} type="submit">Get Started</button>
                                        </Col>
                                        </Row>
                                    </form>
                                    

                                </Col>

                            </Row>

                        </div>

                        <div>
                            <div className={`${styles['footercopy']} col-md-12 text-center`}>
                                <p className={`${styles['menu']}`}>
                                    <Link href="#">Legal</Link>
                                    <Link href="#">Privacy</Link>
                                    <Link href="#">Press & Media</Link>
                                    <Link href="#">Investors</Link>
                                    <Link href="#">Jobs</Link>
                                </p>
                            </div>

                            <p className={`${styles['copyright']}`}>2023 © Nettyfish Solutions Pvt Ltd. All Rights Reserved.</p>

                        </div>

                    </Container>
                </div>


            </div>






        </>

    );

}