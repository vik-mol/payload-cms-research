import { isAdmin } from '../access/is-admin';
import type { CollectionConfig } from 'payload';

export const UsersCollection: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
    read: isAdmin,
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      options: ['admin', 'redactor'],
      defaultValue: 'redactor',
      required: true,
      saveToJWT: true,
    },
  ],
};
