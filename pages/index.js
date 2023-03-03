import { Container, Row, Col, Button } from "react-bootstrap";

import CountUp from "react-countup";
import { TiTick } from "react-icons/ti";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CgFormatLeft } from "react-icons/cg";
import styles from "../styles/Home.module.css";
import Head from "next/head"
import Image from 'next/image';
import Slider from "react-slick"
import Script from "next/script"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Grid, Text, Link } from "@nextui-org/react";
import React, { useEffect } from 'react';
import img7 from '../public/assets/nettyfish.png';
import AOS from 'aos';

import "@fontsource/poppins"; // Defaults to weight 400.
import { FloatingWhatsApp } from "react-floating-whatsapp";



const img = {
    // dots: true,
    arrows: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

    responsive: [{
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }

    },

    ]
};


const img1 = {
    // dots: true,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,

    responsive: [
        {
            breakpoint: 778,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }

        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }

        },
    ]
};

const img2 = {
    // dots: true,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,

    responsive: [{
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }

    },

    ]
};
const img3 = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

    responsive: [{
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }

    },

    ]
};




const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 100}`
}


function Home() {
//    const wacto=(e,t,a)=>{
//     var c=e.head||e.getElementsByTagName("head")[0],n=e.createElement("script");n.async=!0,n.defer=!0, n.type="text/javascript",n.src=t+"/static/js/widget.js?config="+JSON.stringify(a),c.appendChild(n)
//     document,"https://app.wacto.in",{bot_key:"26493f2dc1864025",welcome_msg:true,branding_key:"wacto",server:"https://app.wacto.in",e:"p" }
//     }

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    }, [])

    return (
        <>
           
            <Head>
            <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
<meta name="msapplication-TileColor" content="#da532c"/>
<meta name="theme-color" content="#ffffff"/>
            <link rel="shortcut icon" href="/favicon.ico"/>
<link rel="icon" type="image/gif" href="favicon/animated_favicon1.gif"/>
                <title>Nettyfish</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
                
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/> 

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"></link>

            </Head>
            <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>
           

        
            <div>



                <div className={styles.banner}>

                    <Container fluid className="p-0">


                        <Slider {...img} >
                            <div >
                                <Row className="banner-row">


                                    <Col md={7} style={{ alignSelf: "center", padding: "0px 0px 50px 40px" }}>
                                        <div >

                                            {/* <h1>100% delivery bulk SMS service provider in India</h1> */}
                                            <h1>Premium Messaging Service For Your Business/Enterprise</h1>
                                            {/* <p className={styles.sub_para}>Reach Millions of customers instantly with our bulk SMS marketing service. Quick, effective, and affordable marketing for your business.</p> */}
                                            <p className={styles.sub_para}>Increase sales and customer satisfaction with smarter SMS campaigns, instant OTPs, notifications, two-way interactions, DLT SMS, SMS API and much more.</p>

                                            <form className="d-flex">
                                                <input className={`${styles['form-control']} form-control me-2`} type="search" placeholder="Enter Your Email" aria-label="Search" />
                                                <button className={`${styles['btn-outline-success']} ${styles['sea-btn']} btn btn-outline-success sea-btn`} type="submit">Lets Talk</button>
                                            </form>


                                        </div>
                                    </Col>


                                    <Col md={5} >
                                        <div style={{ textAlign: "center", textAlign: "center" }}>
                                            <Image
                                                loader={myLoader}
                                                src="/assets/home_page_slider_bulk_sms_services_1.png"
                                                alt="Picture of the author"
                                                width={400}
                                                height={400}
                                                layout='responsive'
                                            />
                                        </div>

                                    </Col>

                                </Row>

                            </div>


                            <div>
                                <Row className="banner-row">


                                    <Col md={7} style={{ alignSelf: "center", padding: "0px 0px 50px 40px" }}>
                                        <div >

                                            <h1>Thriving Digital Marketing Company In Chennai</h1>
                                            <p className={styles.sub_para}>Take advantage of our comprehensive digital marketing services to get more customers. Get your online presence noticed by the right audience.</p>

                                            <form className="d-flex">
                                                <input className={`${styles['form-control']} form-control me-2`} type="search" placeholder="Enter Your Email" aria-label="Search" />
                                                <button className={`${styles['btn-outline-success']} ${styles['sea-btn']} btn btn-outline-success sea-btn`} type="submit">Lets Talk</button>
                                            </form>


                                        </div>
                                    </Col>


                                    <Col md={5} >
                                        <div style={{ textAlign: "center", textAlign: "center" }}>
                                            <Image
                                                loader={myLoader}
                                                src="/assets/home_page_slider_digital_marketing_1.png"
                                                alt="Picture of the author"
                                                width={550}
                                                height={400}
                                                layout='responsive'
                                            />
                                        </div>

                                    </Col>

                                </Row>

                            </div>

                            <div>
                                <Row className="banner-row">


                                    <Col md={7} style={{ alignSelf: "center", padding: "0px 0px 50px 40px" }}>
                                        <div >

                                            <h1>Enhance your Business Using WhatsApp Business API </h1>
                                            <p className={styles.sub_para}>Take your business to the next level with WhatsApp Marketing. Boost sales, increase customer engagement, and reach more customers with targeted messaging campaigns. Try it today!</p>

                                            <form className="d-flex">
                                                <input className={`${styles['form-control']} form-control me-2`} type="search" placeholder="Enter Your Email" aria-label="Search" />
                                                <button className={`${styles['btn-outline-success']} ${styles['sea-btn']} btn btn-outline-success sea-btn`} type="submit">Lets Talk</button>
                                            </form>


                                        </div>
                                    </Col>


                                    <Col md={5} >
                                        <div style={{ textAlign: "center", textAlign: "center" }}>
                                            <Image
                                                loader={myLoader}
                                                src="/assets/home_page_slider_wacto_1.png"
                                                alt="Picture of the author"
                                                width={550}
                                                height={400}
                                                layout='responsive'
                                            />

                                        </div>

                                    </Col>

                                </Row>

                            </div>





                        </Slider>

                    </Container>


                </div>



                {/* business worldwide */}

                <div className={styles.business}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2" style={{ alignSelf: "center" }}>
                                <div>
                                    <p className={`${styles['business-p']}`}>Trusted by over 100+ businesses worldwide!</p>
                                </div>

                            </div>

                            <div className="col-md-10">
                                <div className="row">
                                    <div className="col">
                                        <div className={styles.countno}>
                                            <Image className={styles.imagecount}
                                                loader={myLoader}
                                                src="/assets/Frame (4).png"
                                                alt="Picture of the author"
                                                width={60}
                                                height={60}
                                                layout='responsive'
                                            />

                                            <p className={styles.countno}><CountUp end={300} /></p>
                                            <p className={`${styles['countno-p']} countno-p`}>More revenues for the brand</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className={styles.countno}>
                                            <Image className={styles.imagecount}
                                                loader={myLoader}
                                                src="/assets/Frame (5).png"
                                                alt="Picture of the author"
                                                width={60}
                                                height={60}
                                                layout='responsive'
                                            />
                                            <p className={styles.countno}><CountUp end={4309} /></p>
                                            <p className={`${styles['countno-p']} countno-p`}>Brands Tied up across Globe</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className={styles.countno}>
                                            <Image className={styles.imagecount}
                                                loader={myLoader}
                                                src="/assets/Frame (6).png"
                                                alt="Picture of the author"
                                                width={60}
                                                height={60}
                                                layout='responsive'
                                            />
                                            <p className={styles.countno}><CountUp end={2300} /></p>
                                            <p className={`${styles['countno-p']} countno-p`}>brands work with us</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className={styles.countno}>
                                            <Image className={styles.imagecount}
                                                loader={myLoader}
                                                src="/assets/Frame (7).png"
                                                alt="Picture of the author"
                                                width={60}
                                                height={60}
                                                layout='responsive'
                                            />
                                            <p className={styles.countno}><CountUp end={29620} /></p>
                                            <p className={`${styles['countno-p']} countno-p`}>Happy Clients</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                {/* aboutus */}

                <div className={`${styles['backdrop']} ${styles['scale']} `}>

                    <div className="container">

                        <div className="row">

                            <div className="col-md-6 align-self-center">
                                <div data-aos="flip-down">
                                    <div>

                                        <Image
                                            loader={myLoader}
                                            src="/assets/enterprise-sms.webp"
                                            alt="Picture of the author"
                                            width={500}
                                            height={500}
                                            layout='responsive' />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div data-aos="fade-down">
                                    <div className={styles.p_20} style={{ paddingTop: "35px" }}>

                                        <div >
                                            <h1 className={styles.title_bold}>Scale-up your Business using AI-Powered Omnichannel</h1>
                                            <p className={styles.para}>Automate reminders, offers, delivery updates using business WhatsApp chatbot. WACTO WhatsApp chatbot facilitates multi-agent inbox with 24*7 sales and support by configuring auto-response chatbot flows.</p>

                                            <p className={styles.para}>Build no-code chatbot flows using keyword inputs that creates intelligent bot for business. Customers get engaged and feel like communicating with real person . WACTO Business API has user-friendly chat interface for agents to interupt bot and chat with customers. You can get a free 1000 conversations every month on business whatsapp API.</p>
                                        </div>

                                        <div>

                                            <Image style={styles.playbutton}
                                                loader={myLoader}
                                                src="/assets/button.gif"
                                                alt="Picture of the author"
                                                width={70}
                                                height={70} />
                                            <span className={`${styles['read-about']}`}>Read More </span>
                                            <button type="button" className={`${styles['leftarrow']} ${styles['btn-outline-primary']} btn btn-outline-primary leftarrow`}><MdOutlineKeyboardArrowRight style={{ fontSize: "24px" }} /></button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                {/* Nettyfish solutions */}

                <div className={`${styles['solutions']}`}>

                    <div className="container">
                        <p className={`${styles['title-center']}`}>Nettyfish Products & Solutions</p>
                        <p className={`${styles['sub-para-center']}`}>Whats heppening around the World.</p>
                        <div className="row">

                            <div className="col-md-4">
                                <div className={`${styles['card']}`}>

                                    <Image
                                        loader={myLoader}
                                        src="/assets/solutions-section-digital-marketing.webp"
                                        alt="Picture of the author"
                                        width={300}
                                        height={250}
                                        layout='responsive' />

                                    <div className={`${styles['card-body']}`}>


                                        <p className={`${styles['card-text']}`}>Solutions</p>

                                        <h5 className={`${styles['card-title']}`}>Digital Marketing</h5>
                                        <div>


                                            <button type="button" className={`${styles['leftarrow']} btn btn-outline-primary leftarrow`}><MdOutlineKeyboardArrowRight style={{ fontSize: "24px" }} /></button>

                                        </div>

                                    </div>
                                </div>

                            </div>


                            <div className="col-md-4">
                                <div className={`${styles['card']}`}>


                                    <Image
                                        loader={myLoader}
                                        src="/assets/solutions-section-crm.webp"
                                        alt="Picture of the author"
                                        width={300}
                                        height={250}
                                        layout='responsive'
                                        css={{
                                            padding: "5px"
                                        }}
                                    />
                                    <div className={`${styles['card-body']}`}>


                                        <p className={`${styles['card-text']}`}>CRM</p>

                                        <h5 className={`${styles['card-title']}`}>Solutions for Business</h5>
                                        <div>


                                            <button type="button" className={`${styles['leftarrow']} btn btn-outline-primary leftarrow`}><MdOutlineKeyboardArrowRight style={{ fontSize: "24px" }} /></button>

                                        </div>

                                    </div>
                                </div>

                            </div>


                            <div className="col-md-4">
                                <div className={`${styles['card']}`}>
                                    <Image
                                        loader={myLoader}
                                        src="/assets/solutions-section-sms.webp"
                                        alt="Picture of the author"
                                        width={300}
                                        height={250}
                                        layout='responsive' />

                                    <div className={`${styles['card-body']}`}>


                                        <p className={`${styles['card-text']}`}>SMS</p>

                                        <h5 className={`${styles['card-title']}`}>RCS- Next generation of SMS</h5>
                                        <div>


                                            <button type="button" className={`${styles['leftarrow']} btn btn-outline-primary leftarrow`}><MdOutlineKeyboardArrowRight style={{ fontSize: "24px" }} /></button>

                                        </div>

                                    </div>
                                </div>

                            </div>




                        </div>

                    </div>

                </div>
                <div>
                    <div style={{ overflow: "hidden" }}>
                        <p className={`${styles['title-center']}`}>Nettyfish Solutions</p>
                        <Slider {...img3} style={{ width: "100%" }}>
                            <div>
                                <Row>
                                    <Col md={6} style={{ alignSelf: "center", textAlign: "center" }}>
                                        <div style={{ padding: "50px" }}>
                                            <Image
                                                loader={myLoader}
                                                src="assets/cloud-crm.webp"
                                                alt="Picture of the author"
                                                height={500}
                                                width={500}
                                                quality={100}
                                                layout="responsive"
                                            />
                                        </div>
                                    </Col>
                                    <Col md={6} style={{ alignSelf: "center", padding: "50px" }}>
                                        <div >
                                            <p className={styles.title_bold}>Cloud CRM</p>
                                            <p>The Cloud CRM manages sales pipelines, user&apos;s transaction, sales pipelines, quote generation, marketing automation.</p>
                                            <p className={styles.fontbold}> <Image
                                                                loader={myLoader}
                                                                src="/assets/list1.gif"
                                                                alt="Picture of the author"
                                                                style={{float:"left",paddingRight:1}}
                                                                width={30}
                                                                height={30} /> Multi-Agent login</p>
                                            <p>Multiple Agents can login and can have their own client list and followup</p>
                                            <p className={styles.fontbold}><Image
                                                                loader={myLoader}
                                                                src="/assets/list1.gif"
                                                                alt="Picture of the author"
                                                                style={{float:"left",paddingRight:1}}
                                                                width={30}
                                                                height={30} /> User Management</p>
                                            <p>Multiple Agents can login and can have their own client list and followup</p>
                                            <p className={styles.fontbold}><Image
                                                                loader={myLoader}
                                                                src="/assets/list1.gif"
                                                                alt="Picture of the author"
                                                                style={{float:"left",paddingRight:1}}
                                                                width={30}
                                                                height={30} /> Sales Pipeline</p>
                                            <p>The prospect, lead , qualified lead, closed deal can be marked and retargeted</p>
                                            <p className={styles.fontbold}><Image
                                                                loader={myLoader}
                                                                src="/assets/list1.gif"
                                                                alt="Picture of the author"
                                                                style={{float:"left",paddingRight:1}}
                                                                width={30}
                                                                height={30} /> Detailed Reports</p>
                                            <p>Date wise filtering of reports, revenue generation report, month wise sales can be viewed</p>
                                            <p className={styles.fontbold}><Image
                                                                loader={myLoader}
                                                                src="/assets/list1.gif"
                                                                alt="Picture of the author"
                                                                style={{float:"left",paddingRight:1}}
                                                                width={30}
                                                                height={30} /> Marketing Automation</p>
                                            <p>Marketing automation can be done by notifying customers and maintaining relationship using multiple communicational channel</p>
                                        </div>
                                    </Col>

                                </Row>
                            </div>
                            {/* <div>
                                <Row>
                                    <Col md={6} style={{ alignSelf: "center", textAlign: "center" }}>
                                        <div style={{ padding: "50px" }}>
                                            <Image
                                                loader={myLoader}
                                                src="assets/1653565709_ezgif.com-gif-maker (58).webp"
                                                alt="Picture of the author"
                                                height={500}
                                                width={500}
                                                quality={100}
                                                layout="responsive"
                                            />
                                        </div>
                                    </Col>
                                    <Col md={6} style={{ alignSelf: "center", padding: "50px" }}>
                                        <div >
                                            <p className={styles.title_bold}>RCS- Next generation of SMS</p>
                                            <p>Features of Rich Commication services are</p>
                                            <p className={styles.fontbold}><Image
                                                                loader={myLoader}
                                                                src="/assets/list1.gif"
                                                                alt="Picture of the author"
                                                                style={{float:"left",paddingRight:1}}
                                                                width={30}
                                                                height={30} /> Branding on messaging app with Company Name and logo:</p>
                                            <p>The logo appears along the side of each message in the bot auto-response</p>
                                            <p className={styles.fontbold}><Image
                                                                loader={myLoader}
                                                                src="/assets/list1.gif"
                                                                alt="Picture of the author"
                                                                style={{float:"left",paddingRight:1}}
                                                                width={30}
                                                                height={30} /> Customer Engagement with Quick Auto-response:</p>
                                            <p>Quick conversations are created with button to action feature</p>
                                            <p className={styles.fontbold}><Image
                                                                loader={myLoader}
                                                                src="/assets/list1.gif"
                                                                alt="Picture of the author"
                                                                style={{float:"left",paddingRight:1}}
                                                                width={30}
                                                                height={30} /> Blue Badge Verification:</p>
                                            <p>Provides tickmark for the brand to show that it is a verified business</p>
                                            <p className={styles.fontbold}><Image
                                                                loader={myLoader}
                                                                src="/assets/list1.gif"
                                                                alt="Picture of the author"
                                                                style={{float:"left",paddingRight:1}}
                                                                width={30}
                                                                height={30} /> Carousels:</p>
                                            <p>Customer can browse, scroll and view images of products for shopping </p>

                                        </div>


                                    </Col>

                                </Row>
                            </div> */}

                            <div>
                                <Row>
                                    <Col md={6} style={{ alignSelf: "center", textAlign: "center" }}>
                                        <div style={{ padding: "50px" }}>
                                            <Image
                                                loader={myLoader}
                                                src="assets/whatsapp-conversatation.webp"
                                                alt="Picture of the author"
                                                height={500}
                                                width={500}
                                                quality={100}
                                                layout="responsive"
                                            />
                                        </div>
                                    </Col>
                                    <Col md={6} style={{ alignSelf: "center", padding: "50px" }}>
                                        <div >
                                            <p className={styles.title_bold}>AI-Powered Whatsapp Conversation</p>
                                            <p>Nettyfish whatsapp Chatbot provides AI-powered bot solution for all the industries. The user-friendly platform has a dashboard with sandbox where you can view the incoming and outgoing messages. The incoming queries and the bot replies are viewed in the sandbox and agent intervention between the bot chats are also available. A detailes report of Agent solved queries and bot solved queries can be exported. The bot replies 24/7 to all the queries even during the non-business hours. The dashboard contains the feature of creating no-coding chatbot flows. You can create multiple chatflows by configuring the keywords accordingly. Whatsapp API document is provided to connect with any software.</p>
                                            <p className={styles.olfontbold}>The dashboard has a date filtere reports and chart with classifications of</p>
                                            <ol className={styles.olfontbold}>
                                                <li>New Ticket</li>
                                                <li>Open Ticket</li>
                                                <li>Pending Tickets</li>
                                                <li>Solved Tickets</li>
                                                <li>Solved by Bot</li>
                                                <li>Solved by Agent</li>
                                                <li>Expired</li>
                                                <li>Expired without agent reply</li>
                                            </ol>
                                            <p>The charges varies according to business- initiated and user-intiated messages but the first 1000 conversations are free with monthly subscriptions.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Slider>
                    </div>
                </div>
                {/* smarter */}

                <div>


                    <div className={`${styles['smarter']}`}>
                        <p className={`${styles['sub-head']}`}>Just 3 Steps</p>
                        <p className={`${styles['h1-1']}`}>Make it Smarter</p>

                        <div className={`${styles['widddth']}`}>
                            <div className="row">

                                <div className="col-md-12">
                                    <div data-aos="zoom-in" style={{ textAlign: "center", marginRight: "200px" }}>

                                        <p className={`${styles['fulldash']} ${styles['card-shadow']}`}><span><TiTick className={`${styles['ticks']} `} /></span> <span className={`${styles['smarter-p']}`}> Login the Dashboard</span></p>

                                        <Image style={{ position: "absolute", top: "65px" }}
                                            loader={myLoader}
                                            src="/assets/output-onlinegiftools.gif"
                                            alt="Picture of the author"
                                            width={100}
                                            height={150}

                                        />
                                    </div>
                                </div>

                                <div className="col-md-12" style={{ textAlign: "end" }}>
                                    <div data-aos="zoom-in">
                                        <p className={`${styles['fulldash1']} ${styles['card-shadow']}`}><span><TiTick className={`${styles['ticks']} `} /></span> <span className={`${styles['smarter-p']}`}> Send SMS URL & Attachment</span></p>
                                        <Image className={`${styles['flip']}`} style={{ position: "absolute" }}
                                            loader={myLoader}
                                            src="/assets/output-onlinegiftools.gif"
                                            alt="Picture of the author"
                                            width={100}
                                            height={150}

                                        />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div data-aos="zoom-in">
                                        <p className={`${styles['fulldash2']} ${styles['card-shadow']}`}><span><TiTick className={`${styles['ticks']} `} /></span> <span className={`${styles['smarter-p']}`}>Track Campaign Metrics
                                        </span></p>

                                    </div>
                                </div>



                            </div>

                        </div>
                    </div>
                </div>
                <div className={styles.p_100}>
                    <div className="container">

                        <div data-aos="fade-up" data-aos-duration="3000">
                            <div className={`${styles['smarter1']}`}>

                                <div className={`${styles['boxpadding']}`}>


                                    <div className="row">

                                        <div className="col-md-8">
                                            <div style={{ marginTop: "20px" }}>
                                                <p className={`${styles['h1-2']}`}>Automate Business WhatsApp Conversations with AI Chatbot</p>
                                                <p className={`${styles['sub-para-white']}`}>Experience the human-like realtime conversation by creating <b /> no-code chat not workflow to improve customer service</p>
                                                <button type="button" className={`${styles['freedemo']} btn btn-primary`}>View Pricing</button>

                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div>
                                                <Image
                                                    loader={myLoader}
                                                    className={`${styles['chatbot']} imm chatbot`}
                                                    src="/assets/chatbot.gif"
                                                    alt="Picture of the author"
                                                    width={450}
                                                    height={500}
                                                    layout='responsive' />

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>

                </div>


                {/* integration */}
                <div className={` ${styles['colorback']}`}>

                    <div className="container">

                        <div className="row">



                            <div className="col-md-5" style={{ alignSelf: "center" }}>
                                <div data-aos="fade-up">


                                    <div style={{ alignSelf: "center" }}>
                                        <p className={styles.title_bold}>Integration</p>
                                        {/* <p>I run Nettyfish Solutions. We’ve been working on a product that helps you automate the process of sending transaction notifications to end users in your business, so they can get connected to the company’s digital presence more easily.</p>

                                        <p>If you’re interested in using our product, we’d love to have you join us at a meetup or join our community online. You can sign up directly through the website.</p>

                                        <p>We hope you’ll find value in our product!</p> */}
                                        <p>Nettyfish can help simplify your business operations by seamlessly integrating our products and services into your existing technology stack. Our integrations can work with your preferred e-commerce platforms, websites, CRMs, and e-stores, among other things. By integrating with Nettyfish, you can transform all of your omnichannel efforts into a single, user-friendly platform, eliminating the need to manage multiple tasks.</p>
                                        <ul  className={styles.ul1}>
                                            <li><Image
                loader={myLoader}
                src="./assets/list1.gif"
                alt="Picture of the author"
                width={30}
                height={30} /> Provide support across channels</li>
                                            <li><Image
                loader={myLoader}
                src="./assets/list1.gif"
                alt="Picture of the author"
                width={30}
                height={30} /> Monitor in real time</li>
                                            <li> <Image
                loader={myLoader}
                src="./assets/list1.gif"
                alt="Picture of the author"
                width={30}
                height={30} />  Optimize performance</li>
                                            <li> <Image
                loader={myLoader}
                src="./assets/list1.gif"
                alt="Picture of the author"
                width={30}
                height={30} />Save time and lower costs</li>
                                            <li> <Image
                loader={myLoader}
                src="./assets/list1.gif"
                alt="Picture of the author"
                width={30}
                height={30} /> Enhance productivity</li>
                                            <li> <Image
                loader={myLoader}
                src="./assets/list1.gif"
                alt="Picture of the author"
                width={30}
                height={30} /> Boost customer satisfaction</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <Image
                                            loader={myLoader}
                                            src="/assets/button.gif"
                                            alt="Picture of the author"
                                            width={70}
                                            height={70} />

                                        <span className={`${styles['read-about']}`}>Read More</span>
                                        <button type="button" className={`${styles['leftarrow']} btn btn-outline-primary leftarrow`}><MdOutlineKeyboardArrowRight style={{ fontSize: "24px" }} /></button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-7">
                                <div className={`${styles['-imgz']}`} style={{ aligSelf: "center", textAlign: "end" }}>
                                    <Image
                                        loader={myLoader}
                                        src="/assets/Frame_3863.gif"
                                        alt="Picture of the author"
                                        width={200}
                                        height={200}
                                        layout='responsive' />

                                </div>
                            </div>


                        </div>

                    </div>


                </div>



                <div className={`${styles['slideshow']}`}>
                    <Container>
                        <div className={styles.pb_40}>
                            <p className={`${styles['title_client']}`} >What Our Client Said About Us</p>
                            <p>Use this section to describe your company</p>
                        </div>
                    </Container>
                    <Slider {...img1}>
                    <div className={styles.card_p}>
                        <div className="slider-csm">
                            <Card className={`${styles['card_hover']}`} css={{ p: "$10", height: "270px" }} >
                                <div>
                                    <Card.Header>
                                        <Row className="fullwidth">
                                            <Col xs={12} sm={12 }md={12} lg={12} xl={12}>
                                                <Image
                                                    loader={myLoader}
                                                    src="/assets/tvs4.jpg"
                                                    alt="Picture of the author"
                                                    className="ourclient_img"
                                                    width={0}
                                                    height={0}
                                                    // layout='responsive'
                                                     />
                                            </Col>
                                            <Col xs={12} sm={12 }md={12} lg={12} xl={12}>
                                                <Grid.Container>
                                                    <Grid xs={12} className="justify-content-center">
                                                    <Text  h4 css={{ mt:"$8" }} className={`${styles['card_head_hover']}` }>
                                                        TVS
                                                    </Text>
                                                    </Grid>
                                                </Grid.Container>
                                            </Col>
                                        </Row>
                                    </Card.Header>
                                    <Card.Body css={{ py: "$1" }} className="text-center">
                                        <Text size={15} weight="light" className={`${styles['card_head_hover']}`}>
                                            Genuine service in the market
                                            comparing with other vendors!
                                        </Text>
                                    </Card.Body>
                                </div>
                            </Card>
                            </div>
                        </div>




                        <div className={styles.card_p}>
                        <div className="slider-csm">
                            <Card css={{ p: "$10", height: "270px" }} className={`${styles['card_hover']}`}>
                                <Card.Header>
                                    <Row className="fullwidth">
                                        <Col xs={12} sm={12 }md={12} lg={12} xl={12}>
                                            <Image
                                                loader={myLoader}
                                                src="/assets/hyundai4.jpg"
                                                alt="Picture of the author"
                                                className="ourclient_img"
                                                width={0}
                                                height={0}
                                                
                                                // layout='responsive'
                                                 />
                                        </Col>
                                        <Col xs={12} sm={12 }md={12} lg={12} xl={12}>
                                            <Grid.Container>
                                                <Grid xs={12} className="justify-content-center">
                                                    <Text  h4 css={{ mt:"$8" }} className={`${styles['card_head_hover']}` }>
                                                        Hyundai
                                                    </Text>
                                                </Grid>
                                            </Grid.Container>
                                        </Col>
                                    </Row>
                                </Card.Header>
                                <Card.Body css={{ py: "$1" }} className="text-center">
                                    <Text size={15} weight="light" className={`${styles['card_head_hover ']}`}>
                                        Great to have Nettyfish for my
                                        company’s branding.
                                    </Text>
                                </Card.Body>

                            </Card>
                            </div>
                        </div>



                        <div className={styles.card_p}>

                        <div className="slider-csm">
                            <Card css={{ p: "$10", height: "270px" }} className={`${styles['card_hover']}`}>
                                <Card.Header>
                                    <Row className="fullwidth">
                                        <Col xs={12} sm={12 }md={12} lg={12} xl={12}>
                                            <Image
                                                loader={myLoader}
                                                src="/assets/titan4.jpg"
                                                className="ourclient_img"
                                                alt="Picture of the author"
                                                width={0}
                                                height={0}
                                          
                                                // layout='responsive'
                                                 />
                                        </Col>
                                        <Col xs={12} sm={12 }md={12} lg={12} xl={12}>
                                            <Grid.Container>
                                                <Grid xs={12} className="justify-content-center" >
                                                    <Text h4 css={{ mt:"$8" }} className={`${styles['card_head_hover']}`}>
                                                        Titan
                                                    </Text>
                                                </Grid>
                                            </Grid.Container>
                                        </Col>
                                    </Row>
                                </Card.Header>
                                <Card.Body css={{ py: "$1" }} className="text-center">
                                    <Text size={15} weight="light" className={`${styles['card_head_hover']}`}>
                                        Nettyfish provides very good customer service!
                                    </Text>
                                </Card.Body>

                            </Card>
                          </div>
                        </div>


                        <div className={styles.card_p}>

                        <div className="slider-csm">
                            <Card css={{ p: "$10", height: "270px" }} className={`${styles['card_hover']}`}>
                                <Card.Header>
                                    <Row className="fullwidth">
                                        <Col xs={12} sm={12 }md={12} lg={12} xl={12}>
                                            <Image
                                                loader={myLoader}
                                                src="/assets/tancem4.jpg"
                                                alt="Picture of the author"
                                                className="ourclient_img"
                                                width={0}
                                                height={0}
                                                // layout='responsive' 
                                                />
                                        </Col>
                                        <Col xs={12} sm={12 }md={12} lg={12} xl={12}>
                                            <Grid.Container>
                                                <Grid xs={12} className="justify-content-center">
                                                    <Text h4 css={{ mt:"$8" }} className={`${styles['card_head_hover']}`}>
                                                        TANCEM
                                                    </Text>
                                                </Grid>
                                            </Grid.Container>
                                        </Col>
                                    </Row>
                                </Card.Header>
                                <Card.Body css={{ py: "$1" }} className="text-center" >
                                    <Text size={15} weight="light" className={`${styles['card_head_hover']}`}>
                                        Service of Nettyfish is very good
                                    </Text>
                                </Card.Body>

                            </Card>
                            </div>
                        </div>


                        <div className={styles.card_p}>

                            <div className="slider-csm">
                            <Card css={{ p: "$10", height: "270px" }} className={`${styles['card_hover']}`}>
                                <Card.Header>
                                    <Row className="fullwidth">
                                        <Col xs={12} sm={12 }md={12} lg={12} xl={12}>
                                            <Image
                                                loader={myLoader}
                                                src="/assets/gctp4.jpg"
                                                alt="Picture of the author"
                                                className="ourclient_img"
                                                width={0}
                                                height={0}
                                                // layout='responsive'
                                                 />
                                        </Col>
                                        <Col xs={12} sm={12 }md={12} lg={12} xl={12}>
                                            <Grid.Container>
                                                <Grid xs={12} className="justify-content-center gctp_text">
                                                    <Text
                                                    // h4  css={{ lineHeight: "1.7" }} className={`${styles['card_head_hover']}`}
                                                    h4 css={{ mt:"$8" }} className={`${styles['card_head_hover']}`}
                                                    >
                                                        Chennai District Corporation
                                                    </Text>
                                                </Grid>
                                            </Grid.Container>
                                        </Col>
                                    </Row>
                                </Card.Header>
                              
                                <Card.Body css={{ py: "$1" }} className="text-center gctp_para">
                                    <Text size={15} weight="light" className={`${styles['card_head_hover']}`}>
                                        Nettyfish has provided a good support in establishing
                                        the SMS system for Greater Chennai Traffic Police!
                                    </Text>
                                </Card.Body>
                            </Card>
                            </div>

                        </div>








                    </Slider>



                </div>

                {/* aboutus 2 */}

                <div className={`${styles['aboutus-1']}`}>

                    <div className="container">

                        <div className="row">

                            <div className="col-md-6" style={{ alignSelf: "center" }}>
                                <div data-aos="fade-up">

                                    <div style={{ alignSelf: "center", textAlign: "center" }}>
                                        <Link href="https://youtu.be/HGSR3FDVkkQ">
                                            <Image
                                                loader={myLoader}
                                                src="/assets/about-us.webp"
                                                alt="Picture of the author"
                                                width={400}
                                                height={250}
                                                layout='responsive' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles['about_center']} col-md-6`}>
                                <div data-aos="fade-up">
                                    <div>
                                        <div style={{ marginTop: "20px" }}>
                                            <p className={styles.title_client}>About Us</p>
                                            <p className={`${styles['para']}`}>
                                                {/* Nettyfish solution is a smart communication and comprehensive digital solution providing a
                                                company for business betterment. Nettyfish has 9 years of experience. Founders of Nettyfish
                                                are Mr. Gunasekaran, MD at Nettyfish solution, and Mrs. Durga Lakshmi, MD at Nettyfish
                                                solution in the year 2013. It started with 2 employees with the main motive of providing SMS
                                                Solutions. In 2015 We expanded our team to 30 employees and we were also providing
                                                Virtual Mobile Number hosting services, Voice broadcasting, and other services.
                                                In 2016-2018, Nettyfish had direct connectivity with operators as a result of the high SMS
                                                volume push. We developed our own SMPP software. Started a new branch in Bangalore and
                                                Hyderabad to wider the Nettyfish brand and service. it was our great Success which comes
                                                from the quality of service provided by us.
                                                From 2021- till now, our brand Nettyfish was rebranded as a Nettyfish solution because we
                                                are limitless. our major vision is to provide conversation solutions and automation platforms
                                                to businesses in all types of industries. we launched WhatsApp API with an automatic
                                                chatbot API and started Digital Marketing. Now we have more than 5000 clients with
                                                satisfaction because of the quality service provided by Nettyfish. */}
                                                We strongly believe that conversations play a crucial role in establishing and strengthening customer
