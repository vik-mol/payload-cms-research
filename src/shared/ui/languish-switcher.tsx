'use client';

import { FC } from 'react';
import { useRouter, usePathname } from '../i18n/navigation';

export const LanguishSwitcher: FC = () => {
  const thisPathname = usePathname();
  const router = useRouter();


  const switchTo = (locale: string) => {
    const params = new URLSearchParams(window.location.search)
    router.replace(`${thisPathname}?${params.toString()}`, { locale });
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => switchTo('en')}
        className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
      >
        English
      </button>
      <button
        onClick={() => switchTo('ru')}
        className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
      >
        Русский
      </button>
    </div>
  );
};
