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

export default function Games() {
  const { isMobile } = useDeviceType();
  const {
    data: games,
    loading,
    error,
    refetch,
  } = useFetchData<Asset[]>('/api/games');

  return (
    <>
      <title>GreenDream: Games</title>
      <Page>
        <Text content="GAMES" type="title" />
        <Text content="These are the games I have developed" type="body" />
        {loading ? (
          <Loader />
        ) : error ? (
          <Error action={refetch} />
        ) : (
          <AssetWrapper>{renderCards(games!, isMobile, 'game')}</AssetWrapper>
        )}
      </Page>
    </>
  );
}
