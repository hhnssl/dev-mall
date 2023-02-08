import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const PageTemplate = ({ children }) => {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default PageTemplate;
