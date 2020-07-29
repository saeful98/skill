import React from 'react';
import Food from '../../Image/Portfolio/food1.PNG';
import Movie from '../../Image/Portfolio/Movie.PNG';
import Orhil from '../../Image/Portfolio/Orhil.PNG';
import Rentcar from '../../Image/Portfolio/rent_car.PNG';
import Mom_talk from '../../Image/Portfolio/momtalk.PNG';

function value() {
	return (
		<div>
			<div class="text-center pt-5 pb-3">
				<div class="container">
					<div class="row">
						<div class="mx-auto col-md-8">
							<h1 class="mb-3" className="clrfontjudul">
								<b>My Portfolio</b>
							</h1>
							<p class="lead" className="clrfontjudul">
								<b>
									Saya telah membuat beberapa aplikasi baik Web ataupun Mobile, Berikut adalah
									daftarnya :{' '}
								</b>
							</p>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div class="container border-bottom pt-5">
					<div class="row justify-content-center">
						<div class="col-md-10">
							<div class="col-md-3">
								<h2 class="my-4 " className="clrfontjudul">
									WEB
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="py-3 ">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-md-10 align-items-center">
							{/* <div class="row">
								<div class="col-lg-5 col-md-6 p-md-4 col-3">
									{' '}
									<img class="img-fluid d-block" src={Food} width="1500" />{' '}
								</div>
								<div class="col-md-6 offset-lg-1 d-flex flex-column justify-content-center py-4">
									<h3 class="my-3" className="colorfont">
										<b>Aplikasi Web Pemesanan Restoran</b>
									</h3>
									<p class="lead">asd</p>
								</div>
							</div> */}
							<div class="row">
								<div class="col-md-3 d-flex flex-column justify-content-center order-2 order-md-1 py-4">
									<h3 class="my-3" className="clrfontjudul">
										<b>Aplikasi Web Pemesanan Restoran</b>
									</h3>
									<p class="lead">
										Web yang memiliki fungsi sebagai tempat pemesanan pada restoran. sehingga web
										ini berisikan Menu, Order, Bill, Meja,Promo,dll. sehingga setiap pemesanan akan
										langsung terhubung dengan Bag.Dapur, kasir, pelayan.
									</p>
								</div>
								<div class="col-lg-5 col-md-9 p-md-4 col-3 offset-lg-1 order-1 order-md-2">
									{' '}
									<img src={Food} className="gambar" style={{ width: '650px' }} width="3000" />{' '}
								</div>
							</div>
							<div class="row">
								<div class="col-md-3 d-flex flex-column justify-content-center order-2 order-md-1 py-4">
									<h3 class="my-3" className="clrfontjudul">
										<b>Web Database film</b>
									</h3>
									<p class="lead">
										Web yang berisikan data film yang didapatkan dengan menggunakan IMDB API serta
										menghubungkannya dengan beberapa informasi tambahan seperti informasi pembelian
										aksesoris maupun dvd yang didapatkan dari Amazon API
									</p>
								</div>
								<div class="col-lg-5 col-md-9 p-md-4 col-3 offset-lg-1 order-1 order-md-2">
									{' '}
									<img src={Movie} className="gambar" style={{ width: '650px' }} width="3000" />{' '}
								</div>
							</div>

							<div class="row">
								<div class="col-md-3 d-flex flex-column justify-content-center order-2 order-md-1 py-4">
									<h3 class="my-3" className="clrfontjudul">
										<b>Web Pemesanan Rental Mobil</b>
									</h3>
									<p class="lead">
										Web yang berisikan informasi lokasi rental mobil serta mobil apa saja yang
										disediakan oleh rental tersebut, pengguna web ini juga dapat mencari rental
										berdasarkan jarak terdekat maupun berdasarkan mobil yang diinginkan
									</p>
								</div>
								<div class="col-lg-5 col-md-9 p-md-4 col-3 offset-lg-1 order-1 order-md-2">
									{' '}
									<img
										src={Rentcar}
										className="gambar"
										style={{ width: '650px' }}
										width="3000"
									/>{' '}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div class="container border-bottom pt-5">
					<div class="row justify-content-center">
						<div class="col-md-10">
							<div class="col-lg-9 col-md-9 p-md-4 col-3">
								<p />
							</div>
							<div class="col-md-3 d-flex flex-column justify-content-center order-2 order-md-1 py-4">
								<h2 class="pl-3" className="clrfontjudul">
									MOBILE
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="py-5 ">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-md-10  align-items-center ">
							<div class="row ">
								<div class=" col-md-6 p-md-4 col-3 justify-content-center ">
									{' '}
									<img src={Orhil} className="gambar" style={{ width: '300px' }} width="300" />{' '}
								</div>
								<div class="col-md-3 d-flex flex-column justify-content-center order-2 order-md-1 py-4">
									<h3 class="my-3" className="clrfontjudul">
										{' '}
										<b>Aplikasi Pencarian Orang Hilang Menggunakan Face Recognition</b>{' '}
									</h3>
									<p class="lead">
										Aplikasi ini dibuat menggunakan react native. Aplikasi ini bertujuan agar
										mempermudah proses pencarian orang hilang yang mempunyai gangguan ingatan.
										sehingga dengan hanya sekali foto maka orang tersebut akan dicari kecocokan
										dengan data orang hilang pada database.
									</p>
								</div>
							</div>

							<div class="row ">
								<div class=" col-md-6 p-md-4 col-3 justify-content-center ">
									{' '}
									<img
										src={Mom_talk}
										className="gambar"
										style={{ width: '300px' }}
										width="3000"
									/>{' '}
								</div>
								<div class="col-md-3 d-flex flex-column justify-content-center order-2 order-md-1 py-4">
									<h3 class="my-3" className="clrfontjudul">
										<b>Aplikasi Chat Mom Talk Untuk Para Ibu Muda</b>{' '}
									</h3>
									<p class="lead">
										Aplikasi ini dibuat menggunakan react native. Aplikasi ini bertujuan sebagai
										tempat saling share pengalaman dalam mengurus anak. Aplikasi ini ditujukan untuk
										ibu-ibu yang masih muda yang baru mempunyai seorang anak.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default value;
