import React from 'react';
import _HTML from '../../icon/HTML.png';
import _BTSP from '../../icon/BTSP.jpg';
import _CI from '../../icon/CI.jpg';
import _CSS from '../../icon/CSS.png';
import _GIT from '../../icon/git.svg';
import _JS from '../../icon/javascript.png';
import _OFFICE from '../../icon/OFFICE.jpg';
import _REACT from '../../icon/REACT.png';
import _XD from '../../icon/XD.png';
import _PHP from '../../icon/php7.jpg';

function Value() {
	return (
		<div>
			<div class="py-5 text-center">
				<div class="container">
					<div class="row">
						<div class="mx-auto col-md-8">
							<h1 class="mb-3">Skill Pemrograman</h1>
							<p class="lead">
								Saya Memakai HTML, CSS, Javascript, php untuk membangun sebuah website, sementara untuk
								aplikasi mobile saya biasa menggunakan react native. Untuk design dan prototyping saya
								biasa menggunkakan Adobe XD dan Marvel{' '}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="text-center py-2">
				<div class="container">
					<div class="row">
						<div class="col-lg-4 p-3">
							<div class="card">
								<div class="card-body p-3">
									{' '}
									<img class=" mb-3 mx-auto rounded-circle" src={_HTML} width="150" height="150" />
									<h2>HTML</h2>
								</div>
							</div>
						</div>
						<div class="col-lg-4 p-3 col-md-6">
							<div class="card">
								<div class="card-body p-3">
									{' '}
									<img class=" mb-3 mx-auto rounded-circle" src={_PHP} width="150" height="150" />
									<h2>PHP</h2>
								</div>
							</div>
						</div>
						<div class="col-lg-4 p-3 col-md-6">
							<div class="card">
								<div class="card-body p-3">
									{' '}
									<img class=" mb-3 mx-auto rounded-circle" src={_JS} width="150" height="150" />
									<h2>JavaScript</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="text-center py-2">
				<div class="container">
					<div class="row">
						<div class="col-lg-4 p-3">
							<div class="card">
								<div class="card-body p-3">
									{' '}
									<img
										class="img-fluid d-block mb-3 mx-auto rounded-circle"
										src={_CSS}
										width="150"
										height="150"
									/>
									<h2>CSS</h2>
								</div>
							</div>
						</div>
						<div class="col-lg-4 p-3 col-md-6">
							<div class="card">
								<div class="card-body p-3">
									{' '}
									<img
										class="img-fluid d-block mb-3 mx-auto rounded-circle"
										src={_BTSP}
										width="150"
										height="150"
									/>
									<h2>Bootstrap</h2>
								</div>
							</div>
						</div>
						<div class="col-lg-4 p-3 col-md-6">
							<div class="card">
								<div class="card-body p-3">
									{' '}
									<img
										class="img-fluid d-block mb-3 mx-auto rounded-circle"
										src={_REACT}
										width="150"
										height="150"
									/>
									<h2>React</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="text-center py-2">
				<div class="container">
					<div class="row">
						<div class="col-lg-4 p-3">
							<div class="card">
								<div class="card-body p-3">
									{' '}
									<img
										class="img-fluid d-block mb-3 mx-auto rounded-circle"
										src={_CI}
										width="150"
										height="150"
									/>
									<h2>CodeIgniter</h2>
								</div>
							</div>
						</div>
						<div class="col-lg-4 p-3 col-md-6">
							<div class="card">
								<div class="card-body p-3">
									{' '}
									<img
										class="img-fluid d-block mb-3 mx-auto rounded-circle"
										src={_XD}
										width="150"
										height="150"
									/>
									<h2>AdobeXD</h2>
								</div>
							</div>
						</div>
						<div class="col-lg-4 p-3 col-md-6">
							<div class="card">
								<div class="card-body p-3">
									{' '}
									<img class=" mb-3 mx-auto rounded-circle" src={_OFFICE} width="150" height="150" />
									<h2>Microsoft Office</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Value;
