import { fetchFileData, fetchJSONData } from "squarecommons";

import {
  DeleteUserV0ResponseZ,
  GenerateAccountBackupCodeV0ResponseZ,
  GetUserDetailsV0ResponseZ,
  GetUserRecoveryMethodsV0ResponseZ,
  LogoutAllV0ResponseZ,
  LogoutAppsV0ResponseZ,
  RecoveryMethodEnum,
  SendResetPasswordEmailV0ResponseZ,
  SendVerificationEmailV0ResponseZ,
  UpdateProfileDetailsV0ResponseZ,
  UpdateUsernameV0ResponseZ,
  UpdateUserRecoveryMethodsV0ResponseZ,
  ValidateEmailVerificationCodeV0ResponseZ,
} from "./types/AuthenticationResponses.js";

class AuthenticationCommonBL {
  constructor(private commonBLBaseURL: string = "http://localhost:10110") {}

  async deleteUserV0(accessToken: string, password: string) {
    try {
      const data = await fetchJSONData(
        // base url
        this.commonBLBaseURL,
        // endpoint
        "delete_user/v0",
        // method
        "POST",
        // headers
        { access_token: accessToken },
        // body
        { password: password },
        // query params
        undefined,
      );
      return DeleteUserV0ResponseZ.parse(data);
    } catch (error) {
      throw error;
    }
  }
  async updateUsernameV0(accessToken: string, newUsername: string) {
    try {
      const data = await fetchJSONData(
        // base url
        this.commonBLBaseURL,
        // endpoint
        "update_username/v0",
        // method
        "PATCH",
        // headers
        { access_token: accessToken },
        // body
        undefined,
        // query params
        { new_username: newUsername },
      );
      return UpdateUsernameV0ResponseZ.parse(data);
    } catch (error) {
      throw error;
    }
  }
  async getUserDetailsV0(accessToken: string) {
    try {
      const data = await fetchJSONData(
        // base url
        this.commonBLBaseURL,
        // endpoint
        "get_user_details/v0",
        // method
        "GET",
        // headers
        { access_token: accessToken },
        // body
        undefined,
        // query params
        undefined,
      );
      return GetUserDetailsV0ResponseZ.parse(data);
    } catch (error) {
      throw error;
    }
  }
  async logoutAllV0(accessToken: string) {
    try {
      const data = await fetchJSONData(
        // base url
        this.commonBLBaseURL,
        // endpoint
        "logout/all/v0",
        // method
        "DELETE",
        // headers
        { access_token: accessToken },
        // body
        undefined,
        // query params
        undefined,
      );
      return LogoutAllV0ResponseZ.parse(data);
    } catch (error) {
      throw error;
    }
  }
  async logoutAppsV0(accessToken: string, appNames: string[]) {
    try {
      const data = await fetchJSONData(
        // base url
        this.commonBLBaseURL,
        // endpoint
        "logout/apps/v0",
        // method
        "DELETE",
        // headers
        { access_token: accessToken },
        // body
        { app_names: appNames },
        // query params
        undefined,
      );
      return LogoutAppsV0ResponseZ.parse(data);
    } catch (error) {
      throw error;
    }
  }
  async getUserProfilePhotoV0(accessToken: string) {
    try {
      const data = await fetchFileData(
        // base url
        this.commonBLBaseURL,
        // endpoint
        "get_user_profile_photo/v0",
        // method
        "GET",
        // headers
        { access_token: accessToken },
        // body
        undefined,
        // query params
        undefined,
      );
      return data;
    } catch (error) {
      throw error;
    }
  }

  async updateUserProfilePhotoV0(accessToken: string, profilePhoto?: File) {
    try {
      const MAX_SIZE = 5 * 1024 * 1024; // 5 MiB
      const ALLOWED_TYPES = ["image/png", "image/jpeg"];

      if (profilePhoto) {
        if (!ALLOWED_TYPES.includes(profilePhoto.type)) {
          throw new Error("invalid file type: only png or jpeg allowed");
        }
        if (profilePhoto.size > MAX_SIZE) {
          throw new Error("file too large: must be under 5 MiB");
        }
      }
      const formData = new FormData();
      if (profilePhoto) {
        formData.append("profile_photo", profilePhoto);
      }
      const data = await fetchJSONData(
        // base url
        this.commonBLBaseURL,
        // endpoint
        "update_profile_photo/v0",
        // method
        "PATCH",
        // headers
        { access_token: accessToken },
        // body
        formData,
        // query params
        undefined,
      );
      return data;
    } catch (error) {
      throw error;
    }
  }

