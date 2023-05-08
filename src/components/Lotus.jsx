import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import { toast } from "react-toastify";
import logo from '../logoSos.png'
// https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp
function Lotus() {
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');

    const logInData = () =>{
        console.log(userName,password);
        if(userName === "vishal" && password==="123")
            toast.success(`LoggedIn Successful! ${userName}`);
        else
            toast.error("Invalid Username or Password!");
        setUserName('');
        setPassword('');
    }
    return (
        <div className='LogInCont shadow'>
            <MDBContainer className="my-2 gradient-form">

                <MDBRow className='ResDiv'>

                    <MDBCol col='6' className="mb-5 mt-4 ">
                        <div className="d-flex flex-column ms-5 colLogInForm">

                            <div className="text-center">
                                <img src={logo} style={{ width: '185px', visibility: 'hidden' }} alt="logo" /><br />
                                <h4 className="mt-1 mb-5 pb-1">Wel-Come User!</h4>
                            </div>

                            <p>Please login to your account</p>


                            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} />
                            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>


                            <div className="text-center pt-1 mb-5 pb-1">
                                <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={logInData}>Sign in</MDBBtn>
                                <a className="text-muted" href="#!">Forgot password?</a>
                            </div>

                            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                                {/* <p className="mb-0 mx-2"></p> */}
                                {/* <MDBBtn outline className='mx-2' color='danger'>
                                    Danger
                                </MDBBtn> */}
                            </div>

                        </div>

                    </MDBCol>

                    <MDBCol col='6' className="mb-5 msgScreen">
                        <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                            <div className="text-white px-3 py-2 p-md-3 mx-md-2" style={{height:'50vh'}}>
                                <h4 class="mb-4">We are more than just a company</h4>
                                <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>

                        </div>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>
        </div>
    )
}

export default Lotus
