import type { CollectionConfig } from 'payload';

export const Comments: CollectionConfig = {
  slug: 'comments',
  access: {
    read: ({ req }) => {
      return {
        approved: {
          equals: true,
        },
      };
    },
    create: () => true,
    update: ({ req }) => req.user?.role === 'admin',
    delete: ({ req }) => req.user?.role === 'admin',
  },
  admin: {
    useAsTitle: 'message',
    defaultColumns: ['news', 'message', 'approved'],
  },
  fields: [
    {
      name: 'news',
      type: 'relationship',
      relationTo: 'news',
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'authorName',
      type: 'text',
      required: false,
    },
    {
      name: 'approved',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Модерация: только одобренные комментарии видны на сайте',
      },
    },
  ],
};
