import {
  GreetingCommonBL,
  UtilsCommonBL,
  AuthenticationCommonBL,
} from "./dist/index.js";

let greetingCommonBL = new GreetingCommonBL();
console.log(await greetingCommonBL.createGreetingV0(true));

let utilsCommonBL = new UtilsCommonBL();
console.log(await utilsCommonBL.getAppIdV0("test"));

let authenticationCommonBL = new AuthenticationCommonBL();
console.log(await authenticationCommonBL.generateAccessTokenV0(""));
