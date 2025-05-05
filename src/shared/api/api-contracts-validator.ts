import { AxiosResponse } from 'axios';
import { ZodType } from 'zod';

export function apiContractValidator<Data>(schema: ZodType<Data>) {
  return function parseResponse(response: AxiosResponse<unknown>): Data {
    console.log(response.data);
    return schema.parse(response.data);
  };
}
