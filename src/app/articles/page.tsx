'use client';

import AssetWrapper from '@/components/AssetWrapper';
import Loader from '@/components/Loader';
import Page from '@/components/Page';
import Text from '@/components/Text';
import { renderArticleCards } from '@/helpers/renderArticleCards';
import useFetchData from '@/hooks/useFetchData';
import { Article } from '@/utils/types';
import useDeviceType from '@/utils/useDeviceType';

export default function Articles() {
  const { isDesktopOrLarger, isLargeDesktopForCards, isMobile } =
    useDeviceType();
  const {
    data: articles,
    loading,
    error,
  } = useFetchData<Article[]>('/api/articles');

  const errorData = <p>{error}</p>;

  return (
    <>
      <title>GreenDream: Articles</title>
      <Page>
        <Text content="ARTICLES" type="title" />
        <Text content="These are the articles I have written" type="body" />
        {loading ? (
          <Loader />
        ) : error ? (
          errorData
        ) : (
          <AssetWrapper>
            {renderArticleCards(
              articles!,
              isDesktopOrLarger,
              isLargeDesktopForCards,
              isMobile,
              'article',
            )}
          </AssetWrapper>
        )}
      </Page>
    </>
  );
}
