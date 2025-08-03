import { APIOutputZ } from "squarecommons";
import { z } from "zod";

const UpdateUsernameV0ResponseZ = APIOutputZ.extend({
  data: z.strictObject({
    main: z.strictObject({
      user_id: z.string(),
      username: z.string(),
    }),
  }),
});

type UpdateUsernameV0Response = z.infer<typeof UpdateUsernameV0ResponseZ>;

const GetUserDetailsV0ResponseZ = APIOutputZ.extend({
  data: z.strictObject({
    main: z.strictObject({
      user_id: z.string(),
      profile: z.strictObject({
        user_profile_id: z.number(),
        user_profile_photo_storage_token: z.string().nullable(),
        user_profile_email: z.string().nullable(),
        user_profile_phone_number: z.string().nullable(),
        user_profile_first_name: z.string().nullable(),
        user_profile_last_name: z.string().nullable(),
        user_profile_username: z.string(),
      }),
      apps: z.array(z.string()),
      sessions: z.array(
        z.strictObject({
          app_name: z.string(),
          active_sessions: z.number(),
        })
      ),
    }),
  }),
});

type GetUserDetailsV0Response = z.infer<typeof GetUserDetailsV0ResponseZ>;

const DeleteUserV0Z = APIOutputZ.extend({
  data: z.null(),
});

type DeleteUserV0 = z.infer<typeof DeleteUserV0Z>;

const LogoutAllV0Z = APIOutputZ.extend({
  data: z.null(),
});

type LogoutAllV0 = z.infer<typeof LogoutAllV0Z>;
const LogoutAppsV0Z = APIOutputZ.extend({
  data: z.null(),
});

type LogoutAppsV0 = z.infer<typeof LogoutAppsV0Z>;

const GenerateAccountBackupCodeZ = APIOutputZ.extend({
  data: z.strictObject({
    main: z.strictObject({
      user_id: z.string(),
      backup_codes: z.array(z.string()),
    }),
  }),
});

type GenerateAccountBackupCode = z.infer<typeof GenerateAccountBackupCodeZ>;

const updateProfileDetailsZ = APIOutputZ.extend({
  data: z.strictObject({
    main: z
      .array(
        z.strictObject({
          user_profile_photo_storage_token: z.string().nullable(),
          user_profile_email: z.string().nullable(),
          user_profile_phone_number_country_code: z.string().nullable(),
          user_profile_first_name: z.string().nullable(),
          user_profile_last_name: z.string().nullable(),
          user_id: z.string(),
          user_profile_id: z.number(),
          user_profile_email_verified: z.string().nullable(),
          user_profile_phone_number: z.string().nullable(),
        })
      )
      .length(1),
    affected_count: z.number(),
  }),
});

type updateProfileDetails = z.infer<typeof updateProfileDetailsZ>;

const sendResetPasswordEmailV0ResponseZ = APIOutputZ.extend({
  data: z.strictObject({
    expires_at: z.string(),
  }),
});

type sendResetPasswordEmailV0Response = z.infer<
  typeof sendResetPasswordEmailV0ResponseZ
>;

export {
  UpdateUsernameV0ResponseZ,
  UpdateUsernameV0Response,
  GetUserDetailsV0ResponseZ,
  GetUserDetailsV0Response,
  DeleteUserV0,
  DeleteUserV0Z,
  LogoutAllV0,
  LogoutAllV0Z,
  LogoutAppsV0,
  LogoutAppsV0Z,
  GenerateAccountBackupCode,
  GenerateAccountBackupCodeZ,
  updateProfileDetailsZ,
  updateProfileDetails,
  sendResetPasswordEmailV0ResponseZ,
  sendResetPasswordEmailV0Response,
};
