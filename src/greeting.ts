import { fetchJSONData } from "squarecommons";

class GreetingCommonBL {
  constructor(private commonBLBaseURL: string = "http://localhost:10110") {}

  async createGreetingV0(
    greetingIsAnonymous: boolean,
    greetingAnonymousSenderName?: string,
    userId?: string,
    greetingText?: string
  ) {
    try {
      const data = await fetchJSONData(
        this.commonBLBaseURL,
        "create_greeting/v0",
        "POST",
        undefined,
        {
          greeting_is_anonymous: greetingIsAnonymous,
          greeting_anonymous_sender_name: greetingAnonymousSenderName,
          user_id: userId,
          greeting_text: greetingText,
        }
      );
      return data;
    } catch (error) {
      throw error;
    }
  }
}
export { GreetingCommonBL };
