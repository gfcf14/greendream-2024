'use client';

import { useEffect, useState } from 'react';
import AssetWrapper from '@/components/AssetWrapper';
import Page from '@/components/Page';
import Text from '@/components/Text';
import { renderCards } from '@/helpers/renderCards';
import useDeviceType from '@/utils/useDeviceType';
import { Asset } from '@/utils/types';

export default function Home() {
  const { isMobile } = useDeviceType();
  const [programs, setPrograms] = useState<Asset[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/programs');
      const data = await response.json();
      setPrograms(data);
    }
    fetchData();
  }, []);

  return (
    <Page>
      <Text content="PROGRAMS" type="title" />
      <Text content="These are the programs I have developed" type="body" />
      <AssetWrapper>{renderCards(programs, isMobile)}</AssetWrapper>
    </Page>
  );
}
