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

const UpdatePasswordV0ResponseZ = APIOutputZ.extend({
  data: z.null(),
});

type UpdatePasswordV0Response = z.infer<typeof UpdatePasswordV0ResponseZ>;

const GetUserDetailsV0ResponseZ = APIOutputZ.extend({
  data: z.strictObject({
    main: z.strictObject({
      user_id: z.string(),
      credentials: z.strictObject({
        username: z.string(),
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
export {
  UpdateUsernameV0ResponseZ,
  UpdateUsernameV0Response,
  UpdatePasswordV0ResponseZ,
  UpdatePasswordV0Response,
  GetUserDetailsV0ResponseZ,
  GetUserDetailsV0Response,
  DeleteUserV0,
  DeleteUserV0Z,
  LogoutAllV0,
  LogoutAllV0Z,
  LogoutAppsV0,
  LogoutAppsV0Z,
};
