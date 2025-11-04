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
      username: z.string(),
      profile: z.strictObject({
        user_profile_id: z.number(),
        user_profile_photo_storage_token: z.string().nullable(),
        user_profile_email: z.string().nullable(),
        user_profile_phone_number_country_code: z.string().nullable(),
        user_profile_phone_number: z.string().nullable(),
        user_profile_first_name: z.string().nullable(),
        user_profile_last_name: z.string().nullable(),
        user_profile_email_verified: z.string().nullable(),
      }),
      apps: z.array(z.string()),
      sessions: z.array(
        z.strictObject({
          app_name: z.string(),
          active_sessions: z.number(),
        })
      ),
      recovery_methods: z.record(z.string(), z.boolean()),
    }),
  }),
});

type GetUserDetailsV0Response = z.infer<typeof GetUserDetailsV0ResponseZ>;

const DeleteUserV0ResponseZ = APIOutputZ.extend({
  data: z.null(),
});

type DeleteUserV0Response = z.infer<typeof DeleteUserV0ResponseZ>;

const LogoutAllV0ResponseZ = APIOutputZ.extend({
  data: z.null(),
});

type LogoutAllV0Response = z.infer<typeof LogoutAllV0ResponseZ>;
const LogoutAppsV0ResponseZ = APIOutputZ.extend({
  data: z.null(),
});

type LogoutAppsV0Response = z.infer<typeof LogoutAppsV0ResponseZ>;

const GenerateAccountBackupCodeV0ResponseZ = APIOutputZ.extend({
  data: z.strictObject({
    main: z.strictObject({
      user_id: z.string(),
      backup_codes: z.array(z.string()),
    }),
  }),
});

type GenerateAccountBackupCodeV0Response = z.infer<
  typeof GenerateAccountBackupCodeV0ResponseZ
>;

const updateProfileDetailsV0ResponseZ = APIOutputZ.extend({
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

type updateProfileDetailsV0Response = z.infer<
  typeof updateProfileDetailsV0ResponseZ
>;

const sendResetPasswordEmailV0ResponseZ = APIOutputZ.extend({
  data: z.strictObject({
    expires_at: z.string(),
    cooldown_reset_at: z.string(),
  }),
});

type sendResetPasswordEmailV0Response = z.infer<
  typeof sendResetPasswordEmailV0ResponseZ
>;

const RecoveryMethodEnumZ = z.enum(["EMAIL", "BACKUP_CODE"]);
type RecoveryMethodEnum = z.infer<typeof RecoveryMethodEnumZ>;

const updateUserRecoveryMethodsV0ResponseZ = APIOutputZ.extend({
  data: z.strictObject({
    main: z.array(RecoveryMethodEnumZ),
  }),
});
type updateUserRecoveryMethodsV0Response = z.infer<
  typeof updateUserRecoveryMethodsV0ResponseZ
>;

const sendVerificationEmailV0ResponseZ = APIOutputZ.extend({
  data: z.nullable(
    z.strictObject({
      expires_at: z.string(),
      cooldown_reset_at: z.string(),
    })
  ),
});
type sendVerificationEmailV0Response = z.infer<
  typeof sendVerificationEmailV0ResponseZ
>;

const validateEmailVerificationCodeV0ResponseZ = APIOutputZ.extend({
  data: z.nullable(
    z.strictObject({
      user_profile_email_verified: z.string(),
    })
  ),
});
type validateEmailVerificationCodeV0Response = z.infer<
  typeof validateEmailVerificationCodeV0ResponseZ
>;

export {
  UpdateUsernameV0ResponseZ,
  UpdateUsernameV0Response,
  GetUserDetailsV0ResponseZ,
  GetUserDetailsV0Response,
  DeleteUserV0Response,
  DeleteUserV0ResponseZ,
  LogoutAllV0Response,
  LogoutAllV0ResponseZ,
  LogoutAppsV0Response,
  LogoutAppsV0ResponseZ,
  GenerateAccountBackupCodeV0Response,
  GenerateAccountBackupCodeV0ResponseZ,
  updateProfileDetailsV0ResponseZ,
  updateProfileDetailsV0Response,
  sendResetPasswordEmailV0ResponseZ,
  sendResetPasswordEmailV0Response,
  RecoveryMethodEnumZ,
  RecoveryMethodEnum,
  updateUserRecoveryMethodsV0ResponseZ,
  updateUserRecoveryMethodsV0Response,
  sendVerificationEmailV0ResponseZ,
  sendVerificationEmailV0Response,
  validateEmailVerificationCodeV0ResponseZ,
  validateEmailVerificationCodeV0Response,
};
