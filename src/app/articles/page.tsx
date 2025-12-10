'use client';

import AssetWrapper from '@/components/AssetWrapper';
import Error from '@/components/Error';
import Loader from '@/components/Loader';
import Page from '@/components/Page';
import Text from '@/components/Text';
import { renderArticleCards } from '@/helpers/renderArticleCards';
import useFetchData from '@/hooks/useFetchData';
import { ArticleResponse } from '@/utils/types';
import useDeviceType from '@/utils/useDeviceType';

export default function Articles() {
  const { isDesktopOrLarger, isLargeDesktopForCards, isMobile } =
    useDeviceType();
  const { data, loading, error, refetch } =
    useFetchData<ArticleResponse>('/api/articles');

  return (
    <>
      <title>GreenDream: Articles</title>
      <Page>
        <Text content="ARTICLES" type="title" />
        <Text content="These are the articles I have written" type="body" />
        {loading ? (
          <Loader />
        ) : error ? (
          <Error action={refetch} />
        ) : (
          <AssetWrapper>
            {data?.status === 200 &&
              renderArticleCards(
                data?.articles,
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
