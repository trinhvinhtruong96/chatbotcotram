import heroIMG from "../../img/hero.svg";
import React from "react";

export const Hero = () => {
	return (
		<section className="section-hero">
			<div className="hero">
				<div className="hero-text-box">
					<h1 className="heading-primary">
						Trúc Đào, ươm mầm yêu thương, vững bước tương lai
					</h1>
					<p className="hero-description">
						Trường mầm non Trúc Đào là nơi mỗi em nhỏ được đón nhận bằng tất cả tình yêu thương và sự
						trân trọng. Chúng tôi tin rằng, những năm tháng đầu đời là giai đoạn quan trọng nhất để hình
						thành nhân cách, trí tuệ và cảm xúc của trẻ. Vì thế, Trúc Đào luôn tạo dựng một môi trường
						học tập và vui chơi an toàn, ấm áp như một gia đình thứ hai.
					</p>
					<a href="https://www.facebook.com/truong.trucdao/photos"
					   className="btn btn--full margin-right-sm">Theo dõi nhà trường</a>
					<a href="#how" className="btn btn--outline">Khám phá &darr;</a>
				</div>
				<div className="hero-img-box">
					<img
						src={heroIMG}
						alt="Co thu"
						className="hero-img"
					/>
				</div>
			</div>
		</section>)
}
