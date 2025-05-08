import { isAdmin } from "../access/is-admin";
import type { CollectionConfig } from "payload";

export const NewsCollection: CollectionConfig = {
  slug: "news",
  access: {
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
    read: () => true,
  },
  fields: [
    {
      name: "head",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "body",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "poster",
      type: "upload",
      relationTo: "media",
    },
  ],
};
