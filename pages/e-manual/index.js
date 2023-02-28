import * as React from 'react'
import Head from 'next/head'
import styles from "../../styles/Emanual.module.css";
import Image from "next/image";
import Link from "next/link"
import { Container, Row, Col } from "react-bootstrap"
import "@fontsource/josefin-sans" // Defaults to weight 400.
import { Table } from "@nextui-org/react"
import { Button, Grid } from "@nextui-org/react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
export default function Manual() {




  return (
    <>
      <Head>
        <title>Nettyfish - E-Manuals</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
      </Head>

      <div >
        <div className={styles.banner}>
          {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
          <Row>
            <Col md={7} className="offset-2">
              <p className={styles.title}>E-Manuals</p>
              <p className={styles.breadcrumb}><a className={styles.home}  href="/">Home</a> &gt;&gt; E-Manuals</p>
            </Col>
          </Row>
        </div>
      </div>


      <div className={styles.backdrop_color}>
        <div className={styles.backdrop} >
          <Container>

            <div className={styles.pt_pb_30}>
              {/* <p className={styles.faq}>E-Manuals</p> */}
              <Table
                bordered
                lined

                shadow={false}
                araria-label="Example static bordered collection table"
                css={{
                  height: "auto",
                  minWidth: "100%",

                }}
              >
                <Table.Header>
                  <Table.Column
                    css={{
                      height: "auto",
                      width: "10%",
                      color: "black",
                      fontSize: "16px",
                      fontWeight: "600"
                    }}
                  >
                    S.NO</Table.Column>
                  <Table.Column css={{
                    color: "black",
                    fontSize: "16px",
                    fontWeight: "600"
                  }}>TOPICS</Table.Column>
                  <Table.Column
                    css={{
                      height: "auto",
                      width: "20%",
                      color: "black",
                      fontSize: "16px",
                      fontWeight: "600"
                    }}>DOWNLOAD</Table.Column>

                </Table.Header>
                <Table.Body>
                  <Table.Row key="1">
                    <Table.Cell>1</Table.Cell>
                    <Table.Cell>
                      <p className={styles.tableheader}>Enterprise SMS</p>
                      <p className={styles.tablecontent}>Step by Step User Manual for NETTYFISH Panels</p>
                    </Table.Cell>
                    <Table.Cell>
                      <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" target="_blank" rel="noopener noreferrer" >
                        <Button shadow color="gradient" auto>
                          Download PDF
                        </Button>
                      </a>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row key="2">
                    <Table.Cell>2</Table.Cell>
                    <Table.Cell>
                      <p className={styles.tableheader}>Voice SMS</p>
                      <p className={styles.tablecontent}>Voice SMS users Instruction</p>
                    </Table.Cell>
                    <Table.Cell>
                      <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" target="_blank" rel="noopener noreferrer" >
                        <Button shadow color="gradient" auto>
                          Download PDF
                        </Button>
                      </a>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row key="3">
                    <Table.Cell>3</Table.Cell>
                    <Table.Cell>
                      <p className={styles.tableheader}>Whatsapp Chatbot</p>
                      <p className={styles.tablecontent}>Whatsapp Chatbot Users Manual/Guidelines</p>
                    </Table.Cell>
                    <Table.Cell>
                      <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" target="_blank" rel="noopener noreferrer" >
                        <Button shadow color="gradient" auto>
                          Download PDF
                        </Button>
                      </a>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row key="4">
                    <Table.Cell>4</Table.Cell>
                    <Table.Cell>
                      <p className={styles.tableheader}>Missed call manual</p>
                      <p className={styles.tablecontent}>Missed call service guideline</p></Table.Cell>
                    <Table.Cell>
                      <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" target="_blank" rel="noopener noreferrer" >
                        <Button shadow color="gradient" auto>
                          Download PDF
                        </Button>
                      </a>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row key="5">
                    <Table.Cell>5</Table.Cell>
                    <Table.Cell>
                      <p className={styles.tableheader}>Error Code</p>
                      <p className={styles.tablecontent}>Error Code, ErrorCode Description, 0 NORMAL DELIVER</p>
                    </Table.Cell>
                    <Table.Cell>
                      <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" target="_blank" rel="noopener noreferrer" >
                        <Button shadow color="gradient" auto>
                          Download PDF
                        </Button>
                      </a>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row key="6">
                    <Table.Cell>6</Table.Cell>
                    <Table.Cell>
                      <p className={styles.tableheader}>WACTO</p>
                      <p className={styles.tablecontent}>Whatsapp Business API ( E- Manuals)</p></Table.Cell>
                    <Table.Cell>
                      <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" target="_blank" rel="noopener noreferrer" >
                        <Button shadow color="gradient" auto>
                          Download PDF
                        </Button>
                      </a>
                    </Table.Cell>
                  </Table.Row>

                </Table.Body>
              </Table>
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
      </div>

    </>
  );
}
