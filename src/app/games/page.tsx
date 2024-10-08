'use client';

import AssetWrapper from '@/components/AssetWrapper';
import Loader from '@/components/Loader';
import Page from '@/components/Page';
import Text from '@/components/Text';
import { renderCards } from '@/helpers/renderCards';
import useFetchData from '@/hooks/useFetchData';
import useDeviceType from '@/utils/useDeviceType';
import { Asset } from '@/utils/types';

export default function Games() {
  const { isMobile } = useDeviceType();
  const { data: games, loading, error } = useFetchData<Asset[]>('/api/games');

  const errorData = <p>{error}</p>;

  return (
    <Page>
      <Text content="GAMES" type="title" />
      <Text content="These are the games I have developed" type="body" />
      {loading ? (
        <Loader />
      ) : error ? (
        errorData
      ) : (
        <AssetWrapper>{renderCards(games!, isMobile, 'game')}</AssetWrapper>
      )}
    </Page>
  );
}
