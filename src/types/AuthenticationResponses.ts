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

export { GenerateAccessTokenV0ResponseZ, GenerateAccessTokenV0Response };
