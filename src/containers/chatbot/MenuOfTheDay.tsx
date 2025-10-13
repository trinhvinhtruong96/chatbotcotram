import React from "react"
import styled from "styled-components"
import calendarIMG from "../../img/calendar.png";

export default function MenuOfTheDay() {
	return (
		<Container>
			<img src={calendarIMG} alt="calendar"/>
		</Container>
	)
}

const Container = styled.div`
    margin: 40px auto;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    padding: 24px;
    border: 1px solid #f2f2f2;
`
