import { fetchJSONData } from "squarecommons";

import {
  DeleteUserV0Z,
  GetUserDetailsV0ResponseZ,
  LogoutAllV0Z,
  LogoutAppsV0Z,
  UpdatePasswordV0ResponseZ,
  UpdateUsernameV0ResponseZ,
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
        "DELETE",
        // headers
        { access_token: accessToken },
        // body
        { password: password },
        // query params
        undefined
      );
      return DeleteUserV0Z.parse(data);
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
        { new_username: newUsername }
      );
      return UpdateUsernameV0ResponseZ.parse(data);
    } catch (error) {
      throw error;
    }
  }
  async updatePasswordV0(
    accessToken: string,
    oldPassword: string,
    newPassword: string
  ) {
    try {
      const data = await fetchJSONData(
        // base url
        this.commonBLBaseURL,
        // endpoint
        "update_password/v0",
        // method
        "PATCH",
        // headers
        { access_token: accessToken },
        // body
        { old_password: oldPassword, new_password: newPassword },
        // query params
        undefined
      );
      return UpdatePasswordV0ResponseZ.parse(data);
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
        undefined
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
        undefined
      );
      return LogoutAllV0Z.parse(data);
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
        undefined
      );
      return LogoutAppsV0Z.parse(data);
    } catch (error) {
      throw error;
    }
  }
}
export { AuthenticationCommonBL };
