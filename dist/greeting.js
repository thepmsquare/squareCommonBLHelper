import { fetchJSONData } from "squarecommons";
class GreetingCommonBL {
    commonBLBaseURL;
    constructor(commonBLBaseURL = "http://localhost:10110") {
        this.commonBLBaseURL = commonBLBaseURL;
    }
    async createGreetingV0(greetingIsAnonymous, greetingAnonymousSenderName, accessToken, greetingText) {
        try {
            let headers;
            if (accessToken) {
                headers = {
                    access_token: accessToken,
                };
            }
            else {
                headers = undefined;
            }
            const data = await fetchJSONData(this.commonBLBaseURL, "create_greeting/v0", "POST", headers, {
                greeting_is_anonymous: greetingIsAnonymous,
                greeting_anonymous_sender_name: greetingAnonymousSenderName,
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
