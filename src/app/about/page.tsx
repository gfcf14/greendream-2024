'use client';

import Button from '@/components/Button';
import CallToAction from '@/components/CallToAction';
import ExternalLink from '@/components/ExternalLink';
import Page from '@/components/Page';
import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';
import SplitContent from '@/components/SplitContent';
import Text from '@/components/Text';
import { comicLinks, creativeLinks, professionalLinks } from '@/constants';
import { downloadFile } from '@/helpers/downloadFile';
import { renderExternalLinks } from '@/helpers/renderExternalLinks';
import useDeviceType from '@/utils/useDeviceType';

export default function About() {
  const { isTabletOrLarger } = useDeviceType();
  return (
    <>
      <title>GreenDream: About</title>
      <Page>
        <SectionWrapper>
          <Section>
            <Text contained content="THE SITE" type="title" />
            <SplitContent
              image="/images/logos.webp"
              imageFirst={isTabletOrLarger}
              text="Welcome to my website! This is a project created using different development technologies, all hosted in a Vercel project, using NextJS as the frontend, Typescript for precision in handling data, HTML5 and CSS3 for basic effects, and SQLite for database management for the different tables for programs, and games. The articles are fetched using Cheerio to scrape my profile."
            />
          </Section>

          <Section>
            <Text contained content="ME" type="title" />
            <SplitContent
              image="/images/avatar.webp"
              imageFirst
              rounded
              text="I have been a developer for well over a decade, and when my job doesn't keep me busy I work on personal projects, such as updating this website."
            />
            <Button
              onClick={downloadFile(
                'Carlos Cuba - Resume.pdf',
                '/documents/Carlos Cuba - Resume.pdf',
              )}
              text="DOWNLOAD RESUME"
              type="primary"
            />
          </Section>
        </SectionWrapper>

        <Section fullWidth>
          <Text
            contained
            content="As both a professional and enthusiast in the world of development, I am involved in several professional networks, the most important of which are these:"
            type="body"
          />
          {renderExternalLinks(professionalLinks, 'professional')}
        </Section>

        <CallToAction text="If you have any questions, please feel free to contact me pushing the button below or the action button in the nav menu."></CallToAction>

        <Text
          content="Besides my professional work, I am involved in different hobbies/activities, as described below:"
          type="highlight"
        />

        <SectionWrapper>
          <Section>
            <Text contained content="CREATIVE WORK" type="title" />
            <Text
              contained
              content="Besides programming, I am very passionate about arts. Most of my work has involved drawing and writing on these platforms:"
              type="body"
            />
            {renderExternalLinks(creativeLinks, 'creative')}
          </Section>

          <Section>
            <Text contained content="WEBDEV TOONS" type="title" />
            <SplitContent
              boundless
              image="/images/comic.webp"
              imageFirst={isTabletOrLarger}
              text="This is a comic I update every Monday about Devin Webb (so it reads as Web Dev when putting the surname first), a software developer involved in diverse adventures with friends who may or may not share the same love for technology. If you wish to read it, please follow any of the links below:"
            />
            {renderExternalLinks(comicLinks, 'comic')}
          </Section>
        </SectionWrapper>
      </Page>
    </>
  );
}
