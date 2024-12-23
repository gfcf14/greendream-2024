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

export default function ProgramDetails() {
  const params = useParams();
  const { id } = params;

  const {
    data: program,
    loading,
    error,
    refetch,
  } = useFetchData<Asset>(`/api/programs/${id}`);

  const isDownload = !program?.link?.includes('https://');

  return (
    <>
      <title>{`GreenDream: ${program ? program.name : ''}`}</title>
      <Page>
        {loading ? (
          <Loader />
        ) : error ? (
          <>
            <Error action={refetch} />
            <p data-testid="error-here">{error}</p>
          </>
        ) : (
          <>
            <AssetLogo icon={program!.icon} />
            <Text content={program!.name?.toUpperCase()} type="title" />
            <Text content={program!.description} type="body" />
            <AssetInfo>
              <AssetScreenshot file={program!.icon} />
              <Details details={program!.details?.split(';')} />
            </AssetInfo>
            <AssetButton isDownload={isDownload} link={program!.link} />
          </>
        )}
      </Page>
    </>
  );
}
