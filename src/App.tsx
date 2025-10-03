import {MyChatBot} from "./containers/chatbot/chatbot";

import React from "react"
import styled from "styled-components";
import heroIMG from "./img/hero.svg";
import {Content, Header, Logo, Nav} from "./App.styled";
import {Hero} from "./components/hero/hero";
import {Activities} from "./components/activities/activities";
import {HeaderSection} from "./components/header/header";
import {Rules} from "./components/rules/rules";
import {FooterSection} from "./components/footer/footer";
import {ChatbotSection} from "./components/chatbotSection/chatbotSection";


function App() {
	return (
		<>
			<HeaderSection />
			<Hero/>

			<Content>
				<Rules />
				<Activities/>
				<ChatbotSection />
			</Content>
			<FooterSection />
		</>
	)
}


export default App;
