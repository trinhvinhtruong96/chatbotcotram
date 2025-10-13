import React from "react";
import cotramIMG from "../../img/cotram.png";
import cothuIMG from "../../img/cothu.jpg";
import cohiepIMG from "../../img/cohiep.png";
import activityIMG from "../../img/activity1.jpg";
import activity2IMG from "../../img/act2.jpg";
import activity3IMG from "../../img/act3.jpg";
import activity4IMG from "../../img/act4.jpg";
import activity5IMG from "../../img/act5.jpg";
import activity6IMG from "../../img/act6.jpg";
import activity7IMG from "../../img/act7.jpg";
import activity8IMG from "../../img/act8.jpg";
import activity9IMG from "../../img/act9.jpg";
import activity10IMG from "../../img/act10.jpg";
import activity11IMG from "../../img/act11.jpg";
import activity12IMG from "../../img/act12.jpg";
import activity13IMG from "../../img/act13.jpg";
import activity14IMG from "../../img/act14.jpg";
import activity15IMG from "../../img/act15.jpg";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styled from "styled-components";

const StyledGallery = styled.section`
    background-color: #fdf2e9;
`

export const Activities = () => {
	return (
		<>
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
								Kính gửi quý phụ huynh và các con thân yêu,

								Chào mừng các bé đến với lớp học thân thương của cô! Năm học mới bắt đầu, cô rất vui khi
								được đồng hành cùng các con trong hành trình khám phá tri thức đầu đời. Ở đây, mỗi ngày
								đến
								lớp sẽ là một ngày vui – nơi các con được học tập, vui chơi và phát triển toàn diện
								trong
								tình yêu thương và sự quan tâm của cô.

								Cô mong rằng, cùng với sự phối hợp của quý phụ huynh, chúng ta sẽ tạo nên một môi trường
								học
								tập hạnh phúc, nơi mỗi bé đều được tỏa sáng theo cách riêng của mình.
							</blockquote>
							<p className="testimonial-name">&mdash; Cô Bích Trâm</p>
						</figure>

						<figure className="testimonial">
							<img
								className="testimonial-img"
								src={cothuIMG}
								alt=" Ben Hadley"
							/>
							<blockquote className="testimonial-text">
								Xin chào các con yêu quý và ba mẹ thân mến,

								Cô rất hạnh phúc khi được chào đón các con đến với lớp học nhỏ đầy ắp tiếng cười này. Ở
								đây,
								các con sẽ được chơi, được học, được làm điều mình thích và cùng nhau trưởng thành mỗi
								ngày.

								Cô tin rằng, với tình yêu thương và sự quan tâm của cả cô và bố mẹ, các con sẽ có một
								năm
								học thật vui, thật nhiều kỷ niệm đẹp!
							</blockquote>
							<p className="testimonial-name">&mdash; Cô Hiệp</p>
						</figure>

						<figure className="testimonial">
							<img
								className="testimonial-img"
								src={cohiepIMG}
								alt="Steve Miller"
							/>
							<blockquote className="testimonial-text">
								Các con thân yêu của cô,

								Mỗi ngày đến lớp là một hành trình mới – nơi các con được khám phá, sáng tạo và học cách
								yêu
								thương. Cô luôn tin rằng trong mỗi bé đều có một bông hoa xinh đẹp, chỉ cần được vun đắp
								bằng tình thương và sự kiên nhẫn, bông hoa ấy sẽ nở rộ rực rỡ.

								Cô rất mong sẽ cùng các con và quý phụ huynh tạo nên một năm học tràn đầy niềm vui, yêu
								thương và những ký ức thật đẹp trong tuổi thơ.
							</blockquote>
							<p className="testimonial-name">&mdash; Cô Thu</p>
						</figure>
					</div>
				</div>
				<div className="gallery">
					<figure className="gallery-item">
						<img src={activityIMG} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={activity2IMG} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={activity3IMG} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={activity4IMG} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={activity5IMG} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={activity6IMG} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={activity7IMG} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={activity8IMG} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={activity9IMG} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={activity10IMG} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={activity11IMG} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={activity12IMG} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={activity13IMG} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={activity14IMG} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={activity15IMG} alt="gallery"/>
					</figure>
				</div>


			</section>
			<StyledGallery>
				<ImageGallery items={[
					{original: activityIMG, thumbnail: activityIMG},
					{original: activity2IMG, thumbnail: activity2IMG},
					{original: activity3IMG, thumbnail: activity3IMG},
					{original: activity4IMG, thumbnail: activity4IMG},
					{original: activity5IMG, thumbnail: activity5IMG},
					{original: activity6IMG, thumbnail: activity6IMG},
					{original: activity7IMG, thumbnail: activity7IMG},
					{original: activity8IMG, thumbnail: activity8IMG},
					{original: activity9IMG, thumbnail: activity9IMG},
					{original: activity10IMG, thumbnail: activity10IMG},
					{original: activity11IMG, thumbnail: activity11IMG},
					{original: activity12IMG, thumbnail: activity12IMG},
					{original: activity13IMG, thumbnail: activity13IMG},
					{original: activity14IMG, thumbnail: activity14IMG},
					{original: activity15IMG, thumbnail: activity15IMG}]}/>
			</StyledGallery>
		</>

	)
}
