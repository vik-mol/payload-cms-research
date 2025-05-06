import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  requestConfig: './src/shared/i18n/request.ts',
});

const nextConfig: NextConfig = {};

export default withNextIntl(nextConfig);
