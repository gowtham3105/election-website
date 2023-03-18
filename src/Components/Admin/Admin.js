import React, { Component } from 'react';
import './Admin.css';
import Tab from 'react-bootstrap/Tab';
import { AdminResults } from './AdminResults';
import AdminImportantDates from './Admin_Important_Dates';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Swal from 'sweetalert2';
import { Redirect } from 'react-router-dom';
import { api_endpoint } from '../../Global';
import { AdminGenerateLoginCode } from './AdminGenerateLoginCode';

class Admin extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	showpos = (data) => {
		var acc = '';
		acc += '<ol>';
		data.voter_rights.forEach((pos, i) => {
			acc += `<li key=${i}> ${pos.elec_name}<br>`;
			acc += `<ul>`;
			acc += `<li>Has Voted? : ${pos.elec_isvoted}</li>`;
			acc += `<li>Voted to : ${pos.elec_votedto}</li>`;
			acc += '</ul>';
			acc += '</li><br>';
		});
		acc += '</ol>';
		return acc;
	};
	buttonfunc = () => {
		Swal.fire({
			title: 'Enter the student roll number',
			input: 'text',
			inputAttributes: {
				autocapitalize: 'off',
			},
			showCancelButton: true,
			confirmButtonText: 'Look up',
			showLoaderOnConfirm: true,
			preConfirm: (login) => {
				return fetch(
					api_endpoint +
						'/api/admin/voter?tokenId=' +
						this.props.tokenId +
						'&voterid=' +
						login
				)
					.then((response) => {
						if (!response.ok) {
							throw new Error(response.statusText);
						}
						return response.json();
					})
					.catch((error) => {
						Swal.showValidationMessage(`Request failed: ${error}`);
					});
			},
			allowOutsideClick: () => !Swal.isLoading(),
		}).then((result) => {
			if (result.isConfirmed) {
				var data = result.value;
				Swal.fire({
					title: `<strong>User ${data.voter_id} Details</strong>`,
					icon: 'info',
					html:
						`<div style=text-align:start>` +
						`<b>Voter name: </b>${data.voter_name}, <br>` +
						`<b>Voter branch: </b>${data.voter_branch},<br> ` +
						`<b>Voter rights: </b><br> ` +
						`${this.showpos(data)}` +
						'</div>',
					showCloseButton: true,
					showCancelButton: false,
					focusConfirm: false,
					confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
					confirmButtonAriaLabel: 'Thumbs up, great!',
				});
			}
		});
	};

	render() {
		return (
			<div>
				{this.props.isSigned &&
				(this.props.isAdmin || this.props.isModerator) ? (
					<div className='admin-parent' style={{ overflowX: 'hidden' }}>
						<br />
						<Tab.Container
							defaultActiveKey={
								this.props.isAdmin ? 'admin_votes' : 'admin_generate_login_code'
							}
						>
							<Row>
								<Nav variant='pills' style={{ width: '100%' }}>
									{this.props.isAdmin ? (
										<Nav.Item className='admin-tab-bar'>
											<Nav.Link eventKey='admin_votes'>VOTES</Nav.Link>
										</Nav.Item>
									) : (
										''
									)}
									{this.props.isAdmin ? (
										<Nav.Item className='admin-tab-bar'>
											<Nav.Link eventKey='important_dates'>
												IMPORTANT DATES
											</Nav.Link>
										</Nav.Item>
									) : (
										''
									)}
									{this.props.isAdmin ? (
										<Nav.Item className='admin-tab-bar'>
											<Button
												variant='primary'
												onClick={this.buttonfunc}
												as='a'
											>
												USER DETAILS
											</Button>
										</Nav.Item>
									) : (
										''
									)}
									{this.props.isAdmin || this.props.isModerator ? (
										<Nav.Item className='admin-tab-bar'>
											<Nav.Link eventKey='admin_generate_login_code'>
												GENERATE CODE
											</Nav.Link>
										</Nav.Item>
									) : (
										''
									)}
								</Nav>
							</Row>
							<hr />
							<Row>
								<Tab.Content style={{ width: '100%' }}>
									{this.props.isAdmin ? (
										<Tab.Pane eventKey='admin_votes'>
											<AdminResults
												isSigned={this.props.isSigned}
												isAdmin={this.props.isAdmin}
												tokenId={this.props.tokenId}
											/>
										</Tab.Pane>
									) : (
										''
									)}

									{this.props.isAdmin ? (
										<Tab.Pane eventKey='important_dates'>
											<AdminImportantDates
												isSigned={this.props.isSigned}
												isAdmin={this.props.isAdmin}
												tokenId={this.props.tokenId}
											/>
										</Tab.Pane>
									) : (
										''
									)}
									{this.props.isAdmin || this.props.isModerator ? (
										<Tab.Pane eventKey='admin_generate_login_code'>
											<AdminGenerateLoginCode
												isSigned={this.props.isSigned}
												isAdmin={this.props.isAdmin}
												tokenId={this.props.tokenId}
											/>
										</Tab.Pane>
									) : (
										''
									)}
								</Tab.Content>
							</Row>
						</Tab.Container>
					</div>
				) : (
					<Redirect to='/' />
				)}
			</div>
		);
	}
}

export default Admin;
