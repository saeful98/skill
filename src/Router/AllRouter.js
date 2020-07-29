import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Contact from '../Component/Contact/Contact.js';
import Home from '../Component/Home/Home.js';
import Portfolio from '../Component/Portfolio/Portfolio.js';
import Skill from '../Component/Skill/Skill.js';
import Profil from '../Component/Profil/Profil.js';
import Navbars from '../Component/navbar.js';

function AllRouter() {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/Contact">
						<Contact />
						<Navbars />
					</Route>
					<Route path="/Skill">
						<Skill />
						<Navbars />
					</Route>
					<Route path="/Portfolio">
						<Portfolio />
						<Navbars />
					</Route>
					<Route path="/Profil">
						<Profil />
						<Navbars />
					</Route>
					<Route path="/home">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default AllRouter;
