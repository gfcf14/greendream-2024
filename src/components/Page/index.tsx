import NavBar from '@/components/NavBar';

interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Page;
