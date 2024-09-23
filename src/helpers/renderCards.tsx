import Card from '@/components/Card';

export interface Asset {
  description: string;
  icon: string;
  id: number;
  name: string;
}

export const renderCards = (assetList: Asset[], isMobile: boolean) => {
  return assetList.map(({ description, icon, id, name }) => {
    return (
      <Card
        description={description}
        icon={icon}
        id={id}
        isMobile={isMobile}
        name={name}
      />
    );
  });
};
