type ButtonActionIcon = {
  height: number;
  url: string;
  width: number;
};

type MenuOption = {
  link: string;
  text: string;
};

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
