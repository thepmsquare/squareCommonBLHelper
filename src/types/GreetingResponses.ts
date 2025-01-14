import { APIOutputZ } from "squarecommons";
import { z } from "zod";

const CreateGreetingV0ResponseZ = APIOutputZ.extend({
  data: z.strictObject({
    main: z.array(
      z.strictObject({
        greeting_anonymous_sender_name: z.string().nullable(),
        user_id: z.string().nullable(),
        greeting_id: z.number(),
        greeting_datetime: z.string(),
        greeting_is_anonymous: z.boolean(),
        greeting_text: z.string().nullable(),
      })
    ),
  }),
});
type CreateGreetingV0Response = z.infer<typeof CreateGreetingV0ResponseZ>;

export { CreateGreetingV0ResponseZ, CreateGreetingV0Response };
