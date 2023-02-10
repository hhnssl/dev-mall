import PageTemplate from '../../template/PageTemplate';
import ProductList from '../../components/ProductList/ProductList';
import Banner from '../../components/Banner/Banner';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { productActions } from '../../redux/productReducer';

const MainPage = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const API_URL = 'https://openmarket.weniv.co.kr/';
      const response = await axios.get(`${API_URL}products/`);

      dispatch(productActions.getAllProducts(response.data.results));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <PageTemplate>
      <Banner />
      <ProductList />
    </PageTemplate>
  );
};

export default MainPage;
