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

export {
  GenerateAccessTokenV0ResponseZ,
  GenerateAccessTokenV0Response,
  UpdateUsernameV0ResponseZ,
  UpdateUsernameV0Response,
  UpdatePasswordV0ResponseZ,
  UpdatePasswordV0Response,
};
