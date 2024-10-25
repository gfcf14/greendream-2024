'use client';

import AssetWrapper from '@/components/AssetWrapper';
import Loader from '@/components/Loader';
import Page from '@/components/Page';
import Text from '@/components/Text';
import { renderCards } from '@/helpers/renderCards';
import useFetchData from '@/hooks/useFetchData';
import useDeviceType from '@/utils/useDeviceType';
import { Asset } from '@/utils/types';

export default function Programs() {
  const { isMobile } = useDeviceType();
  const {
    data: programs,
    loading,
    error,
  } = useFetchData<Asset[]>('/api/programs');

  const errorData = <p>{error}</p>;

  return (
    <>
      <title>GreenDream: Programs</title>
      <Page>
        <Text content="PROGRAMS" type="title" />
        <Text content="These are the programs I have developed" type="body" />
        {loading ? (
          <Loader />
        ) : error ? (
          errorData
        ) : (
          <AssetWrapper>
            {renderCards(programs!, isMobile, 'program')}
          </AssetWrapper>
        )}
      </Page>
    </>
  );
}
