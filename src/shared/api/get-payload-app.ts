import { getPayload } from "payload";
import config from "@payload-config";

export  async function getPayloadApp() {
  return await getPayload({ config });
}