relationships, especially when it comes to converting prospects into sales. For businesses, sales are
essential to survive and grow. Although larger enterprises may have the necessary resources to
develop custom tools for interacting with customers, small and medium-sized businesses lack the
expertise to do so. That's where Nettyfish comes in. We offer an easy-to-use platform that enables
these businesses to automate their customer interactions and turn conversations into conversions.
                                                </p>
                                        </div>
                                    </div>


                                    <div>
                                        {/* <Image
                                        loader={myLoader}
                                        src="/assets/playicon.png"
                                        alt="Picture of the author"
                                        width={100}
                                        height={80} /> */}

                                        <span className={`${styles['read-about']}`}>Read More</span>
                                        <button type="button" className={`${styles['leftarrow']} btn btn-outline-primary leftarrow`}><MdOutlineKeyboardArrowRight style={{ fontSize: "24px" }} /></button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>



                {/* updates */}

                <div className={`${styles['updates']}`}>

                    <div className="container">
                        <p className={`${styles['title-center']}`}>Our Latest Updates</p>
                        <p className={`${styles['sub-head']}`}>Whats heppening around the World.</p>
                        <div className="row">





                            <div className="col-md-4">
                                <div className={`${styles['card']}`}>
                                    <Image
                                        loader={myLoader}
                                        src="/assets/ecommerce.webp"
                                        alt="Picture of the author"
                                        width={356}
                                        height={250}
                                        layout='responsive' />

                                    <p className={`${styles['labelname']}`}>E-commerce</p>
                                    <div className={`${styles['card-body']}`}>
                                        <p>JUL 26,2022</p>
                                        <h5 className={`${styles['card-title']}`}>Why SMS Automation Important for your Business</h5>

                                        <p className={`${styles['card-text']}`}>SMS is a short Message service in which you can send messages directly without the internet to the receiver.</p>

                                        <div>


                                            <button type="button" className={`${styles['leftarrow']} btn btn-outline-primary leftarrow`}><MdOutlineKeyboardArrowRight style={{ fontSize: "24px" }} /></button>
                                            <span className={`${styles['read-about']}`}>Read More</span>
                                        </div>

                                    </div>
                                </div>

                            </div>

                                            
                            <div className="col-md-4">
                                <div className={`${styles['card']}`}>
                                    <Image
                                        loader={myLoader}
                                        src="/assets/sms-marketing.webp"
                                        alt="Picture of the author"
                                        width={356}
                                        height={250}
                                        layout='responsive' />

                                    <p className={`${styles['labelname']}`}>E-commerce</p>
                                    <div className={`${styles['card-body']}`}>
                                        <p>AUG 09, 2022</p>
                                        <h5 className={`${styles['card-title']}`}>How to Use SMS Marketing to Grow Your Ecommerce Business?</h5>

                                        <p className={`${styles['card-text']}`}>What are SMS Marketing and Ecommerce SMS marketing is a communication marketing </p>

                                        <div>


                                            <button type="button" className={`${styles['leftarrow']} btn btn-outline-primary leftarrow`}><MdOutlineKeyboardArrowRight style={{ fontSize: "24px" }} /></button>
                                            <span className={`${styles['read-about']}`}>Read More</span>
                                        </div>

                                    </div>
                                </div>

                            </div>


                            <div className="col-md-4">
                                <div className={`${styles['card']}`}>
                                    <Image
                                        loader={myLoader}
                                        src="/assets/educational-institute.webp"
                                        alt="Picture of the author"
                                        width={356}
                                        height={250}
                                        layout='responsive' />

                                    <p className={`${styles['labelname']}`}>E-commerce</p>
                                    <div className={`${styles['card-body']} card-body`}>
                                        <p>SEP 20,2022</p>
                                        <h5 className={`${styles['card-title']}`}>Why your Educational Institute needs to use a WhatsApp chatbot</h5>

                                        <p className={`${styles['card-text']}`}>The education sector is updating and adapting to the automation process. The education sector used to send</p>

                                        <div>


                                            <button type="button" className={`${styles['leftarrow']} btn btn-outline-primary leftarrow`}><MdOutlineKeyboardArrowRight style={{ fontSize: "24px" }} /></button>
                                            <span className={`${styles['read-about']}`}>Read More</span>
                                        </div>

                                    </div>
                                </div>

                            </div>


                            <div className={`${styles['text-center']} col-md-12 text-center`}>
                                <div style={{ marginTop: "25px" }}>
                                    <Image
                                        loader={myLoader}
                                        src="/assets/button.gif"
                                        alt="Picture of the author"
                                        width={70}
                                        height={70} />

                                    <span className={`${styles['read-about']}`}>View More</span>
                                    <button type="button" className={`${styles['leftarrow']} btn btn-outline-primary leftarrow`}><MdOutlineKeyboardArrowRight style={{ fontSize: "24px" }} /></button>
                                </div>
                            </div>




                        </div>

                    </div>

                </div>


                <Container>
                    {/* <<<<<<<<<<<<<<<<<<<<< Second Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <div style={{ padding: "100px 0 50px 0" }}>
                        <Row style={{ borderBottom: "2px solid #97949436" }}>



                            <Col md={12} className={styles.content} >
                                <div className={styles.mt_150}>
                                    {/* <Image
                                loader={myLoader}
                                src="assets/Untitled-9 1.png"
                                alt="Picture of the author"
                                width={380}
                                height={250}
                                quality={100}
                              
                                priority
                            /> */}
                                </div>
                                {/* <h1 className={styles.heading}>Voice Broadcast</h1> */}
                                <p className={`${styles['title-center']}`}>Few Of Our Clients</p>
                            </Col>

                        </Row>

                        <Row style={{ padding: "30px 0" }}>
                            <Col style={{ textAlign: "center" }}>
                                <Slider {...img2}>
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/AARTHI.png"
                                        alt="instagram"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority


                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/ADITYARAM.png"
                                        alt="messenger"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/ARUN EXCELLO.png"
                                        alt="google"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/BLACKSHEEP.png"
                                        alt="whatsapp"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/BLOSSOM BRICKKS.png"
                                        alt="twitter"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/CASAGRAND.png"
                                        alt="telegram"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/CAVINKARE.png"
                                        alt="instagram"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority


                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/FIPOLA.png"
                                        alt="messenger"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/FORD.png"
                                        alt="google"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/GREEN TRENDS.png"
                                        alt="whatsapp"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/GRT.png"
                                        alt="twitter"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/HERO.png"
                                        alt="telegram"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />


                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/HONDA.png"
                                        alt="instagram"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority


                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/HYUNDAI.png"
                                        alt="messenger"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/JAINS.png"
                                        alt="google"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/JEWEL ONE.png"
                                        alt="whatsapp"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/JEYACHANDRAN.png"
                                        alt="twitter"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/KALAYANA MAALAI.png"
                                        alt="telegram"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/MADRAS STORE.png"
                                        alt="instagram"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority


                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/MANJU GROUPS.png"
                                        alt="messenger"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/MARUTHI SUZUKI.png"
                                        alt="google"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/MERCEDES BENZ.png"
                                        alt="whatsapp"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/NATURALS.png"
                                        alt="twitter"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/PROMED.png"
                                        alt="telegram"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />



                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/RAJIV GANDHI.png"
                                        alt="instagram"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority


                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/RAPIDO.png"
                                        alt="messenger"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/RATHINAM.png"
                                        alt="google"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/REDYRIDER.png"
                                        alt="whatsapp"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/ROYAL ENFIELD.png"
                                        alt="twitter"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/SARAVANA LEGEND.png"
                                        alt="telegram"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />

                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/SHAHS.png"
                                        alt="instagram"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority


                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/SHANKAR.png"
                                        alt="messenger"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/SREE KUMARAN.png"
                                        alt="google"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/SRM.png"
                                        alt="whatsapp"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority
                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/TANISHQ.png"
                                        alt="twitter"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/TONI&GUY.png"
                                        alt="telegram"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/TVS.png"
                                        alt="instagram"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority


                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/URBAN.png"
                                        alt="messenger"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/VETRII.png"
                                        alt="google"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/VGN.png"
                                        alt="whatsapp"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/Viveks.png"
                                        alt="twitter"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />
                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/Volkswagen.png"
                                        alt="telegram"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority

                                    />


                                    <Image className={styles.imagecaros}
                                        loader={myLoader}
                                        src="assets/client_logo/Zaveri.png"
                                        alt="instagram"
                                        width={100}
                                        height={150}
                                        quality={100}
                                        priority


                                    />
                                </Slider>
                            </Col>
                        </Row>
                    </div>
                </Container>
