import React from 'react';
import './Teampage.css';
import Teamcard from '../Card/Teamcard';
import Fade from 'react-reveal/Fade';
import teambanner from './teamban.png'; // with import
import OnImagesLoaded from 'react-on-images-loaded';
import { setopacity } from './../../App';
import disableScroll from 'disable-scroll';

class Teampage extends React.Component {
	constructor(props) {
		super(props);
		setopacity(0);
		window.scrollTo(0, 0);
		disableScroll.on();
		this.props.showLoader();
		this.state = {
			showImages: false,
		};
	}
	show = () => {
		this.props.hideLoader();
		setopacity(1);
		disableScroll.off();
	};
	hide = () => {
		this.props.showLoader();
	};
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	componentDidUpdate() {
		if (this.props.loadContent) this.show();
		else this.hide();
	}
	render() {
		return (
			<OnImagesLoaded
				onLoaded={() => {
					this.setState({ showImages: true });
				}}
				onTimeout={() => {
					this.setState({ showImages: true });
				}}
				timeout={25000}
			>
				<div
					className='pogcont'
					style={{
						opacity: this.props.loadContent ? 1 : 0,
					}}
				>
					<div className='teamdesk'>
						<div className='topbannerteam'>
							<div className='titlebanteam'>
								{' '}
								Team
								<p>Election Council members for 2023-24</p>
							</div>
							<img
								src={teambanner}
								className='topbannerimgteam'
								alt='team banner'
							/>
						</div>
					</div>

					<div className='teammobile'>
						<div className='topbannerteam'>
							<img
								src={teambanner}
								className='topbannerimgteam'
								alt='team banner'
							/>

							<div className='titlebanteam'>
								{' '}
								Team
								<p>Election Council members for 2023-24.</p>
							</div>
						</div>
					</div>
					<div className='fortheme'>
						<div className='conti'>
							{
								// Important Message for Maintainers
								// What so ever you do, don't change the order of the cards.
								// The Developer section should be the first one always.
								// In order to use this website the Developer section should contains the following:
								// 1. The name of the developer (Peddi Ashrith Kumar, Putti Gowtham Sai, Omkar Jadhav, Sai Sandeep)
								// 2. The GitHub profile link of the developers
								// 3. The LinkedIn profile link of the developers
								// 4. The Instagram profile link of the developers
								// 5. The profile picture of the developers
								// *** PLEASE BE ADVISED THAT ANY MODIFICATIONS TO THE DEVELOPER SECTION OR REMOVAL OF THE DEVELOPER SECTION WILL RESULT SERIOUS
								// *** COPYRIGHT INFRINGEMENT AND WILL BE REPORTED TO THE GITHUB TEAM AND THE IIT Dharwad ADMINISTRATION.
								// *** ADDITIONALLY, ANY DEVIATION FROM THESE REQUIREMENTS WILL NOT BE TOLERATED AND WILL RESULT IN THE ENTIRE TEAM BEING BANNED FROM USING THIS WEBSITE.
								// *** The developer section should be the first one always.
								// *** No new developer should be added to the developer section without the permission of the
								// *** developers of this original website.
								// THANK YOU FOR YOUR ATTENTION TO THIS MATTER.
							}

							<div className='headersect'>
								Student Election Commission (SEC)
							</div>
							<div className='members'>
								<Fade bottom>
									<Teamcard
										name1=''
										name2='Sattwik Mishra'
										imgsrc='https://drive.google.com/uc?id=1IUesJH5IfNiHu7xa7uOIwDtw5qMY_gfK'
										linkedbool='true'
										linkedlink='https://www.linkedin.com/in/sattwik-mishra-2640a5238'
									/>
									<Teamcard
										name1=''
										name2='Karu Jagadeesh '
										imgsrc='https://drive.google.com/uc?id=1AYSwR28N8-OXD0zlOnkuusEFAGVfstXU'
									/>
									<Teamcard
										name1=''
										name2='Rakshith S'
										imgsrc='https://drive.google.com/uc?id=1Tl0X7zquxd99GSDpwxp28eGmM1yUeFuz'
									/>
									<Teamcard
										name1=''
										name2='Rajeshwari D'
										linkedbool='true'
										imgsrc='https://election.iitdh.ac.in/static/190030034.jpg'
										linkedlink='https://www.linkedin.com/in/rajeshwari-devaramani-b887891b6'
										instabool='true'
										instalink='https://instagram.com/rajeshwari_d179?igshid=YmMyMTA2M2Y='
									/>
									<Teamcard
										name1=''
										name2='Yusuf '
										imgsrc='https://drive.google.com/uc?id=19IW08uyrEnHZFaPNOTRxwWBMSpz203qd'
										linkedbool='true'
										linkedlink='https://www.linkedin.com/in/yusuf-turabi'
									/>


									
								</Fade>
							</div>
							<div className='headersect'>Development Team</div>
							<div className='members'>
								<Fade bottom>
									<Teamcard
										name1='Peddi'
										name2='Ashrith Kumar'
										gitbool='true'
										imgsrc='https://drive.google.com/uc?id=1MpUsvlytm6yGfFR7XUQ5q9dR0IHqho-b'
										gitlink='https://github.com/peddiashrith'
										linkedbool='true'
										linkedlink='https://www.linkedin.com/in/peddiashrith/'
										instabool='true'
										instalink='https://www.instagram.com/peddiashrith/'
									/>
									<Teamcard
										name1=''
										name2='Putti Gowtham Sai'
										imgsrc='https://drive.google.com/uc?id=19AzGjAwDQeBT2SiAcfgHZNcX2_RBDgKJ'
										gitlink='https://github.com/gowtham3105'
										gitbool='true'
										linkedbool='true'
										linkedlink='https://www.linkedin.com/in/gowtham-putti-ba6a611b1/'
										instabool='true'
										instalink='https://www.instagram.com/gowtham31m/'
									/>
									<Teamcard
										name1=''
										name2='Omkar Jadhav'
										gitbool='true'
										gitlink='https://github.com/IamODJ'
										imgsrc='https://drive.google.com/uc?id=1et7oznxvNb1PMii9BdmgohYHJrWR_GUD'
										linkedbool='true'
										linkedlink='https://www.linkedin.com/in/iamodj'
										instabool='true'
										instalink='https://www.instagram.com/omkar.exe/'
									/>
									<Teamcard
										name1='Sai Sandeep'
										name2='Bareedu'
										imgsrc='https://drive.google.com/uc?id=1kXUo7Vm-LfSuQ-tWvg-CRmIxCt3cGjM_'
										gitbool='true'
										gitlink='https://github.com/saisandeep19114'
										linkedbool='true'
										linkedlink='https://www.linkedin.com/in/sai-sandeep-bareedu-238448118/'
									/>
								</Fade>
							</div>
							<div className='headersect'>Web Ops</div>
							<div className='members'>
								<Fade bottom>
									<Teamcard
										name1=''
										name2='Putti Gowtham Sai'
										imgsrc='https://drive.google.com/uc?id=19AzGjAwDQeBT2SiAcfgHZNcX2_RBDgKJ'
										gitlink='https://github.com/gowtham3105'
										gitbool='true'
										linkedbool='true'
										linkedlink='https://www.linkedin.com/in/gowtham-putti-ba6a611b1/'
										instabool='true'
										instalink='https://www.instagram.com/gowtham31m/'
									/>
									<Teamcard
										name1=''
										name2='M V Karthik'
										imgsrc='https://drive.google.com/uc?id=11LN8CkCL_ubjIwhEnvZqzjYyueBcuys7'
										gitlink='https://github.com/karthikmurakonda'
										gitbool='true'
										linkedbool='true'
										linkedlink='https://www.linkedin.com/in/karthik-murakonda-59756b200/'
										instabool='true'
										instalink='https://www.instagram.com/me_m.v.karthik/'
									/>

								</Fade>
							</div>
						</div>
					</div>
					<div className='bottombanner'></div>
				</div>
			</OnImagesLoaded>
		);
	}
}

export default Teampage;
