import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { withPayload } from "@payloadcms/next/withPayload";

const withNextIntl = createNextIntlPlugin({
  requestConfig: './src/shared/i18n/request.ts',
});

const nextConfig: NextConfig = {};

export default withNextIntl(withPayload(nextConfig));
