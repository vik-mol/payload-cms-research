import { z } from 'zod';

import { ApiErrorDataDtoSchema } from './api-contracts';

export type ApiErrorData = z.infer<typeof ApiErrorDataDtoSchema>;
