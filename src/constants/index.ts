type ButtonActionIcon = {
  height: number;
  url: string;
  width: number;
};

export type ExternalLink = {
  logo: string;
  text: string;
  url: string;
};

type MenuOption = {
  link: string;
  text: string;
};

export const articleCardLineChar = 45;
export const articleCardLineCharLargeDesktop = 60;
export const articleCardLineHeight = 18;
export const articleCardTitleHPadding = 30;

export const buttonActionIcons: { [key: string]: ButtonActionIcon } = {
  contact: {
    height: 21,
    url: 'mail.svg',
    width: 30.75,
  },
};

export const menuOptions: MenuOption[] = [
  {
    link: '/programs',
    text: 'PROGRAMS',
  },
  {
    link: '/games',
    text: 'GAMES',
  },
  {
    link: '/articles',
    text: 'ARTICLES',
  },
  {
    link: '/about',
    text: 'ABOUT',
  },
];

export const alertImages: { [key: string]: string } = {
  cookie: '/images/icons/cookie.svg',
};

export const professionalLinks: ExternalLink[] = [
  {
    logo: 'linkedin.png',
    text: 'LinkedIn',
    url: 'https://www.linkedin.com/in/carlos-cuba-a2a7b26a/',
  },
  {
    logo: 'github.png',
    text: 'GitHub',
    url: 'https://github.com/gfcf14',
  },
  {
    logo: 'medium.png',
    text: 'Medium',
    url: 'https://carloscuba014.medium.com/',
  },
  {
    logo: 'codepen.png',
    text: 'CodePen',
    url: 'https://codepen.io/gfcf14',
  },
];
export const creativeLinks: ExternalLink[] = [
  {
    logo: 'instagram.png',
    text: 'Instagram',
    url: 'https://www.instagram.com/gfcf14/',
  },
  {
    logo: 'deviantart.png',
    text: 'DeviantArt',
    url: 'https://www.deviantart.com/gfcf14',
  },
  {
    logo: 'x.png',
    text: 'X',
    url: 'https://twitter.com/gfcf14',
  },
  {
    logo: 'fanfiction.png',
    text: 'FanFiction',
    url: 'https://www.fanfiction.net/u/3545076',
  },
];
export const comicLinks: ExternalLink[] = [
  {
    logo: 'instagram.png',
    text: 'Instagram',
    url: 'https://www.instagram.com/webdevtoons/',
  },
  {
    logo: 'x.png',
    text: 'X',
    url: 'https://twitter.com/webdevtoons',
  },
  {
    logo: 'facebook.png',
    text: 'Facebook',
    url: 'https://www.facebook.com/webdevtoons',
  },
];
