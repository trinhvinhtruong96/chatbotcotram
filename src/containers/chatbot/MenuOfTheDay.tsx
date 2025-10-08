import React from "react"
import styled from "styled-components"

const menuData = {
	Monday: {
		breakfast: "Cháo thịt bằm, sữa tươi",
		lunch: "Cơm, canh rau dền, thịt kho trứng, tráng miệng: chuối",
		snack: "Bánh flan, nước cam"
	},
	Tuesday: {
		breakfast: "Mì trứng rau củ, sữa chua",
		lunch: "Cơm, canh bí đỏ, cá chiên, tráng miệng: táo",
		snack: "Bánh mì phô mai, sữa tươi"
	},
	Wednesday: {
		breakfast: "Phở bò, sữa tươi",
		lunch: "Cơm, canh cải xanh, gà kho gừng, tráng miệng: dưa hấu",
		snack: "Chè đậu xanh, sữa chua"
	},
	Thursday: {
		breakfast: "Bún mọc, sữa tươi",
		lunch: "Cơm, canh cà rốt, thịt bò xào rau củ, tráng miệng: lê",
		snack: "Bánh bao nhân ngọt, nước ép cà rốt"
	},
	Friday: {
		breakfast: "Cháo cá, sữa chua",
		lunch: "Cơm, canh rau ngót, thịt viên sốt cà, tráng miệng: xoài",
		snack: "Bánh khoai, sữa tươi"
	}
}

export default function MenuOfTheDay() {
	const today = new Date().toLocaleDateString("en-US", { weekday: "long" })
	const menu = menuData[today] || menuData.Monday

	return (
		<Container>
			<Title>🍱 Thực đơn hôm nay</Title>

			<MealSection>
				<MealTitle>🌞 Bữa sáng:</MealTitle>
				<MealText>{menu.breakfast}</MealText>
			</MealSection>

			<MealSection>
				<MealTitle>🍚 Bữa trưa:</MealTitle>
				<MealText>{menu.lunch}</MealText>
			</MealSection>

			<MealSection>
				<MealTitle>🍪 Bữa xế:</MealTitle>
				<MealText>{menu.snack}</MealText>
			</MealSection>

			<Note>Cập nhật mỗi ngày để bé ăn ngon miệng và đủ dinh dưỡng 💕</Note>
		</Container>
	)
}

const Container = styled.div`
  max-width: 400px;
  margin: 40px auto;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 24px;
  border: 1px solid #f2f2f2;
`

const Title = styled.h2`
  text-align: center;
  color: #e76f51;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`

const MealSection = styled.div`
  margin-bottom: 16px;
`

const MealTitle = styled.h3`
  color: #333;
  font-weight: 600;
  margin-bottom: 4px;
  font-size: 16px;
`

const MealText = styled.p`
  color: #666;
  font-size: 15px;
  line-height: 1.5;
  margin: 0;
`

const Note = styled.p`
  text-align: center;
  font-size: 13px;
  color: #aaa;
  margin-top: 20px;
`

