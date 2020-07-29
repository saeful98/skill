import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button, Navbar } from 'reactstrap';
import '../Component.css';
import Value from './value.js';

function Contact() {
	return (
		<div>
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
				<Link to="/Home" className="fontmenu">
					Home
				</Link>
			</p>

			<Value />
		</div>
	);
}

export default Contact;