  async generateAccountBackupCodesV0(accessToken: string) {
    try {
      const data = await fetchJSONData(
        // base url
        this.commonBLBaseURL,
        // endpoint
        "generate_account_backup_codes/v0",
        // method
        "POST",
        // headers
        { access_token: accessToken },
        // body
        undefined,
        // query params
        undefined,
      );
      return GenerateAccountBackupCodeV0ResponseZ.parse(data);
    } catch (error) {
      throw error;
    }
  }

  async updateProfileDetailsV0(
    accessToken: string,
    firstName?: string,
    lastName?: string,
    email?: string,
    phoneNumberCountryCode?: string,
    phoneNumber?: string,
  ) {
    try {
      const queryParams: Record<string, string> = {};

      if (firstName) queryParams["first_name"] = firstName;
      if (lastName) queryParams["last_name"] = lastName;
      if (email) queryParams["email"] = email;
      if (phoneNumberCountryCode)
        queryParams["phone_number_country_code"] = phoneNumberCountryCode;
      if (phoneNumber) queryParams["phone_number"] = phoneNumber;

      // Call API
      const data = await fetchJSONData(
        // base url
        this.commonBLBaseURL,
        // endpoint
        "update_profile_details/v0",
        // method
        "PATCH",
        // headers
        { access_token: accessToken },
        // body
        undefined,
        // query params
        queryParams,
      );
      return UpdateProfileDetailsV0ResponseZ.parse(data);
    } catch (error) {
      throw error;
    }
  }
  async sendResetPasswordEmailV0(username: string) {
    try {
      const data = await fetchJSONData(
        // base url
        this.commonBLBaseURL,
        // endpoint
        "send_reset_password_email/v0",
        // method
        "POST",
        // headers
        undefined,
        // body
        { username: username },
        // query params
        undefined,
      );
      return SendResetPasswordEmailV0ResponseZ.parse(data);
    } catch (error) {
      throw error;
    }
  }
  async updateUserRecoveryMethodsV0(
    accessToken: string,
    recoveryMethodsToAdd?: RecoveryMethodEnum[],
    recoveryMethodsToRemove?: RecoveryMethodEnum[],
  ) {
    try {
      if (!recoveryMethodsToAdd) {
        recoveryMethodsToAdd = [];
      }
      if (!recoveryMethodsToRemove) {
        recoveryMethodsToRemove = [];
      }
      const data = await fetchJSONData(
        // base url
        this.commonBLBaseURL,
        // endpoint
        "update_user_recovery_methods/v0",
        // method
        "PATCH",
        // headers
        { access_token: accessToken },
        // body
        {
          recovery_methods_to_add: recoveryMethodsToAdd,
          recovery_methods_to_remove: recoveryMethodsToRemove,
        },
        // query params
        undefined,
      );
      return UpdateUserRecoveryMethodsV0ResponseZ.parse(data);
    } catch (error) {
      throw error;
    }
  }
  async sendVerificationEmailV0(accessToken: string) {
    try {
      const data = await fetchJSONData(
        // base url
        this.commonBLBaseURL,
        // endpoint
        "send_verification_email/v0",
        // method
        "POST",
        // headers
        { access_token: accessToken },
        // body
        undefined,
        // query params
        undefined,
      );
      return SendVerificationEmailV0ResponseZ.parse(data);
    } catch (error) {
      throw error;
    }
  }
  async validateEmailVerificationCodeV0(
    accessToken: string,
    verificationCode: string,
  ) {
    try {
      const data = await fetchJSONData(
        // base url
        this.commonBLBaseURL,
        // endpoint
        "validate_email_verification_code/v0",
        // method
        "POST",
        // headers
        { access_token: accessToken },
        // body
        { verification_code: verificationCode },
        // query params
        undefined,
      );
      return ValidateEmailVerificationCodeV0ResponseZ.parse(data);
    } catch (error) {
      throw error;
    }
  }

  async getUserRecoveryMethodsV0(username: string) {
    try {
      const data = await fetchJSONData(
        // base url
        this.commonBLBaseURL,
        // endpoint
        "get_user_recovery_methods/v0",
        // method
        "GET",
        // headers
        undefined,
        // body
        undefined,
        // query params
        { username: username },
      );
      return GetUserRecoveryMethodsV0ResponseZ.parse(data);
    } catch (error) {
      throw error;
    }
  }
}

export { AuthenticationCommonBL };
