import type { CollectionConfig } from 'payload';

export const NewsCollection: CollectionConfig = {
  slug: 'news',
  access: {
    read: () => true,
    create: () => true,
    delete: () => true,
    update: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'body',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'picture',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};
