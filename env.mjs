import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  skipValidation:
    process.env.NODE_ENV !== 'production' ||
    process.env.SKIP_ENV_VALIDATION === 'true',
  server: {
    LIVE_URL: z.string().optional(),
    IS_DEMO_MODE: z.enum(['true', 'false']).optional(),
    CRON_SECRET: z.string().optional(),
  },
  client: {},
  runtimeEnv: {
    LIVE_URL: process.env.LIVE_URL || 'https://commerce.blazity.com',
    CRON_SECRET: process.env.CRON_SECRET,
  },
})
