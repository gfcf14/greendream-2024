'use client';

import { useParams } from 'next/navigation';
import AssetButton from '@/components/AssetButton';
import AssetInfo from '@/components/AssetInfo';
import AssetLogo from '@/components/AssetLogo';
import AssetScreenshot from '@/components/AssetScreenshot';
import Details from '@/components/Details';
import Error from '@/components/Error';
import Loader from '@/components/Loader';
import Page from '@/components/Page';
import Text from '@/components/Text';
import useFetchData from '@/hooks/useFetchData';
import { Asset } from '@/utils/types';

export default function GameDetails() {
  const params = useParams();
  const { id } = params;

  const {
    data: game,
    loading,
    error,
    refetch,
  } = useFetchData<Asset>(`/api/games/${id}`);

  const isDownload = !game?.link.includes('https://');

  return (
    <>
      <title>{`GreenDream: ${game ? game.name : ''}`}</title>
      <Page>
        {loading ? (
          <Loader />
        ) : error ? (
          <Error action={refetch} />
        ) : (
          <>
            <AssetLogo icon={game!.icon} />
            <Text content={game!.name.toUpperCase()} type="title" />
            <Text content={game!.description} type="body" />
            <AssetInfo>
              <AssetScreenshot file={game!.icon} />
              <Details details={game!.details.split(';')} />
            </AssetInfo>
            <AssetButton isDownload={isDownload} isGame link={game!.link} />
          </>
        )}
      </Page>
    </>
  );
}
