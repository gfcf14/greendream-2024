import ExternalLink from '@/components/ExternalLink';
import ExternalLinkWrapper from '@/components/ExternalLinkWrapper';
import { ExternalLink as LinkType } from '@/constants';

export const renderExternalLinks = (
  links: LinkType[],
  type: 'comic' | 'creative' | 'professional',
) => {
  return (
    <ExternalLinkWrapper linkCount={links.length} type={type}>
      {links.map((currLink, i) => (
        <ExternalLink key={`external-link-${i}`} {...currLink} />
      ))}
    </ExternalLinkWrapper>
  );
};
