import LatestAsset from '@/components/LatestAsset';
import LatestAssetWrapper from '@/components/LatestAssetWrapper';
import { LatestAsset as AssetType } from '@/utils/types';

export const renderLatestAssets = (assets: AssetType[]) => {
  return (
    <LatestAssetWrapper>
      {assets?.map((currAsset: AssetType, i) => (
        <LatestAsset key={`asset-${i}`} {...currAsset} />
      ))}
    </LatestAssetWrapper>
  );
};
