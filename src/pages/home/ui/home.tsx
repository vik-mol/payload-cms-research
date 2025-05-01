'use client';

import Link from 'next/link';

import { createPath } from '@/shared/lib';
import { LanguageChanger } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

import Style from './home.module.sass';

export const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="wrapper">
      <div className={Style.intro}>
        <LanguageChanger />
        <h1 className={Style.title}>{t('greeting')}</h1>

        <ul className={Style.links}>
          <li>
            <Link className={Style.link} href={createPath('news', i18n.language)}>
              {t('newsLink')}
            </Link>
          </li>
          <li>
            <Link className={Style.link} href="/admin">
              {t('adminLink')}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
