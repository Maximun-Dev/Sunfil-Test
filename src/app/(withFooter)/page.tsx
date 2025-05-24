import HomePage from '@Modules/HomePage';
import type { Metadata } from 'next';
import { metadataConfig } from '@Constants/metadata';

export const metadata: Metadata = metadataConfig;

export default function Home() {
  return <HomePage />;
}
