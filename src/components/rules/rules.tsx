import ngoaikhoaIMG from "../../img/ngoaikhoa.jpg";

export const Rules = () => {
	return (
		<section className="section-how" id="hoatdong">
			<div className="container">
				<span className="subheading">Trường mầm non trúc đào</span>
				<h2 className="heading-secondary">
					Để bé được phát triển một cách toàn diện nhất
				</h2>
			</div>
			<div className="container grid grid--2-cols grid--center-v">
				<div className="step-text-box">
					<p className="step-number">01</p>
					<h3 className="heading-tertiary">
						Bé được học tập một cách bài bản, khoa học.
					</h3>
					<p className="step-description">
						Never again waste time thinking about what to eat!
						Omnifood AI will create a 100% personalized weekly
						meal plan just for you. It makes sure you get all
						the nutrients and vitamins you need, no matter what
						diet you follow!
					</p>
				</div>
				<div className="step-img-box">
					<img
						src={ngoaikhoaIMG}
						alt="iPhone app preferences selection screen"
						className="step-img"
					/>
				</div>

				<div className="step-img-box">
					<img
						src={ngoaikhoaIMG}
						alt="iPhone app approving plan"
						className="step-img"
					/>
				</div>
				<div className="step-text-box">
					<p className="step-number">02</p>
					<h3 className="heading-tertiary">
						Tham gia các hoạt động vui chơi, ngoại khóa
					</h3>
					<p className="step-description">
						Once per week, approve the meal plan generated for
						you by Omnifood AI. You can change ingredients, swap
						entire meals, or even add your own recipes.
					</p>
				</div>


				<div className="step-text-box">
					<p className="step-number">03</p>
					<h3 className="heading-tertiary">
						Thưởng thức bữa ăn thơm ngon, dinh dưỡng
					</h3>
					<p className="step-description">
						Best chefs in town will cook your selected meal
						every day, and we will deliver it to your door
						whenever works best for you. You can change delivery
						schedule and address daily!
					</p>
				</div>
				<div className="step-img-box">
					<img
						src={ngoaikhoaIMG}
						alt="iPhone delivery screen"
						className="step-img"
					/>
				</div>
			</div>
		</section>
	)
}
