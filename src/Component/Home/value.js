import React from 'react';
import Profile from '../../Image/Me/S A B A R_200727.jpg';

function value() {
	return (
		<div>
			<div class="py-5 mx-5">
				<div class="container">
					<div class="row">
						<div class="px-md-5 p-3 col-md-6 d-flex flex-column justify-content-center align-items-center flex-grow-0">
							<h1 className="colorfontmenu">SAEFUL ROHMAN</h1>
							<p class="mb-3 lead " className="colorfontmenu">
								WEB/MOBILE DEVELOPER
							</p>
						</div>
						<div class="col-md-6 py-5">
							<img src={Profile} width="80%" style={{ borderRadius: 50 }} />
						</div>
					</div>
				</div>
			</div>
			<div class="py-1 mx-5 text-center">
				<div class="container">
					<div class="row">
						<div class="col-md-1" />
						<div class="col-md-10">
							<h2 className="colorfontmenu">
								" Hai, Saya adalah seorang lulusan Teknik Informatika dari Universitas Komputer
								Indonesia pada tahun 2020. Saya tertarik dengan react dan sering juga tertarik dengan
								hal-hal baru "
							</h2>
						</div>
						<div class="col-md-1" />
					</div>
				</div>
			</div>
			<div class="py-5 mx-5 text-center" />
		</div>
	);
}

export default value;
