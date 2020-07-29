import React from 'react';
import './Component.css';
import { Link } from 'react-router-dom';
import Fb from '../icon/fb.png';
import Ig from '../icon/ig.png';
import In from '../icon/linked_in.png';

function navbar() {
	return (
		<div>
			{/* <div class="py-3 text-white bg">
				<div class="container">
					<div class="row">
						<div class="col-md-12 text-center d-md-flex align-items-center text-light">
							{' '}
							<i class="d-block fa fa-stop-circle fa-2x mr-md-5 text-primary" />
							<ul class="nav mx-md-auto d-flex justify-content-center">
								<li class="nav-item">
									{' '}
									<a class="nav-link active" href="#">
										Home
									</a>{' '}
								</li>
								<li class="nav-item">
									{' '}
									<a class="nav-link" href="#">
										Features
									</a>{' '}
								</li>
								<li class="nav-item">
									{' '}
									<a class="nav-link" href="#">
										Pricing
									</a>{' '}
								</li>
								<li class="nav-item">
									{' '}
									<a class="nav-link" href="#">
										About
									</a>{' '}
								</li>
							</ul>
							<div class="row">
								<div class="col-md-12 d-flex align-items-center justify-content-md-between justify-content-center my-2">
									{' '}
									<a href="#">
										<i class="d-block fa fa-facebook-official text-muted fa-lg mx-2" />
									</a>{' '}
									<a href="#">
										<i class="d-block fa fa-instagram text-muted fa-lg mx-2" />
									</a>{' '}
									<a href="#">
										<i class="d-block fa fa-twitter text-muted fa-lg ml-2" />
									</a>{' '}
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12 text-center">
							<p class="mt-2 mb-0">© 2014-2018 Pingendo. All rights reserved</p>
						</div>
					</div>
				</div>
			</div> */}

			<div class="py-2 bg" id="about">
				<div class="container">
					<div class="row">
						<div class="p-4 col-md-12">
							<h2 class="mb-4">
								<b>Let's Connect</b>
							</h2>

							<a
								style={{ display: 'table-cell' }}
								href="mailto:user@example.com?subject=Subject&body=hai"
								target="_blank"
							>
								<p style={{ color: 'ivory' }}>Email - Rohmansaeful10@gmail.com</p>
							</a>
							<n />
							<a
								style={{ display: 'table-cell' }}
								href="https://api.whatsapp.com/send?phone=085155223530"
								target="_blank"
							>
								<p style={{ color: 'ivory' }}> Wa/Telp : +6285155223530</p>
							</a>
							<n />
							<a
								style={{ display: 'table-cell' }}
								href="https://www.facebook.com/people/Saeful-Rohman/100013561567351"
								target="_blank"
							>
								<img src={Fb} style={{ width: 20, height: 20 }} />
							</a>
							<a
								style={{ display: 'table-cell' }}
								href="https://www.instagram.com/rohmansaeful98/"
								target="_blank"
							>
								<img src={Ig} style={{ width: 30, height: 30 }} />
							</a>
							<a
								style={{ display: 'table-cell' }}
								href="https://www.linkedin.com/in/saeful-rohman-33647018a/"
								target="_blank"
							>
								<img src={In} style={{ width: 40, height: 40 }} />
							</a>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12 mt-3">
							<p class="text-left">©Saeful Rohman - 2020 </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default navbar;
