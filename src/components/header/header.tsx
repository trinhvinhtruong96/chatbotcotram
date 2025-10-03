import {Header, Logo, Nav} from "../../App.styled";
import React from "react";

export const HeaderSection = () => {
	return (
		<Header className="header">
			<Logo>Trúc Đào</Logo>
			<nav className="main-nav">
				<ul className="main-nav-list">
					<li className="main-nav-item">
						<a href="https://www.facebook.com/truong.trucdao" className="main-nav-link">Nhà Trường</a>
					</li>
					<li className="main-nav-item">
						<a href="#hoatdong" className="main-nav-link">Hoạt Động</a>
					</li>
					<li className="main-nav-item">
						<a href="#khoanhkhac" className="main-nav-link"
						>Khoảnh khắc</a
						>
					</li>
					<li className="main-nav-item">
						<a href="#chatbot" className="main-nav-link">Chat bot</a>
					</li>
					<li className="main-nav-item">
						<a href="https://www.facebook.com/profile.php?id=100090833588628" className="main-nav-link nav-cta"
						>Lớp Học</a
						>
					</li>
				</ul>
			</nav>

		</Header>
	)
}
