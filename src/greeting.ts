import { fetchJSONData } from "squarecommons";

import { CreateAnonymousGreetingV0ResponseZ } from "./types/GreetingResponses.js";

class GreetingCommonBL {
  constructor(private commonBLBaseURL: string = "http://localhost:10110") {}

  async createAnonymousGreetingV0(
    greetingAnonymousSenderName?: string,
    greetingText?: string
  ) {
    try {
      const data = await fetchJSONData(
        this.commonBLBaseURL,
        "create_anonymous_greeting/v0",
        "POST",
        undefined,
        {
          greeting_anonymous_sender_name: greetingAnonymousSenderName,
          greeting_text: greetingText,
        }
      );
      return CreateAnonymousGreetingV0ResponseZ.parse(data);
    } catch (error) {
      throw error;
    }
  }
}
export { GreetingCommonBL };
