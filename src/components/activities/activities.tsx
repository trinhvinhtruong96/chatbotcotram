import React from "react";
import cotramIMG from "../../img/cotram.png";
import activityIMG from "../../img/activity1.jpg";

export const Activities = () => {
	return (
		<section className="section-testimonials" id="khoanhkhac">
			<div className="testimonials-container">
				<span className="subheading">Hình ảnh hoạt động của bé</span>
				<h2 className="heading-secondary">
					Khám phá khoảng khắc của bé qua từng tấm hình
				</h2>
				<div className="testimonials">
					<figure className="testimonial">
						<img
							className="testimonial-img"
							src={cotramIMG}
							alt="Dave Bryson"
						/>
						<blockquote className="testimonial-text">
							Đánh trẻ là niềm vui của cô Trâm, cô đánh trẻ rất nhiều, rất đau, tận tâm trong từng cú đánh, nói chung không ai đánh bé đau bằng cô
						</blockquote>
						<p className="testimonial-name">&mdash; Cô Bích Trâm</p>
					</figure>

					<figure className="testimonial">
						<img
							className="testimonial-img"
							src={cotramIMG}
							alt=" Ben Hadley"
						/>
						<blockquote className="testimonial-text">
							The AI algorithm is crazy good, it chooses the
							right meals for me every time. It's amazing not
							to worry about food anymore!
						</blockquote>
						<p className="testimonial-name">&mdash; Ben Hadley</p>
					</figure>

					<figure className="testimonial">
						<img
							className="testimonial-img"
							src={cotramIMG}
							alt="Steve Miller"
						/>
						<blockquote className="testimonial-text">
							Omnifood is a life saver! I just started a
							company, so there's no time for cooking. I
							couldn't live without my daily meals now!
						</blockquote>
						<p className="testimonial-name">&mdash; Steve Miller</p>
					</figure>
				</div>
			</div>
			<div className="gallery">
				<figure className="gallery-item">
					<img src={activityIMG} alt="gallery"/>
				</figure>
				<figure className="gallery-item">
					<img src={activityIMG} alt="gallery"/>
				</figure>
				<figure className="gallery-item">
					<img src={activityIMG} alt="gallery"/>
				</figure>
				<figure className="gallery-item">
					<img src={activityIMG} alt="gallery"/>
				</figure>
				<figure className="gallery-item">
					<img src={activityIMG} alt="gallery"/>
				</figure>
				<figure className="gallery-item">
					<img src={activityIMG} alt="gallery"/>
				</figure>
				<figure className="gallery-item">
					<img src={activityIMG} alt="gallery"/>
				</figure>
				<figure className="gallery-item">
					<img src={activityIMG} alt="gallery"/>
				</figure>
				<figure className="gallery-item">
					<img src={activityIMG} alt="gallery"/>
				</figure>
				<figure className="gallery-item">
					<img src={activityIMG} alt="gallery"/>
				</figure>
				<figure className="gallery-item">
					<img src={activityIMG} alt="gallery"/>
				</figure>
				<figure className="gallery-item">
					<img src={activityIMG} alt="gallery"/>
				</figure>
			</div>
		</section>)
}
