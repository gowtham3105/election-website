import React, { useState } from 'react';
// import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './LoginModal.css';
import OtpInput from 'react-otp-input';


export const GoogleLoginButton = ({
	isSigned,
	onLoginSuccess,
	onLoginFailure,
	onAutoLoadFinished,
	onLogoutSuccess,
	onLogoutFailure,
}) => {
	return (
		<GoogleLogin onSuccess={res => onLoginSuccess(res)} onError={() => onLoginFailure}
		/>
	);
};

const SignOut = ({
	isSigned,
	onAutoLoadFinished,
	onLogoutSuccess,
	onLogoutFailure,
}) => {
	return (
		<Button
			className='Button'
			onClick={onLogoutSuccess}
		>
			<div className='secondary_Text'>SIGN OUT</div>
		</Button>
	);
};

const OtpInputComponent = ({ code, setCode }) => {
	return (
		<div className='otp-input-parent'>
			<OtpInput
				value={code}
				onChange={setCode}
				numInputs={8}
				separator={<span>-</span>}
				containerStyle={{ justifyContent: 'center', alignItems: 'center' }}
				inputStyle={{ width: '2rem' }}
				isInputNum
			/>
		</div>
	);
};
export const LoginModal = ({
	isSigned,
	onLoginSuccess,
	onLoginFailure,
	onAutoLoadFinished,
	onLogoutSuccess,
	onLogoutFailure,
	show,
	setShow,
	handleOTPSignIn,
}) => {
	const [code, setCode] = useState('');

	const signInWithOTP = () => {
		handleOTPSignIn(code);
	};

	// const handleCodeChange = (e) => {
	// 	console.log(e, "the change");
	// 	let newCode = code + e;
	// 	console.log(newCode, "the new code");
	// 	setCode(`${code}${e}`);
	// };

	return (
		<div>
			<Modal
				show={show}
				onHide={() => {
					setShow(false);
				}}
				animation={true}
				size='lg'
				centered
			>
				<Modal.Body>
					<Container>
						<Row xs={1} md={1} lg={2} className="align-items-center">
							<Col>
								<div className='accountbasics' style={{ margin: '20px auto', textAlign:'center'}}>
								<GoogleOAuthProvider clientId='376785852629-lidkcf4ktku0udbn3mmeme62bt7vu15d.apps.googleusercontent.com'>
									<GoogleLoginButton
										isSigned={isSigned}
										onLoginSuccess={onLoginSuccess}
										onLoginFailure={onLoginFailure}
										onAutoLoadFinished={onAutoLoadFinished}
										onLogoutSuccess={onLogoutSuccess}
										onLogoutFailure={onLogoutFailure}
									/>
								</GoogleOAuthProvider>
								</div>
							</Col>
							{/* <div class="vr"></div> */}
							<Col>
								<div className='accountposElement'>
									<div className='accountheading login-code-heading'>
										have a Login Code ?
										<br />
										<OtpInputComponent code={code} setCode={setCode} />
										<Button className='Button' onClick={signInWithOTP}>
											<div className='secondary_Text'>SIGN IN WITH CODE</div>
										</Button>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</Modal.Body>
				<div className='profileclosebtnparent'>
					<Button
						variant='secondary'
						className='profileclosebtn'
						onClick={() => {
							console.log('close');
							setShow(false);
						}}
					>
						Cancel
					</Button>
				</div>
			</Modal>
		</div>
	);
};

export const Login = ({
	isSigned,
	onLoginSuccess,
	onLoginFailure,
	onAutoLoadFinished,
	onLogoutSuccess,
	onLogoutFailure,
	handleOTPSignIn,
}) => {
	const [show, setShow] = useState(false);

	const handleShow = () => {
		setShow(true);

		console.log('show', show, 'clicked');
	};

	const handleLogout = () => {
		setShow(false);
		onLogoutSuccess();
	};

	return (
		<div>
			{isSigned ? (
				<SignOut
					isSigned={isSigned}
					onAutoLoadFinished={onAutoLoadFinished}
					onLogoutSuccess={handleLogout}
					onLogoutFailure={onLogoutFailure}

				/>
			) : (
				<div className='1231'>
					<Button className='Button' onClick={handleShow}>
						<div className='secondary_Text'>SIGN IN</div>
					</Button>
					<div>
						<LoginModal
							isSigned={isSigned}
							onLoginSuccess={onLoginSuccess}
							onLoginFailure={onLoginFailure}
							onAutoLoadFinished={onAutoLoadFinished}
							onLogoutSuccess={onLogoutSuccess}
							onLogoutFailure={onLogoutFailure}
							setShow={setShow}
							show={show}
							handleOTPSignIn={handleOTPSignIn}
						/>
					</div>
				</div>
			)}
		</div>
	);
};
