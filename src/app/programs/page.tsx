'use client';

import AssetWrapper from '@/components/AssetWrapper';
import Error from '@/components/Error';
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
    refetch,
  } = useFetchData<Asset[]>('/api/programs');

  return (
    <>
      <title>GreenDream: Programs</title>
      <Page>
        <Text content="PROGRAMS" type="title" />
        <Text content="These are the programs I have developed" type="body" />
        {loading ? (
          <Loader />
        ) : error ? (
          <Error action={refetch} />
        ) : (
          <AssetWrapper>
            {renderCards(programs!, isMobile, 'program')}
          </AssetWrapper>
        )}
      </Page>
    </>
  );
}
