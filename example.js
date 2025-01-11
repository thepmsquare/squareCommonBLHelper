import { GreetingCommonBL, AuthenticationCommonBL } from "./dist/index.js";

let greetingCommonBL = new GreetingCommonBL();
console.log(await greetingCommonBL.createGreetingV0(true));

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
console.log(
  await authenticationCommonBL.getUserDetailsV0("dummy_access_token")
);
console.log(await authenticationCommonBL.logoutV0("dummy_refresh_token"));

console.log(
  await authenticationCommonBL.deleteUserV0("dummy_access_token", "password")
);
