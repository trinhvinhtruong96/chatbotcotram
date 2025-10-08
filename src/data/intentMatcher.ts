import intentsData from './chatbot.json';

export function matchIntent(message) {
	const msg = message.toLowerCase().trim();

	for (const intent of intentsData.intents) {
		for (const pattern of intent.patterns) {
			const pat = pattern.toLowerCase().trim();
			if (msg.includes(pat)) {
				// random 1 trong các responses
				const responses = intent.responses;
				return responses[Math.floor(Math.random() * responses.length)];
			}
		}
	}

	// default nếu không khớp
	return "Xin lỗi, mình chưa hiểu câu hỏi này. Bạn thử hỏi lại nhé 😊";
}
