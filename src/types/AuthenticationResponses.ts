import { APIOutputZ } from "squarecommons";
import { z } from "zod";

const GenerateAccessTokenV0ResponseZ = APIOutputZ.extend({
  data: z.object({
    main: z.object({
      access_token: z.string(),
    }),
  }),
});
type GenerateAccessTokenV0Response = z.infer<
  typeof GenerateAccessTokenV0ResponseZ
>;

const UpdateUsernameV0ResponseZ = APIOutputZ.extend({
  data: z.object({
    main: z.object({
      user_id: z.string(),
      username: z.string(),
    }),
  }),
});

type UpdateUsernameV0Response = z.infer<typeof UpdateUsernameV0ResponseZ>;

const UpdatePasswordV0ResponseZ = APIOutputZ.extend({
  data: z.null(),
});

type UpdatePasswordV0Response = z.infer<typeof UpdatePasswordV0ResponseZ>;

const GetUserDetailsV0ResponseZ = APIOutputZ.extend({
  data: z.object({
    main: z.object({
      user_id: z.string(),
      credentials: z.object({
        username: z.string(),
      }),
      apps: z.array(z.number()),
      sessions: z.array(
        z.object({
          app_id: z.number(),
          active_sessions: z.number(),
        })
      ),
    }),
  }),
});

type GetUserDetailsV0Response = z.infer<typeof GetUserDetailsV0ResponseZ>;

const LogoutV0Z = APIOutputZ.extend({
  data: z.null(),
});

type LogoutV0 = z.infer<typeof LogoutV0Z>;

export {
  GenerateAccessTokenV0ResponseZ,
  GenerateAccessTokenV0Response,
  UpdateUsernameV0ResponseZ,
  UpdateUsernameV0Response,
  UpdatePasswordV0ResponseZ,
  UpdatePasswordV0Response,
  GetUserDetailsV0ResponseZ,
  GetUserDetailsV0Response,
  LogoutV0,
  LogoutV0Z,
};
