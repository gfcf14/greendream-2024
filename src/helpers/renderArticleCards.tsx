import Card from '@/components/Card';
import {
  articleCardLineChar,
  articleCardLineCharLargeDesktop,
} from '@/constants';
import { Article } from '@/utils/types';

export const renderArticleCards = (
  articles: Article[],
  isDesktopOrLarger: boolean,
  isLargeDesktopForCards: boolean,
  isMobile: boolean,
  type: string,
) => {
  const lineCount = isDesktopOrLarger
    ? Math.ceil(
        Math.max(...articles.map((currArticle) => currArticle.title.length)) /
          (isLargeDesktopForCards
            ? articleCardLineCharLargeDesktop
            : articleCardLineChar),
      )
    : 1;

  return articles?.map(({ description, image, title, url }, i) => {
    return (
      <Card
        description={description}
        key={`article-${i}`}
        icon={image}
        id={i}
        isMobile={isMobile}
        lineCount={lineCount}
        name={title}
        type={type}
        url={url}
      />
    );
  });
};
