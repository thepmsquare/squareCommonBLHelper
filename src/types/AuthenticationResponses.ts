import { APIOutputZ } from "squarecommons";
import { z } from "zod";

const RecoveryMethodEnumZ = z.enum(["EMAIL", "BACKUP_CODE"]);
type RecoveryMethodEnum = z.infer<typeof RecoveryMethodEnumZ>;

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
        }),
      ),
      recovery_methods: z.record(RecoveryMethodEnumZ, z.boolean()),
      email_verification_details: z
        .strictObject({ expires_at: z.string(), cooldown_reset_at: z.string() })
        .nullable(),
      backup_code_details: z
        .strictObject({
          total: z.number(),
          available: z.number(),
          generated_at: z.string(),
        })
        .nullable(),
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

const UpdateProfileDetailsV0ResponseZ = APIOutputZ.extend({
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
        }),
      )
      .length(1),
    affected_count: z.number(),
  }),
});

type UpdateProfileDetailsV0Response = z.infer<
  typeof UpdateProfileDetailsV0ResponseZ
>;

const SendResetPasswordEmailV0ResponseZ = APIOutputZ.extend({
  data: z.strictObject({
    expires_at: z.string(),
    cooldown_reset_at: z.string(),
  }),
});

type SendResetPasswordEmailV0Response = z.infer<
  typeof SendResetPasswordEmailV0ResponseZ
>;

const UpdateUserRecoveryMethodsV0ResponseZ = APIOutputZ.extend({
  data: z.strictObject({
    main: z.array(RecoveryMethodEnumZ),
  }),
});
type UpdateUserRecoveryMethodsV0Response = z.infer<
  typeof UpdateUserRecoveryMethodsV0ResponseZ
>;

const SendVerificationEmailV0ResponseZ = APIOutputZ.extend({
  data: z.nullable(
    z.strictObject({
      expires_at: z.string(),
      cooldown_reset_at: z.string(),
    }),
  ),
});
type SendVerificationEmailV0Response = z.infer<
  typeof SendVerificationEmailV0ResponseZ
>;

const ValidateEmailVerificationCodeV0ResponseZ = APIOutputZ.extend({
  data: z.nullable(
    z.strictObject({
      user_profile_email_verified: z.string(),
    }),
  ),
});
type ValidateEmailVerificationCodeV0Response = z.infer<
  typeof ValidateEmailVerificationCodeV0ResponseZ
>;
const GetUserRecoveryMethodsV0ResponseZ = APIOutputZ.extend({
  data: z.strictObject({
    main: z.record(RecoveryMethodEnumZ, z.boolean()),
  }),
});

type GetUserRecoveryMethodsV0Response = z.infer<
  typeof GetUserRecoveryMethodsV0ResponseZ
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
  UpdateProfileDetailsV0ResponseZ,
  UpdateProfileDetailsV0Response,
  SendResetPasswordEmailV0ResponseZ,
  SendResetPasswordEmailV0Response,
  RecoveryMethodEnumZ,
  RecoveryMethodEnum,
  UpdateUserRecoveryMethodsV0ResponseZ,
  UpdateUserRecoveryMethodsV0Response,
  SendVerificationEmailV0ResponseZ,
  SendVerificationEmailV0Response,
  ValidateEmailVerificationCodeV0ResponseZ,
  ValidateEmailVerificationCodeV0Response,
  GetUserRecoveryMethodsV0ResponseZ,
  GetUserRecoveryMethodsV0Response,
};
