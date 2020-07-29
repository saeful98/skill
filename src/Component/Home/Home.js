import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button, Navbar } from 'reactstrap';
import '../Component.css';
import Value from './value.js';
import Fb from '../../icon/fb.png';
import Ig from '../../icon/ig.png';
import In from '../../icon/linked_in.png';
import Wa from '../../icon/wa.png';

function Home() {
	return (
		<div className="background">
			<p className="topleft">
				<Link to="/Profil" className="fontmenu">
					PROFIL
				</Link>
			</p>

			<p className="topright">
				<Link to="/Skill" className="fontmenu">
					SKILL
				</Link>
			</p>

			<p className="bottomleft">
				<Link to="/Portfolio" className="fontmenu">
					PORTFOLIO
				</Link>
			</p>

			<p className="bottomright">
				<a href="#about" className="fontmenu">
					KONTAK
				</a>
			</p>

			<Value />

			<div class="py-3" id="about">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-md-4 text-center">
							<h4 style={{ color: 'ivory' }}>Let's Connect</h4>
						</div>
					</div>
					<div class="row justify-content-center">
						<div class="col-md-4 text-center d-md-flex align-items-center">
							<ul class="nav mx-md-auto d-flex justify-content-center">
								<li class="nav-item"> </li>
								<li class="nav-item">
									{' '}
									<a
										style={{ display: 'table-cell' }}
										href="https://api.whatsapp.com/send?phone=085155223530"
										target="_blank"
									>
										<img src={Wa} style={{ width: 30, height: 30 }} />
									</a>{' '}
								</li>
								<li class="nav-item">
									{' '}
									<a
										style={{ display: 'table-cell' }}
										href="https://www.facebook.com/people/Saeful-Rohman/100013561567351"
										target="_blank"
									>
										<img src={Fb} style={{ width: 20, height: 20 }} />
									</a>{' '}
								</li>
								<li class="nav-item">
									{' '}
									<a
										style={{ display: 'table-cell' }}
										href="https://www.instagram.com/rohmansaeful98/"
										target="_blank"
									>
										<img src={Ig} style={{ width: 30, height: 30 }} />
									</a>{' '}
								</li>
								<li class="nav-item">
									{' '}
									<a
										style={{ display: 'table-cell' }}
										href="https://www.linkedin.com/in/saeful-rohman-33647018a/"
										target="_blank"
									>
										<img src={In} style={{ width: 35, height: 35 }} />
									</a>{' '}
								</li>
							</ul>
						</div>
					</div>
					<div class="row justify-content-center">
						<div class="col-md-4 text-center">
							<a href="mailto:user@example.com?subject=Subject&body=hai" target="_blank">
								<p style={{ color: 'ivory' }}>Email - Rohmansaeful10@gmail.com</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
