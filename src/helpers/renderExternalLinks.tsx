import ExternalLink from '@/components/ExternalLink';
import ExternalLinkWrapper from '@/components/ExternalLinkWrapper';
import { ExternalLink as LinkType } from '@/constants';

export const renderExternalLinks = (
  links: LinkType[],
  type: 'comic' | 'creative' | 'professional',
) => {
  return (
    <ExternalLinkWrapper type={type}>
      {links.map(({ logo, text, url }, i) => (
        <ExternalLink
          key={`external-link-${i}`}
          logo={logo}
          text={text}
          url={url}
        />
      ))}
    </ExternalLinkWrapper>
  );
};
