import NavBar from '@/components/NavBar';
import styles from './Page.module.css';

interface PageProps {
  children: React.ReactNode;
  isHero?: boolean;
}

const Page: React.FC<PageProps> = ({ children, isHero = false }) => {
  return (
    <>
      <NavBar />
      <div className={isHero ? '' : styles.page} data-testid="page-content">
        {children}
      </div>
    </>
  );
};

export default Page;
