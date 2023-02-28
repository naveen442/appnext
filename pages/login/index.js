import React, { useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Form from "react-bootstrap/Form";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
import { Image } from 'react-bootstrap';
const index = () => {
  const clearData = {
   
    mobilenumber: "",
};
let [formData, setFormData] = useState(clearData);
    const [formErrors, setErrors] = useState({});


function formDataAdd(e) {
  e.preventDefault();
  setErrors(validate(formData));
  const formInfo = {
      fullName: formData.fullName,
      email: formData.email,
      designation: formData.designation,
      mobilenumber: formData. mobilenumber,
  };
  console.log(formInfo);

  setFormData(clearData);
}
  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
    const mobile = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (!values.fullName) {
        errors.fullName = "Username is required";
    }
    if (!values.email) {
        errors.email = "email is required";
    }
    else if (!regex.test(values.email)) {
        errors.email = "this is not a valid email format";
    }
    if (!values.designation) {
        errors.designation = "designation is required";
    }
    if (!values. mobilenumber) {
        errors. mobilenumber= "mobile number is required";
    }
    else if (!mobile.test(values.mobilenumber)) {
        errors.mobilenumber = "mobile number is incorrect"
    }
    return errors;
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



      
  <div className="container-fluid ">
    <div className="row overall">
      <div className="col-sm-6 text-black">

      

        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form className='w-100 my-5'>

            <h3 className="fw-normal mb-3 pb-3 text-center" style={{letterSpacing: "1px"}}>Log in</h3>

            <div className="form-outline mb-4">
            
            <Form.Label>Mobile Number</Form.Label>
                                            <Form.Control
                                                onChange={(event) => {
                                                    setFormData({
                                                        ...formData,
                                                        mobilenumber: event.target.value,
                                                    });
                                                }}
                                                type="text"
                                                className="form-style01"
                                                placeholder="mobile No"
                                                value={formData. mobilenumber}
                                            />
                                              <p className="required">{formErrors. mobilenumber}</p>
             
            </div>

           

            <div className="pt-1 mb-4">
            <button 
                                type="button"
                                onClick={formDataAdd}
                                className="btn btn-info bg-primary font-white d-block w-100"
                            >
                                Submit
                            </button>
            </div>

            {/* <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p> */}
  
            <div class="text-center">
                  <p>or</p>
                  <p> Login with:</p>
                  <button type="button" class="btn btn-link btn-floating mx-1">
                  <a href="https://www.facebook.com/nettyfishsolutions"> <i class="fab fa-facebook-f"></i></a>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-google"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                  <a href="https://twitter.com/Nettyfish_offic "><i class="fab fa-twitter"></i></a>
                  </button>

                 
                </div>
          </form>

        </div>

      </div>
      <div className="col-sm-6 px-0 d-none d-sm-block">
        <Image src="./assets/login.jpeg" className="img-fluid"/>
      </div>
     
    </div>
  </div>
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

    {/* <div>
      <div classNameName="page-content-wrapper section-space--inner--120">
        <div classNameName="container">
            <div classNameName="row">
                <div classNameName="col-12 col-md-6 mx-auto">
                    <div classNameName="loginwrap">
                        <div classNameName="contact-content mb-5 ">
                            <h2 className="title text-center">Login</h2>
                            <p className="subtitle text-center">Please enter the your details</p>
                        </div>
                        <div className="formcontroll">
                            <div className="alert alert-success" role="alert" id="success" style={{display:"none"}}>

                            </div>
                            <div className="alert alert-danger" role="alert" id="failed" style={{display:"none"}}>
                            </div>
                            <div className="form-control-wrap ">
                                <input type="text" name="mobile_no" id="mobile_no" placeholder="Mobile Number*"
                                       required=""/>
                            </div>
                            <div className="form-control-wrap"  id="otp-field" style={{display:"none"}}>
                                <input type="text" name="otp-field" id="otp-value" placeholder="OTP *"/>
                            </div>
                            <input id="value" value="1" type="hidden"/>
                            <div className="submitbtnsec text-center">
                                <button type="button" id="submit" name="submit" onclick="SendForm()"
                                        className="ht-btn ht-btn--default">Submit
                                </button>
                            </div>
	
                            <div className="widthgooglewrap">
                                <span className="or"><span>OR</span></span>
                                <a className="loginwithgoogle" href="https://www.nettyfish.com/nettylogin/redirect/google">Login with Google</a>
                                <a className="loginwithfacebook" href="https://www.nettyfish.com/nettylogin/redirect/facebook">Login with
                                    Facebook</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div> */}

    </>

  )
  }

export default index