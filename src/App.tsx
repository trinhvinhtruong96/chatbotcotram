import {MyChatBot} from "./containers/chatbot/chatbot";

import React from "react"
import styled from "styled-components";
import coThuImg from "./img/cothu.jpg";

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: #5068ab;
    color: #fbf0e7;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 1000;
`

const Logo = styled.div`
    font-size: 20px;
    font-weight: bold;
`

const Nav = styled.nav`
    display: flex;
    gap: 20px;

    a {
        color: white;
        text-decoration: none;
        font-size: 16px;
        transition: 0.2s;

        &:hover {
            color: #38bdf8;
        }
    }
`

const Content = styled.div`
    margin-top: 80px; /* để tránh bị header che mất */
    padding: 20px;
`

function App() {
	return (
		<>
			<Header>
				<Logo>Trúc Đào</Logo>
				<Nav>
					<a target="_blank" href="https://www.facebook.com/truong.trucdao">Liên Hệ</a>
					<a target="_blank" href="https://www.facebook.com/truong.trucdao">Hoạt Động</a>
					<a target="_blank" href="https://www.facebook.com/truong.trucdao">Chat Bot</a>
				</Nav>
			</Header>

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
						<a href="#cta" className="btn btn--full margin-right-sm">Theo dõi nhà trường</a>
						<a href="#how" className="btn btn--outline">Khám phá &darr;</a>
					</div>
					<div className="hero-img-box">
						<img
						    src={coThuImg}
						    alt="Woman enjoying food, meals in storage container, and food bowls on a table"
						    className="hero-img"
						/>
					</div>
				</div>
			</section>

			<Content>
				<MyChatBot/>
			</Content>
		</>
	)
}


export default App;
