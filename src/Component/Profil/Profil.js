import React from 'react';
import Value from './value.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Profil() {
	return (
		<div>
			<nav class="navbar navbar-expand-md navbar-light fixed-top bgnavbar">
				<div class="container">
					{' '}
					<div class="collapse navbar-collapse" id="navbar6">
						{' '}
						<a
							class="btn"
							style={{ borderWidth: 1, borderColor: 'black', borderRadius: 3, padding: 10 }}
							href="/"
						>
							<i class="fa d-inline fa-lg fa-circle" />
							<b> Home</b>
						</a>
						<ul class="navbar-nav mx-auto" />
						<ul class="navbar-nav ">
							<li class="nav-item">
								{' '}
								<a class="nav-link">Saeful Rohman |</a>{' '}
							</li>
							<li class="nav-item">
								{' '}
								<a class="nav-link" href="/portfolio">
									Portfolio
								</a>{' '}
							</li>
							<li class="nav-item">
								{' '}
								<a class="nav-link" href="#profil">
									Profil
								</a>{' '}
							</li>
							<li class="nav-item">
								{' '}
								<a class="nav-link" href="/skill">
									Skill
								</a>{' '}
							</li>
							<li class="nav-item">
								{' '}
								<a class="nav-link" href="#about">
									Kontak
								</a>{' '}
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div class="py-5" id="profil">
				<div class="container">
					<div class="row">
						<div class="col-md-12" />
					</div>
				</div>
			</div>

			<Value />
		</div>
	);
}

export default Profil;
