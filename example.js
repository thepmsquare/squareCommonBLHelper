import { GreetingCommonBL, AuthenticationCommonBL } from "./dist/index.js";

let greetingCommonBL = new GreetingCommonBL();
console.log(await greetingCommonBL.createGreetingV0(true));

let authenticationCommonBL = new AuthenticationCommonBL();

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
console.log(
  await authenticationCommonBL.deleteUserV0("dummy_access_token", "password")
);
console.log(await authenticationCommonBL.logoutAllV0("dummy_access_token"));
console.log(
  await authenticationCommonBL.logoutAppsV0("dummy_access_token", ["test"])
);
console.log(await authenticationCommonBL.getProfilePhoto("dummy_access_token"));
console.log(
  await authenticationCommonBL.sendResetPasswordEmailV0("dummy_username")
);
console.log(
  await authenticationCommonBL.updateProfileDetailsV0(
    "dummy_access_token",
    "first_name"
  )
);
