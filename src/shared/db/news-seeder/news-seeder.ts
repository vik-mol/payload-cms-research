import { Payload } from 'payload';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagePath = path.join(__dirname, 'leoplewrodon.jpeg');

interface News {
  en: {
    head: string;
    body: string;
  };
  ru: {
    head: string;
    body: string;
  };
}

const mockNews: Array<News> = [
  {
    en: {
      head: 'Dinosaurs Lived for Over 160 Million Years',
      body: 'Dinosaurs dominated the Earth for around 165 million years before going extinct 66 million years ago.',
    },
    ru: {
      head: 'Динозавры жили более 160 миллионов лет',
      body: 'Динозавры господствовали на Земле около 165 миллионов лет до своего исчезновения 66 миллионов лет назад.',
    },
  },
  {
    en: {
      head: 'Birds Are Descendants of Dinosaurs',
      body: 'Modern birds evolved from small feathered dinosaurs, making them the only living dinosaurs today.',
    },
    ru: {
      head: 'Птицы — потомки динозавров',
      body: 'Современные птицы произошли от мелких пернатых динозавров и являются единственными живыми динозаврами.',
    },
  },
  {
    en: {
      head: 'Tyrannosaurus Rex Had a Powerful Bite',
      body: 'T. rex had one of the most powerful bites in the animal kingdom, capable of crushing bone.',
    },
    ru: {
      head: 'У тираннозавра был мощнейший укус',
      body: 'Укус тираннозавра был одним из самых сильных в животном мире и мог дробить кости.',
    },
  },
  {
    en: {
      head: 'Some Dinosaurs Had Feathers',
      body: 'Fossils show that many theropod dinosaurs had feathers, not just scales, suggesting warm-blooded traits.',
    },
    ru: {
      head: 'У некоторых динозавров были перья',
      body: 'Окаменелости показывают, что у многих тероподов были перья, а не только чешуя, что указывает на теплокровность.',
    },
  },
  {
    en: {
      head: 'Dinosaurs Were Not the First Reptiles',
      body: 'Reptiles appeared about 100 million years before the first dinosaurs in the late Triassic period.',
    },
    ru: {
      head: 'Динозавры не были первыми рептилиями',
      body: 'Рептилии появились примерно за 100 миллионов лет до первых динозавров в конце триасового периода.',
    },
  },
  {
    en: {
      head: 'Fossils Are Found on Every Continent',
      body: 'Dinosaur fossils have been discovered on all seven continents, including Antarctica.',
    },
    ru: {
      head: 'Окаменелости динозавров найдены на всех континентах',
      body: 'Окаменелости динозавров были найдены на всех семи континентах, включая Антарктиду.',
    },
  },
  {
    en: {
      head: 'Some Dinosaurs Were Tiny',
      body: 'Not all dinosaurs were huge — some were the size of chickens or even smaller.',
    },
    ru: {
      head: 'Некоторые динозавры были крошечными',
      body: 'Не все динозавры были огромными — некоторые достигали размера курицы или даже меньше.',
    },
  },
  {
    en: {
      head: 'The First Dinosaur Fossil Was Named in 1824',
      body: 'The first scientifically described dinosaur was Megalosaurus, named in 1824 by William Buckland.',
    },
    ru: {
      head: 'Первый динозавр был описан в 1824 году',
      body: 'Первым научно описанным динозавром был мегалозавр, названный Уильямом Баклендом в 1824 году.',
    },
  },
  {
    en: {
      head: 'Dinosaurs Lived in Herds and Packs',
      body: 'Some species like hadrosaurs are believed to have lived and migrated in large social groups.',
    },
    ru: {
      head: 'Динозавры жили стадами и группами',
      body: 'Считается, что некоторые виды, такие как гадрозавры, жили и мигрировали в больших социальных группах.',
    },
  },
  {
    en: {
      head: 'The Dinosaur Extinction Was Caused by an Asteroid',
      body: 'Most scientists agree that a massive asteroid impact caused the extinction of non-avian dinosaurs.',
    },
    ru: {
      head: 'Динозавры вымерли из-за астероида',
      body: 'Большинство учёных считает, что массовое вымирание динозавров произошло из-за удара гигантского астероида.',
    },
  },
];

export async function seedNews(payload: Payload) {
  console.log('Seeding news...');

  const image = await payload.create({
    collection: 'media',
    filePath: imagePath,
    data: {
      alt: 'Leoplewrodon',
    },
  });

  for (const item of mockNews) {

    const created = await payload.create({
      collection: 'news',
      data: {
        ...item.en,
        poster: image.id,
      },
      locale: 'en',
    });

    await payload.update({
      collection: 'news',
      id: created.id,
      locale: 'ru',
      data: {
        ...item.ru,
        poster: image,
      },
    });
  }
  console.log('News seeding completed');
}
