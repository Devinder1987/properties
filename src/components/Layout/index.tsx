import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='flex flex-col items-center justify-between'>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
