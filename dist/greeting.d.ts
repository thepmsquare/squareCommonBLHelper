declare class GreetingCommonBL {
    private commonBLBaseURL;
    constructor(commonBLBaseURL?: string);
    createGreetingV0(greetingIsAnonymous: boolean, appId?: number, greetingAnonymousSenderName?: string, userId?: string, greetingText?: string): Promise<import("squarecommons").APIOutput>;
}
export { GreetingCommonBL };
