# squareCommonBLHelper

## about

helper for common bl for my projects.

## usage

[Example](./example.js)

## env

1. node js - v18.17.0
2. npm - v9.6.7

## changelog

### v9.3.0

- AuthenticationCommonBL:
  - add backup_code_details in GetUserDetailsV0ResponseZ.

### v9.2.3

- AuthenticationCommonBL:
  - updateUserRecoveryMethodsV0 now compatible with square_common_bl>=6.0.0

### v9.2.2

- AuthenticationCommonBL:
  - bugfix in updateUserRecoveryMethodsV0 query parameters (string[] instead of comma separated list).

### v9.2.1

- AuthenticationCommonBL:
  - update type of GetUserDetailsV0ResponseZ and GetUserRecoveryMethodsV0ResponseZ to include RecoveryMethodEnumZ as key instead of random string.

### v9.2.0

- AuthenticationCommonBL:
  - add getUserRecoveryMethodsV0.

### v9.1.0

- AuthenticationCommonBL:
  - add email_verification_details in GetUserDetailsV0ResponseZ.

### v9.0.2

- AuthenticationCommonBL:
  - add recovery_methods in GetUserDetailsV0ResponseZ.

### v9.0.1

- AuthenticationCommonBL:
  - add user_profile_phone_number_country_code and user_profile_email_verified in GetUserDetailsV0ResponseZ.

### v9.0.0

- AuthenticationCommonBL:
  - **breaking change**: remove user_profile_username from GetUserDetailsV0ResponseZ.

### v8.0.1

- AuthenticationCommonBL:
  - add username to GetUserDetailsV0ResponseZ.

### v8.0.0

- AuthenticationCommonBL:
  - **breaking change**, rename the following types to match the standard naming convention:
    - DeleteUserV0ResponseZ
    - LogoutAllV0ResponseZ
    - LogoutAppsV0ResponseZ
    - GenerateAccountBackupCodeV0ResponseZ
    - updateProfileDetailsV0ResponseZ

### v7.0.0

- GreetingCommonBL:
  - **breaking change**: replace createGreetingV0 with createAnonymousGreetingV0.

### v6.1.0

- AuthenticationCommonBL:
  - update output types of sendResetPasswordEmailV0ResponseZ and sendVerificationEmailV0ResponseZ.

### v6.0.0

- AuthenticationCommonBL:
  - **breaking change** remove updatePasswordV0.
  - add generateAccountBackupCodesV0.
  - method changed of deleteUserV0 from delete to post.
  - add updateProfileDetailsV0.
  - add sendResetPasswordEmailV0.
  - add updateUserRecoveryMethodsV0.
  - add sendVerificationEmailV0.
  - add validateEmailVerificationCodeV0.

### v5.2.1

- AuthenticationCommonBL:
  - fix url in updateUserProfilePhotoV0.

### v5.2.0

- AuthenticationCommonBL:
  - add updateUserProfilePhotoV0.
  - rename getUserProfilePhoto to getUserProfilePhotoV0.

### v5.1.0

- AuthenticationCommonBL:
  - add getUserProfilePhoto.

### v5.0.0

- AuthenticationCommonBL:
  - change type for GetUserDetailsV0ResponseZ to make it compatible with latest changes.

### v4.2.0

- AuthenticationCommonBL:
  - add logoutAppsV0.

### v4.1.0

- AuthenticationCommonBL:
  - add logoutAllV0.

### v4.0.0

- AuthenticationCommonBL:
  - change type for GetUserDetailsV0ResponseZ to make it compatible with latest changes.

### v3.0.0

- AuthenticationCommonBL:
  - remove generateAccessTokenV0, logoutV0.

### v2.0.1

- use strictObject in zod.
- export types in index file.

### v2.0.0

- remove UtilsCommonBL

### v1.8.0

- AuthenticationCommonBL:
  - add types for deleteUserV0

### v1.7.0

- AuthenticationCommonBL:
  - add types for logoutV0

### v1.6.0

- AuthenticationCommonBL:
  - add types for getUserDetailsV0

### v1.5.0

- AuthenticationCommonBL:
  - add types for updatePasswordV0

### v1.4.0

- AuthenticationCommonBL:
  - bug fix in updateUsernameV0
  - add types for updateUsernameV0

### v1.3.0

- add types in AuthenticationCommonBL:
  - generateAccessTokenV0

### v1.2.0

- add types in greeting:
  - createGreetingV0

### v1.1.0

- add AuthenticationCommonBL class with the following methods:
  - logoutV0
  - generateAccessTokenV0
  - deleteUserV0
  - updateUsernameV0
  - updatePasswordV0
  - getUserDetailsV0

### v1.0.3

- experimental release.

### v1.0.2

- replace user_id with accessToken from greeting -> createGreetingV0.

### v1.0.1

- remove app_id from greeting -> createGreetingV0.

### v1.0.0

- initial implementation.

## Feedback is appreciated. Thank you!
