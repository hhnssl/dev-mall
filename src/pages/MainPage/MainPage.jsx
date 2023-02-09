import PageTemplate from '../../template/PageTemplate';
import ProductList from '../../components/ProductList/ProductList';
import Banner from '../../components/Banner/Banner';

const MainPage = () => {
  return (
    <PageTemplate>
      <Banner />
      <ProductList />
      {/* <ul>
        <li>
          <img src="" alt="" />
          <span>우당탕탕 라이캣의 실험실</span>
          <strong>Hack Your Life 개발자 노트북 파우치</strong>
          <strong>
            29,000<span>원</span>
          </strong>
        </li>
      </ul> */}
    </PageTemplate>
  );
};

export default MainPage;
