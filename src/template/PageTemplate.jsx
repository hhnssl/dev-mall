import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const PageTemplate = ({ children }) => {
  return (
    <>
      <Header />

      <main className="container mx-auto px-4">{children}</main>

      <Footer />
    </>
  );
};

export default PageTemplate;
