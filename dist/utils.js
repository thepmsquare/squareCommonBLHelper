import { fetchJSONData } from "squarecommons";
class UtilsCommonBL {
    commonBLBaseURL;
    constructor(commonBLBaseURL = "http://localhost:10110") {
        this.commonBLBaseURL = commonBLBaseURL;
    }
    async getAppIdV0(appName) {
        try {
            const data = await fetchJSONData(this.commonBLBaseURL, "get_app_id/v0", "GET", undefined, undefined, { app_name: appName });
            return data;
        }
        catch (error) {
            throw error;
        }
    }
}
export { UtilsCommonBL };
