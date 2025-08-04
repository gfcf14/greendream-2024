'use client';

import Button from '@/components/Button';
import CallToAction from '@/components/CallToAction';
import Page from '@/components/Page';
import Section from '@/components/Section';
import SectionWrapper from '@/components/SectionWrapper';
import SplitContent from '@/components/SplitContent';
import Text from '@/components/Text';
import {
  artPortfolioLink,
  comicLinks,
  creativeLinks,
  professionalLinks,
  webcomicViewerLink,
} from '@/constants';
import { useContactForm } from '@/contexts/ContactFormContext';
import { downloadFile } from '@/helpers/downloadFile';
import { openExternalLink } from '@/helpers/openExternalLink';
import { renderExternalLinks } from '@/helpers/renderExternalLinks';

export default function About() {
  const { setContactFormOpen } = useContactForm();

  const openContactForm = () => {
    setContactFormOpen(true);
  };

  return (
    <>
      <title>GreenDream: About</title>
      <Page>
        <SectionWrapper>
          <Section>
            <Text contained content="THE SITE" type="title" />
            <SplitContent
              image="/images/logos.webp"
              text="Welcome to my website! This is a project created using different development technologies, all hosted in a Vercel project, using NextJS as the frontend, Typescript for precision in handling data, HTML5 and CSS3 for basic effects, and SQLite for database management for the different tables for programs, and games. The articles are fetched using Cheerio to scrape my profile."
            />
          </Section>

          <Section>
            <Text contained content="ME" type="title" />
            <SplitContent
              image="/images/avatar.webp"
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

        <CallToAction
          buttonAction={openContactForm}
          buttonText="CONTACT ME"
          text="If you have any questions, please feel free to contact me pushing the button below or the action button in the nav menu."
        ></CallToAction>

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

          <CallToAction
            buttonAction={openExternalLink(artPortfolioLink)}
            buttonText="VIEW MY ART PORTFOLIO"
            text="I have also developed a separate website to host all my artworks independent of any other work."
          ></CallToAction>

          <Section>
            <Text contained content="WEBDEV TOONS" type="title" />
            <SplitContent
              boundless
              image="/images/comic.webp"
              text="This is a comic I update every Monday about Devin Webb (so it reads as Web Dev when putting the surname first), a software developer involved in diverse adventures with friends who may or may not share the same love for technology. If you wish to read it, please follow any of the links below:"
            />
            {renderExternalLinks(comicLinks, 'comic')}
          </Section>

          <CallToAction
            buttonAction={openExternalLink(webcomicViewerLink)}
            buttonText="GO TO MY WEBCOMIC VIEWER"
            text="I have also developed a separate website to host all my webcomics independent of any other work."
          ></CallToAction>
        </SectionWrapper>
      </Page>
    </>
  );
}
