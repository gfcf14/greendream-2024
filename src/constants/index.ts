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

export const alertImages: { [key: string]: string } = {
  cookie: '/images/icons/cookie.svg',
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

export const clampLimit = 60;

export const comicLinks: ExternalLink[] = [
  {
    logo: 'instagram.webp',
    text: 'Instagram',
    url: 'https://www.instagram.com/webdevtoons/',
  },
  {
    logo: 'x.webp',
    text: 'X',
    url: 'https://twitter.com/webdevtoons',
  },
  {
    logo: 'facebook.webp',
    text: 'Facebook',
    url: 'https://www.facebook.com/webdevtoons',
  },
];

export const creativeLinks: ExternalLink[] = [
  {
    logo: 'instagram.webp',
    text: 'Instagram',
    url: 'https://www.instagram.com/gfcf14/',
  },
  {
    logo: 'deviantart.webp',
    text: 'DeviantArt',
    url: 'https://www.deviantart.com/gfcf14',
  },
  {
    logo: 'x.webp',
    text: 'X',
    url: 'https://twitter.com/gfcf14',
  },
  {
    logo: 'fanfiction.webp',
    text: 'FanFiction',
    url: 'https://www.fanfiction.net/u/3545076',
  },
];

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const flashMessageFadeTime = 5000;

export const inputIcons: { [key: string]: string } = {
  email: 'email.svg',
  message: 'message.svg',
  name: 'name.svg',
};

export const menuActionsList = ['contact'];

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

export const nodeMailerUser = process.env.EMAIL_USER;
export const nodeMailerReceiver = process.env.EMAIL_RECEIVER;

export const professionalLinks: ExternalLink[] = [
  {
    logo: 'linkedin.webp',
    text: 'LinkedIn',
    url: 'https://www.linkedin.com/in/carlos-cuba-a2a7b26a/',
  },
  {
    logo: 'github.webp',
    text: 'GitHub',
    url: 'https://github.com/gfcf14',
  },
  {
    logo: 'medium.webp',
    text: 'Medium',
    url: 'https://carloscuba014.medium.com/',
  },
  {
    logo: 'codepen.webp',
    text: 'CodePen',
    url: 'https://codepen.io/gfcf14',
  },
];
