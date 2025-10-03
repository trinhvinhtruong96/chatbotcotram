import LlmConnector, {OpenaiProvider} from "@rcb-plugins/llm-connector";
import ChatBot, {type Flow} from "react-chatbotify";

export const MyChatBot = () => {
	// openai api key, required since we're using 'direct' mode for testing
	let apiKey = "";

	// initialize the plugin
	const plugins = [LlmConnector()];

	// example flow for testing
	// @ts-ignore
	const flow: Flow = {
		start: {
			message: "Chào cô Châm, cô Châm muốn bắt đầu sử dụng chat bot chưa",
			options: ["Bắt đầu!"],
			chatDisabled: false,
			path: async (params) => {
				if (!apiKey) {
					await params.simulateStreamMessage("You have not set your API key!");
					return "start";
				}
				await params.simulateStreamMessage("Hỏi thông tin về trường mầm non Trúc Đào!");
				return "openai";
			},
		},
		openai: {
			//@ts-ignore
			llmConnector: {
				// provider configuration guide:
				// https://github.com/React-ChatBotify-Plugins/llm-connector/blob/main/docs/providers/OpenAI.md
				provider: new OpenaiProvider({
					mode: 'direct',
					model: 'gpt-4.1-nano',
					responseFormat: 'stream',
					apiKey: apiKey,
				}),
				outputType: 'character',
			},
		},
	};

	return (
		<ChatBot
			settings={{general: {embedded: true}, chatHistory: {storageKey: "example_openai_integration"}}}
			plugins={plugins}
			flow={flow}
		></ChatBot>
	);
};
