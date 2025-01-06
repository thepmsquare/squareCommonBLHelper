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
console.log(
  await authenticationCommonBL.generateAccessTokenV0("dummy_refresh_token")
);
console.log(
  await authenticationCommonBL.updateUsernameV0(
    "dummy_access_token",
    "new_username"
  )
);
console.log(
  await authenticationCommonBL.updatePasswordV0(
    "dummy_access_token",
    "oldPassword",
    "newPassword"
  )
);
