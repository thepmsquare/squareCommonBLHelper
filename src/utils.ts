import { fetchJSONData } from "squarecommons";

class UtilsCommonBL {
  constructor(private commonBLBaseURL: string = "http://localhost:10110") {}

  async getAppIdV0(appName: string) {
    try {
      const data = await fetchJSONData(
        this.commonBLBaseURL,
        "get_app_id/v0",
        "GET",
        undefined,
        undefined,
        { app_name: appName }
      );
      return data;
    } catch (error) {
      throw error;
    }
  }
}
export { UtilsCommonBL };
