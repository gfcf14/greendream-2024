'use client';

import { useEffect, useState } from 'react';
import AssetWrapper from '@/components/AssetWrapper';
import Card from '@/components/Card';
import Page from '@/components/Page';
import Text from '@/components/Text';
import useDeviceType from '@/utils/useDeviceType';

export default function Home() {
  const { isMobile } = useDeviceType();
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/programs');
      const data = await response.json();
      setPrograms(data);
    }
    fetchData();
  }, []);

  console.log(programs);

  return (
    <Page>
      <Text content="PROGRAMS" type="title" />
      <Text content="These are the programs I have developed" type="body" />
      <AssetWrapper>
        <Card
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          icon="whereforetheheckartthou.png"
          id={0}
          isMobile={isMobile}
          name="test name"
        />
        <Card
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          icon="whereforetheheckartthou.png"
          id={0}
          isMobile={isMobile}
          name="test name"
        />
        <Card
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          icon="whereforetheheckartthou.png"
          id={0}
          isMobile={isMobile}
          name="test name"
        />
        <Card
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          icon="whereforetheheckartthou.png"
          id={0}
          isMobile={isMobile}
          name="test name"
        />
      </AssetWrapper>
    </Page>
  );
}
