import React, { Component } from "react";
import "./Important.css";
import Fade from "react-reveal/Fade";
import OnImagesLoaded from "react-on-images-loaded";
import dateimpImg from "./dateimp.jpeg";
import plus from "./plus.jpeg";
import { setopacity } from "./../../App";
import disableScroll from 'disable-scroll';

class Important extends Component {
  constructor(props) {
    super(props);
    disableScroll.on();
    window.scrollTo(0, 0);
    setopacity(0);
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
    window.scrollTo(0, 0)
  }
  componentDidUpdate() {
    if (this.props.loadContent && this.state.showImages) this.show();
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
					className='importantDates'
					style={{
						opacity: this.state.showImages && this.props.loadContent ? 1 : 0,
					}}
				>
					<div className='teamdesk'>
						<div className='topbannerteam_imp'>
							<div className='titlebanteam'>
								{' '}
								Schedule
								<div className='subhead'>
									Important Deadlines for Student Council Elections 2023-24.{' '}
									<br />
									<div className='markdate'>
										Mark My Calender
										<a
											href='https://calendar.google.com/calendar/u/0?cid=Y185Ym9rMGQ3Z2JmOGRrOG0zNTcydjdwZDZkNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t'
											style={{ margin: '10px' }}
											target='_blank'
											rel='noopener noreferrer'
										>
											<img
												src={plus}
												alt='plus'
												width='10%'
												className='markdateimg'
											/>
										</a>
									</div>
								</div>
							</div>
							<img
								width='70%'
								src={dateimpImg}
								className='topbannerimgteam'
								alt='dateimp.jpeg'
							/>
						</div>
					</div>

					<div className='teammobile'>
						<div className='topbannerteam_imp'>
							<img
								width='70%'
								src={dateimpImg}
								className='topbannerimgteam'
								alt='dateimp.jpeg'
							/>

							<div className='titlebanteam'>
								{' '}
								Schedule
								<div className='subhead'>
									Important Deadlines for Student Council Elections 2023-24.{' '}
									<br />
									<div className='markdate'>
										Mark My Calender
										<a
											href='https://calendar.google.com/calendar/u/0?cid=Y185Ym9rMGQ3Z2JmOGRrOG0zNTcydjdwZDZkNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t'
											style={{ margin: '10px' }}
											target='_blank'
											rel='noopener noreferrer'
										>
											<img
												src={plus}
												alt='plus'
												width='10%'
												className='markdateimg'
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='timelineinfo'>
						<ul className='timeline'>
							<li>
								<div className='direction-r'>
									<div className='flag-wrapper'>
										<span className='hexa'></span>
										<Fade right>
											<span className='flag'>Nominations Window Opens</span>
											<span className='time-wrapper'>
												<span className='time'>Mar 7</span>
											</span>
										</Fade>
									</div>
									<Fade right>
										<div className='desc'>
											Candidates to fill the{' '}
											<a href='https://docs.google.com/forms/d/e/1FAIpQLSckioyWPW4jKCOeqBE0GFpCq95yxPdvcDwGEp-nKKYkauIj0Q/viewform'>
												form
											</a>{' '}
											and enroll for nomination.
											<br />
											<div className='desc-time'>
												Starts at 8:00 AM, March 7th, 2023,
											</div>
										</div>
									</Fade>
								</div>
							</li>
							<li>
								<div className='direction-l'>
									<div className='flag-wrapper'>
										<span className='hexa'></span>
										<Fade left>
											<span className='flag'>Nominations Window Closes</span>
											<span className='time-wrapper'>
												<span className='time'>Mar 9</span>
											</span>
										</Fade>
									</div>
									<Fade left>
										<div className='desc'>
											Nomination Portal Closes
											<br />
											<div className='desc-time'>
												Closes at March 9th, 2023, 5:00 PM
											</div>
										</div>
									</Fade>
								</div>
							</li>
							<li>
								<div className='direction-r'>
									<div className='flag-wrapper'>
										<span className='hexa'></span>
										<Fade right>
											<span className='flag'>
												Release of the List of Candidates
											</span>
											<span className='time-wrapper'>
												<span className='time'>Mar 9</span>
											</span>
										</Fade>
									</div>
									<Fade right>
										<div className='desc'>
											Release of the list of candidates for all positions
											<br />
											<div className='desc-time'>
												Releases at March 9th, 2023, 8:00 PM
											</div>
										</div>
									</Fade>
								</div>
							</li>
							<li>
								<div className='direction-l'>
									<div className='flag-wrapper'>
										<Fade left>
											<span className='hexa'></span>
											<span className='flag'>Last Date for Withdrawal</span>
											<span className='time-wrapper'>
												<span className='time'>Mar 10</span>
											</span>
										</Fade>
									</div>
									<Fade left>
										<div className='desc'>
											Last Day to Withdraw your Nomination
											<br />
											<div className='desc-time'>
												Deadline at March 10th, 2023, 11:59 PM
											</div>
										</div>
									</Fade>
								</div>
							</li>
							{/* <li>
                <div className="direction-l">
                  <div className="flag-wrapper">
                    <span className="hexa"></span>
                    <Fade right>
                      <span className="flag">
                        Last Date for Document Submission(Optional)
                      </span>
                      <span className="time-wrapper">
                        <span className="time">Feb 6</span>
                      </span>
                    </Fade>
                  </div>
                  <Fade right>
                    <div className="desc">
                      Candidates should submit the Required Original Documents.
                      <br />
                      <div className="desc-time">
                        Deadline at February 6th, 2021, 8:00 PM
                      </div>
                    </div>
                  </Fade>
                </div>
              </li> */}
							<li>
								<div className='direction-r'>
									<div className='flag-wrapper'>
										<span className='hexa'></span>
										<Fade right>
											<span className='flag'>Campaigning Starts</span>
											<span className='time-wrapper'>
												<span className='time'>Mar 11</span>
											</span>
										</Fade>
									</div>
									<Fade right>
										<div className='desc'>
											Candidates can start campaigning
											<br />
											<div className='desc-time'>
												Starts from March 11th, 2023
											</div>
										</div>
									</Fade>
								</div>
							</li>
							<li>
								<li>
									<div className='direction-l'>
										<div className='flag-wrapper'>
											<span className='hexa'></span>
											<Fade left>
												<span className='flag'>Campaigning Ends</span>
												<span className='time-wrapper'>
													<span className='time'>Mar 17</span>
												</span>
											</Fade>
										</div>
										<Fade left>
											<div className='desc'>
												<div className='desc-time'>
													Ends at March 17th, 2023, 11:59 PM
												</div>
											</div>
										</Fade>
									</div>
								</li>
								<li></li>
								<div className='direction-r'>
									<div className='flag-wrapper'>
										<span className='hexa'></span>
										<Fade right>
											<span className='flag'>Election Day</span>
											<span className='time-wrapper'>
												<span className='time'>Mar 18</span>
											</span>
										</Fade>
									</div>
									<Fade right>
										<div className='desc'>
											Voter can vote for the candidates
											<br />
											<div className='desc-time'>
												From March 18th, 2023, 8:00 AM To 11:59 PM
											</div>
										</div>
									</Fade>
								</div>
							</li>
							<li>
								<div className='direction-l'>
									<div className='flag-wrapper'>
										<Fade left>
											<span className='hexa'></span>
											<span className='flag'>Results Day</span>
											<span className='time-wrapper'>
												<span className='time'>Mar 19</span>
											</span>
										</Fade>
									</div>
									<Fade left>
										<div className='desc'>
											Results to be released
											<br />
											<div className='desc-time'>
												Releases at March 19th, 2023, 8:00 PM
											</div>
										</div>
									</Fade>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</OnImagesLoaded>
		);
  }
}

export default Important;
