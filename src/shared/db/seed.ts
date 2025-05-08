import { getPayload, Payload } from 'payload';
import config from '@payload-config';

import { seedNews } from './news-seeder/news-seeder';

async function seed() {
  console.log('Seeding database...');

  const payload = await getPayload({ config });

  console.log('Clearing collections...');
  await clearCollections(payload);

  await seedNews(payload);
}

function clearCollections(payload: Payload) {
  return Promise.all([payload.delete({ collection: 'news', where: {} })]);
}

if (process.env.NODE_ENV !== 'production') {
  seed()
    .then(() => {
      console.log('Database seeded successfully');
      process.exit(0);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}
