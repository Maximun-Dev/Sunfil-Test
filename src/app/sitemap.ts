import { DOMAIN_URL } from '@Constants/common';
import { MetadataRoute } from 'next';
import { uiHelper } from '@Utils/uiHelper';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!uiHelper.isProduction()) return [];
  return [
    {
      url: DOMAIN_URL || 'http://localhost:3000',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
