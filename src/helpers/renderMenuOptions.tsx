import MenuOption from '@/components/NavBar/MenuOption';
import { menuOptions } from '@/constants';

export const renderMenuOptions = () => {
  return menuOptions.map(({ link, text }) => {
    return <MenuOption key={link} link={link} text={text} />;
  });
};
