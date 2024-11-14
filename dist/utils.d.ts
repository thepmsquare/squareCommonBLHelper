declare class UtilsCommonBL {
    private commonBLBaseURL;
    constructor(commonBLBaseURL?: string);
    getAppIdV0(appName: string): Promise<import("squarecommons").APIOutput>;
}
export { UtilsCommonBL };
