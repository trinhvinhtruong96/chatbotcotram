import LlmConnector, {OpenaiProvider} from "@rcb-plugins/llm-connector";
import ChatBot, {type Flow} from "react-chatbotify";
import intentsData from '../../data/chatbot.json';
import MenuOfTheDay from "./MenuOfTheDay";
import ExtracurricularActivities from "./ExtracurricularActivities";

export const MyChatBot = () => {
	// openai api key, required since we're using 'direct' mode for testing
	let apiKey = "";

	// initialize the plugin
	const plugins = [LlmConnector()];

	// example flow for testing
	// @ts-ignore
	const flow: Flow = {
		start: {
			message: "Xin chào, bạn muốn tra cứu thông tin gì?",
			chatDisabled: true,
			options: [
				"Lịch học của bé",
				"Thực đơn hàng ngày",
				"Hoạt động ngoại khóa",
			],
			path: async (params) => {
				if (params.userInput === "Lịch học của bé") {
					return "calendar";
				}
				if (params.userInput === "Thực đơn hàng ngày") {
					return "menu";
				}
				if (params.userInput === "Hoạt động ngoại khóa") {
					return "activities";
				}


				return "start";
			},
		},
		calendar: {
			message: "Bé học từ thứ Hai đến thứ Sáu, buổi sáng từ 7h30 đến 11h00 và buổi chiều từ 14h00 đến 16h30.\n" +
				"Cuối tuần bé được nghỉ để vui chơi cùng gia đình nhé! \n Bạn muốn hỏi gì nữa không?",
			options: [
				"Có",
				"Không",
				"Lịch học của bé",
				"Thực đơn hàng ngày",
				"Hoạt động ngoại khóa",
			],
			path: async (params) => {
				if (params.userInput === "Không") {
					return "end";
				}
				return "start";
			},
		},
		menu: {
			component: () => {
				return <MenuOfTheDay/>
			},
			message: "Dưới đây là thực đơn hôm nay của bé: ban có muốn hỏi gì nữa không?",
			options: [
				"Có",
				"Không",
				"Lịch học của bé",
				"Thực đơn hàng ngày",
				"Hoạt động ngoại khóa",
			],
			path: async (params) => {
				if (params.userInput === "Không" || params.userInput === "Kết thúc") {
					return "end";
				}

				if (params.userInput === "Lịch học của bé") {
					return "calendar";
				}
				if (params.userInput === "Thực đơn hàng ngày") {
					return "menu";
				}
				if (params.userInput === "Hoạt động ngoại khóa") {
					return "activities";
				}

				return "start";
			},
		},
		activities: {
			component: <ExtracurricularActivities/>,
			message: "Dưới đây là hoạt động ngoại khóa trong tuần: ban có muốn hỏi gì nữa không?",
			options: [
				"Có",
				"Không",
				"Lịch học của bé",
				"Thực đơn hàng ngày",
				"Hoạt động ngoại khóa",
			],
			path: async (params) => {
				if (params.userInput === "Không" || params.userInput === "Kết thúc") {
					return "end";
				}

				if (params.userInput === "Lịch học của bé") {
					return "calendar";
				}
				if (params.userInput === "Thực đơn hàng ngày") {
					return "menu";
				}
				if (params.userInput === "Hoạt động ngoại khóa") {
					return "activities";
				}

				return "start";
			},
		},
		end: {
			message: "Cảm ơn bạn đã quan tâm! Chúc bạn một ngày vui vẻ!",
		}
	};

	return (
		<ChatBot
			settings={{general: {embedded: true}, chatHistory: {storageKey: "example_openai_integration"}}}
			plugins={plugins}
			flow={flow}
		></ChatBot>
	);
};