<div className="sticky-social">
  <ul className="social">
    <li className="insta"><a href="https://www.instagram.com/nettyfishsolutions/ "><img src="./assets/insta1.png"/></a></li>
        <li className="facebook"><a href="https://www.facebook.com/nettyfishsolutions"><img src="./assets/face1.png"/></a></li>
      <li className="twitter"><a href="https://twitter.com/Nettyfish_offic" ><img src="./assets/twit1.png"/></a></li>
      <li   className="twitter12"><FloatingWhatsApp
                                   
                                     phoneNumber=" 8608666111"
                                     accountName="Nettyfish"
                                     allowEsc
                                     allowClickAway
                                     notification
                                     notificationSound
                                     avatar="./assets/nettyfish.png"
                    
                          /></li>
         <li className=""><a href="/Wactochatbot" target="_blank" >
                                            <Image
                                        className="Twitter1"
                                                src="/assets/wacto.png"
                                                alt="Picture of the author"
                                                width={60}
                                                height={60}
                                            />
                                            </a>
                                            </li>
                                           {/* <li className="wtsapp"><a href="https://api.whatsapp.com/send?phone=8608666111&"  target="_blank"><img src="./assets/Whats1.png"/></a>
</li> */}


    </ul>
   
  </div>

                          
            </div>






        </>
    );
}
export default Home;