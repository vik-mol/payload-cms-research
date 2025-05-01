import { ReactNode } from 'react';

import i18nConfig from '@/shared/configs/i18n/i18nConfig';
import { Locales } from '@/shared/types';
import { CssBaseline } from '@mui/material';

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

interface RootLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: Locales }>;
}

export default async function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  return (
    <html lang="en">
      <CssBaseline />
      <body>{children}</body>
    </html>
  );
}
