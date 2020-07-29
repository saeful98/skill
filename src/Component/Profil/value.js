import React from 'react';
import '../Component.css';
import Pasfoto from '../../Image/Me/Saeful Rohman.jpg';

function value() {
	return (
		<div>
			<div class="text-center py-5">
				<div class="container">
					<div class="row">
						<div class="mx-auto col-md-8">
							<h1 class="mb-3" className="clrfontjudul">
								<b>About Saeful Rohman</b>
							</h1>
							<p>
								Nama saya saeful Rohman, saya saat ini tinggal di bandung.Saya anak pertama dari 2
								bersodara. Saya menyukai pemrograman terutama menggunakan react dan CI
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="py-5 ">
				<div class="container ">
					<div class="row border-bottom justify-content-center text-align-center">
						<div class="px-lg-5 d-flex flex-column justify-content-center col-lg-4">
							<div class="table-responsive">
								<table class="table ">
									<thead>
										<tr>
											<td style={{ borderColor: 'white' }}>Nama Lengkap</td>
											<td style={{ borderColor: 'white' }}>: Saeful Rohman</td>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td style={{ borderColor: 'white' }}>Tempat/tgl Lahir</td>
											<td style={{ borderColor: 'white' }}>: Bandung, 1997</td>
										</tr>
										<tr>
											<td style={{ borderColor: 'white' }}>Alamat</td>
											<td style={{ borderColor: 'white' }}>
												: Jln. Sarimanis blok.12 No.34, Kota Bandung
											</td>
										</tr>
										<tr>
											<td style={{ borderColor: 'white' }}>Agama</td>
											<td style={{ borderColor: 'white' }}>: Islam</td>
										</tr>
										<tr>
											<td style={{ borderColor: 'white' }}>Umur</td>
											<td style={{ borderColor: 'white' }}>: 22</td>
										</tr>
										<tr>
											<td style={{ borderColor: 'white' }}>Tinggi Badan</td>
											<td style={{ borderColor: 'white' }}>: 167 cm</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div class="col-lg-4">
							{' '}
							<img src={Pasfoto} style={{ width: 280, height: 340 }} />{' '}
						</div>
					</div>
				</div>
			</div>

			{/* ----------------- */}

			{/* <div class="py-5 text-center" className="background polygon">
				<div class="container py-5">
					<div class="row py-5">
						<div class="col-md-12 py-5">
							<h1>I feel the charm of existence in this spot.</h1>
						</div>
					</div>
				</div>
			</div> */}

			{/* selanjutnya */}

			<div className=" pb-5">
				<div class="text-center pt-5 pb-3">
					<div class="container ">
						<div class="row">
							<div class="mx-auto col-md-8 ">
								<h1 className="clrfontjudul">
									<b>RIWAYAT PENDIDIKAN</b>
								</h1>
							</div>
						</div>
					</div>
				</div>
				<div class="px-4">
					<div class="container">
						<div class="row">
							<div class="col-md-9 ml-auto border-left">
								<p className="colorfont">
									<b>2012 - 2015</b>
								</p>
								<p className="colorfont">
									<b>SMK MedikaCom</b>
								</p>
								<p className="colorfont">- Jurusan : Teknik Komputer dan Jaringan</p>
							</div>
						</div>
					</div>
				</div>

				<div class="pt-4 ">
					<div class="container">
						<div class="row ">
							<div class="col-md-9 ml-auto border-left">
								<p className="colorfont">
									<b>2015-2020</b>
								</p>
								<p className="colorfont">
									<b>Universitas Komputer Indonesia</b>
								</p>
								<p className="colorfont">- Jurusan : Teknik Informatika</p>
								<p className="colorfont">
									- Judul Skripsi : Aplikasi Pencarian Orang Hilang Dengan Menggunakan Face
									Recognition{' '}
								</p>
								<p className="colorfont">- IPK : 3.41</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default value;
