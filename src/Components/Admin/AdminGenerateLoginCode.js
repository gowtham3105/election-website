import React from 'react'
import { QrReader } from 'react-qr-reader';
import { api_endpoint } from '../../Global';

import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import './Admin.css'

import Swal from 'sweetalert2';

export const AdminGenerateLoginCode = ({
	isSigned,
	isAdmin,
	isModerator,
	tokenId,
}) => {

    const [ShowQrReader,setShowQrReader] = React.useState(false);
    const [RollInputValue,setRollInputValue] = React.useState('');
    const [ShowError,setShowError] = React.useState(false);
    const [Userdetails,setUserdetails] = React.useState(null);

    const handleScan = async(data) => {
        if (data && RollInputValue ==='') {
            console.log(data['text'].slice(0,9));
            setRollInputValue(data['text'].slice(0,9));
            handleRollSubmit(data['text'].slice(0,9));
        }
    }

    const handleError = (err) => {
        console.error(err)
    }


    const validateRoll = (value) => {
        if (/^\d+$/.test(value)) {
            // Check if the length of the string is 9
            if (value.length !== 9) {
              setShowError(true);
            }else{
                setShowError(false);
                return true;
            }
        }
        setShowError(true);
        return false;
    }

    const showpos = (data) => {
        let res = '';

        console.log(data);

        res += '<ol>';
        // iterate over the data.elections jso
        Object.keys(data.election_rights).forEach((key) => {
            res += `<li key=${key}> ${key}<br>`;
            res += `<ul>`;
			res += `<li>Voted : ${data.election_rights[key]}</li>`;
			res += '</ul>';
			res += '</li><br>';
        });
        res += '</ol>';
        return res;

    }

        const getUserDetails = async (voterId) => {
            const response = await fetch(`${api_endpoint}/api/getVoterDetails?voterid=${voterId}&tokenId=${tokenId}`);
            const data = await response.json();
            if (response.status === 200){
                setRollInputValue('');
                setUserdetails(data);
                const userResponse = await Swal.fire({
                    title: `User ${data.id} Found`,
                    html:  `<div style=text-align:start>` +
                    `<b>Voter name: </b>${data.name}, <br>` +
                    `<b>Voter branch: </b>${data.batch}, ${data.branch}<br> ` +
                    `<b>Voter rights: </b><br> ` +
                    `${showpos(data)}` +
                    '</div>',
                    input: 'radio',
                    inputOptions: data.available_systems,
                    inputValidator: (value) => {
                        if (!value) {
                          return 'You need to choose something!'
                        }
                    }
                })
                if(userResponse.isConfirmed){
                    const response = await fetch(
                        `${api_endpoint}/api/generateCode`,
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                voterid: data.id,
                                tokenId: tokenId,
                                systemid: data.available_systems[userResponse.value],
                            }),
                        }
                    );
                    if (response.status === 200){
                        Swal.fire(
                            "Code Sent",
                            "OTP code email has been sent",
                            'success'
                        )
                    }else{
                        Swal.fire(
                            "Error",
                            "Generating OTP failed",
                            "error"
                        )
                    }
                }
                    
            }else{
                Swal.fire("User Not Found",'','error')
            }
            
        }

        

        
        const handleRollSubmit = (value) => {
            if(validateRoll(value)){
                getUserDetails(value);                
            }else{
                Swal.fire("Invalid Roll",'','error')
            }
    
        }


        const handleRollSubmitTextInput = () => {
            console.log(RollInputValue);
            if(validateRoll(RollInputValue)){
                getUserDetails(RollInputValue);
            }else{
                Swal.fire("Invalid Roll",'','error')
            }
        }

	return <div>

        <Container>
            <Row>
                <Col>
                    <h1>Generate Login Code</h1>
                </Col>
            </Row>

                {!ShowQrReader ? (
                    <>
                    <Form>
                    <InputGroup className='mb-3' noValidation>
                        <Form.Control placeholder='Voter ID' type='number' aria-describedby="submitbutton" aria-label="Recipient's username" value={RollInputValue} onChange={(e)=>{e.preventDefault();setRollInputValue(e.target.value)}} onBlur={()=>validateRoll(RollInputValue)} size='lm'/>
                        <Button variant="outline-secondary" id="button-addon2" onClick={handleRollSubmitTextInput}>
                            Submit
                        </Button>
                        <Form.Control.Feedback type="invalid" className={ShowError ? 'd-block' : 'd-none'}>
                            Please enter a valid voter ID.
                        </Form.Control.Feedback>
                    </InputGroup>

                    <Form.Text className='mb-3'>OR</Form.Text>

                    <Button className='mb-3' variant="primary" onClick={() => {
                        setShowQrReader(true);
                        }} as="a">
                        Scan QR Code
                    </Button>
                    </Form>

                    </>
                ): (
                    <>
                    <QrReader
                        delay={500}
                        onError={handleError}
                        onScan={handleScan}
                        onResult={handleScan}
                        className = "qr-scanner"
                    />

                    <Button onClick={() => {
                        setShowQrReader(false);
                    }}>
                        Close Scanner
                    </Button>
                    </>
                    
                )}

        </Container>
    </div>;
};
