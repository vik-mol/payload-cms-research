'use client';

import { ChangeEvent, useState } from 'react';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

import i18nConfig from '@/shared/configs/i18n/i18nConfig';
import { SelectChangeEvent } from '@mui/material';
import { FormControl } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Select } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const LanguageChanger = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const [val, setVal] = useState(currentLocale);

  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e: SelectChangeEvent<string>) => {
    const newLocale = e.target.value;
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    setVal(newLocale);

    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      router.push('/' + newLocale + currentPathname);
    } else {
      currentPathname && router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }

    router.refresh();
  };

  return (
    <FormControl sx={{ mt: 1, mb: 3, minWidth: 120 }} size="small">
      <Select labelId="locale" value={val} onChange={handleChange}>
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="ru">Русский</MenuItem>
      </Select>
    </FormControl>
  );
};
