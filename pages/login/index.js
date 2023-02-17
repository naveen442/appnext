import React from 'react';
import Head from 'next/head';
import Script from 'next/script'
const index = () => {
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

    <div>
      <div className="page-content-wrapper section-space--inner--120">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 mx-auto">
                    <div className="loginwrap">
                        <div className="contact-content mb-5 ">
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
    </div>
    </>
  )
}

export default index
