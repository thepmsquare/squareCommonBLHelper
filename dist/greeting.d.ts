declare class GreetingCommonBL {
    private commonBLBaseURL;
    constructor(commonBLBaseURL?: string);
    createGreetingV0(greetingIsAnonymous: boolean, greetingAnonymousSenderName?: string, accessToken?: string, greetingText?: string): Promise<import("squarecommons").APIOutput>;
}
export { GreetingCommonBL };
