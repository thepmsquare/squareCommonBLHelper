# squareCommonBLHelper

## about

helper for common bl for my projects.

## usage

[Example](./example.js)

## env

1. node js - v18.17.0
2. npm - v9.6.7

## changelog

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
