import { MetadataRoute } from 'next';
import { DOMAIN_URL } from '@/constants/common';
import { uiHelper } from '@/utils/uiHelper';


export default function robots(): MetadataRoute.Robots {
  if (!uiHelper.isProduction())
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
      sitemap: `${DOMAIN_URL}/sitemap.xml`,
    };
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${DOMAIN_URL}/sitemap.xml`,
  };
}
