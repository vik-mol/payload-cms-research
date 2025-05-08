// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { payloadCloudPlugin } from '@payloadcms/payload-cloud';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import { UsersCollection } from './collections/user';
import { MediaCollection } from './collections/media';
import { NewsCollection } from './collections/news';
import { localization } from '@/shared/i18n/localization';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: UsersCollection.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [UsersCollection, MediaCollection, NewsCollection],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),
  sharp,
  plugins: [payloadCloudPlugin()],
  localization,
  // onInit: async (payload) => {
  //   if (process.env.NODE_ENV === 'development') {
  //     const news = await payload.find({
  //       collection: 'news',
  //     });

  //     if (news.docs.length === 0) {
  //       const article = await payload.create({
  //         collection: 'news',

  //         data: {
  //           // @ts-ignore
  //           head: {
  //             en: 'head eng',
  //             ru: 'head ru',
  //           },
  //           // @ts-ignore

  //           body: {
  //             en: 'head eng',
  //             ru: 'head ru',
  //           },
  //         },
  //       });
  //     }
  //   }
  // },
});
