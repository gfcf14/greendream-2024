import Card from '@/components/Card';
import { Asset } from '@/utils/types';

export const renderCards = (assetList: Asset[], isMobile: boolean) => {
  return assetList?.map(({ description, icon, id, name }) => {
    return (
      <Card
        description={description}
        key={id}
        icon={icon}
        id={id}
        isMobile={isMobile}
        name={name}
      />
    );
  });
};
