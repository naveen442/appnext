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
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="https://kit.fontawesome.com/c2422d7d5c.css" crossOrigin="anonymous"></link>
            </Head>
            <Script src="https://kit.fontawesome.com/c2422d7d5c.js" crossorigin="anonymous"></Script>
            <div className={`${styles['footer-all']}`}>

                <div className={`${styles['footer']}`}>

                    <Container>

                        <div className={`${styles['bor-bot']}`}>
                            <Row>

                                <Col md={3}>
                                    <h4>Products</h4>
                                    <ul>
                                        <li><a href='#'>Enterprise sms</a></li>
                                        <li><a href='#'>Smart url tracking</a></li>
                                        <li><a href='#'>Cloud telephony-ai-autodialer</a></li>
                                        <li><a href='#'>Missed call</a></li>
                                        <li><a href='#'>Virtual mobile number</a></li>
                                        <li><a href='#'>Obd calls</a></li>
                                        <li><a href='#'>Voice key input</a></li>
                                        <li><a href='#'>Ivr</a></li>
                                    </ul>
                                </Col>

                                <Col md={3}>
                                    <h4>Solutions</h4>
                                    <ul>
                                        <li><a href='#'>Advertising agencies</a></li>
                                        <li><a href='#'>Automobiles</a></li>
                                        <li><a href='#'>Bfsi</a></li>
                                        <li><a href='#'>Community</a></li>
                                        <li><a href='#'>Consultancy</a></li>
                                        <li><a href='#'>E-commerce</a></li>
                                        <li><a href='#'>Education</a></li>
                                        <li><a href='#'>Electrical & electronics</a></li>
                                        <li><a href='#'>Food & beverages</a></li>

                                    </ul>
                                </Col>

                                <Col md={3}>
                                    <h4>Digital Marketing</h4>
                                    <ul>
                                        <li><a href='#'>We sms marketing</a></li>
                                        <li><a href='#'>WhatsApp broadcast</a></li>
                                        <li><a href='#'>Email marketing</a></li>
                                        <li><a href='#'>SEO</a></li>
                                        <li><a href='#'>Instagram  </a></li>
                                        <li><a href='#'>Linked-in</a></li>
                                        <li><a href='#'>YouTube </a></li>
                                        <li><a href='#'>Google ads </a></li>
                                    </ul>
                                </Col>

                                <Col md={3}>
                                    <h4>Become a Partner</h4>
                                    <ul>
                                        <li><a href='#'>Partner with Us</a></li>
                                    </ul>

                                    <h4>Social Connect</h4>
                                    <Row>
                                        <Col>
                                            <Image className={styles.imagecount}
                                                loader={myLoader}
                                                src="/assets/facebook 1.svg"
                                                alt="Picture of the author"
                                                width={60}
                                                height={60}
                                            />
                                            <Image className={styles.imagecount}
                                                loader={myLoader}
                                                src="/assets/twitter 1.svg"
                                                alt="Picture of the author"
                                                width={60}
                                                height={60}
                                            />
                                            <Image className={styles.imagecount}
                                                loader={myLoader}
                                                src="/assets/instagram 1.svg"
                                                alt="Picture of the author"
                                                width={60}
                                                height={60}
                                            />
                                            <Image className={styles.imagecount}
                                                loader={myLoader}
                                                src="/assets/linkedin 1.svg"
                                                alt="Picture of the author"
                                                width={60}
                                                height={60}
                                            />
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

                            <p className={`${styles['copyright']}`}>Nettyfish Solutions Private Limited @2023</p>

                        </div>

                    </Container>
                </div>


            </div>






        </>

    );

}