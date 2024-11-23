import { fetchJSONData } from "squarecommons";
class GreetingCommonBL {
    commonBLBaseURL;
    constructor(commonBLBaseURL = "http://localhost:10110") {
        this.commonBLBaseURL = commonBLBaseURL;
    }
    async createGreetingV0(greetingIsAnonymous, greetingAnonymousSenderName, userId, greetingText) {
        try {
            const data = await fetchJSONData(this.commonBLBaseURL, "create_greeting/v0", "POST", undefined, {
                greeting_is_anonymous: greetingIsAnonymous,
                greeting_anonymous_sender_name: greetingAnonymousSenderName,
                user_id: userId,
                greeting_text: greetingText,
            });
            return data;
        }
        catch (error) {
            throw error;
        }
    }
}
export { GreetingCommonBL };
