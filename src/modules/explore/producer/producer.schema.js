import { createRoute, z } from '@hono/zod-openapi';
import { explorePageSchema, pageParamsSchema } from '@/modules/globalSchema/schema';
import someAnimes from '@/utils/someAnimes';

const producerSchema = createRoute({
  method: 'get',
  path: '/producer/{id}',
  request: {
    query: z.object({
      page: pageParamsSchema,
    }),
    params: z.object({
      id: z.string().openapi({ examples: someAnimes.producers }),
    }),
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: explorePageSchema,
        },
      },
    },
  },
  description: 'Retrieve The list Of Anime By producer',
});

export default producerSchema;
