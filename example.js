import { GreetingCommonBL, AuthenticationCommonBL } from "./dist/index.js";

let greetingCommonBL = new GreetingCommonBL();
console.log(await greetingCommonBL.createAnonymousGreetingV0("Anonymous", "Hello World"));

let authenticationCommonBL = new AuthenticationCommonBL();

// Update username
console.log(
  await authenticationCommonBL.updateUsernameV0(
    "dummy_access_token",
    "new_username"
  )
);

// Get user details
console.log(
  await authenticationCommonBL.getUserDetailsV0("dummy_access_token")
);

// Delete user
console.log(
  await authenticationCommonBL.deleteUserV0("dummy_access_token", "password")
);

// Logout all sessions
console.log(await authenticationCommonBL.logoutAllV0("dummy_access_token"));

// Logout specific apps
console.log(
  await authenticationCommonBL.logoutAppsV0("dummy_access_token", ["test_app"])
);

// Get user profile photo
console.log(
  await authenticationCommonBL.getUserProfilePhotoV0("dummy_access_token")
);

// Update user profile photo
const dummyFile = new File(["dummy"], "profile.jpg", { type: "image/jpeg" });
console.log(
  await authenticationCommonBL.updateUserProfilePhotoV0(
    "dummy_access_token",
    dummyFile
  )
);

// Generate backup codes
console.log(
  await authenticationCommonBL.generateAccountBackupCodesV0(
    "dummy_access_token"
  )
);

// Update profile details
console.log(
  await authenticationCommonBL.updateProfileDetailsV0(
    "dummy_access_token",
    "John",
    "Doe",
    "john@example.com",
    "+1",
    "5551234567"
  )
);

// Send reset password email
console.log(
  await authenticationCommonBL.sendResetPasswordEmailV0(
    "dummy_username",
    "https://example.com/reset"
  )
);

// Update user recovery methods
console.log(
  await authenticationCommonBL.updateUserRecoveryMethodsV0(
    "dummy_access_token",
    ["BACKUP_CODE"],
    undefined
  )
);

// Send verification email
console.log(
  await authenticationCommonBL.sendVerificationEmailV0(
    "dummy_access_token",
    "https://example.com/verify"
  )
);

// Validate email verification code
console.log(
  await authenticationCommonBL.validateEmailVerificationCodeV0(
    "dummy_access_token",
    "123456"
  )
);

// Get user recovery methods
console.log(
  await authenticationCommonBL.getUserRecoveryMethodsV0("dummy_username")
);

// Add self auth provider (username/password)
console.log(
  await authenticationCommonBL.addSelfAuthProviderV0(
    "dummy_access_token",
    "new_password"
  )
);

// Add Google auth provider
console.log(
  await authenticationCommonBL.addGoogleAuthProviderV0(
    "dummy_access_token",
    "dummy_google_id_token"
  )
);

// Unlink auth provider
console.log(
  await authenticationCommonBL.unlinkAuthProviderV0(
    "dummy_access_token",
    "google"
  )
);