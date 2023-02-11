import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { productDetailActions } from '../../redux/productDetailReducer';

const ProductListItem = ({
  image,
  storeName,
  productName,
  price,
  productId,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickItem = () => {
    fetchProductDetail();
    navigate(`/products/${productId}`);
  };

  const fetchProductDetail = async () => {
    try {
      const API_URL = 'https://openmarket.weniv.co.kr/';
      const response = await axios.get(`${API_URL}products/${productId}`);

      dispatch(productDetailActions.getProductDetail(response.data));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <li
        onClick={handleClickItem}
        className="flex w-1/2 flex-col items-start  px-2 text-[0.8rem]"
      >
        <img className="mb-2 w-full" src={image} alt="" />
        <span className="mb-1 text-[0.5rem] text-gray-500">{storeName}</span>
        <strong className="mb-2 font-medium  line-clamp-1">
          {productName}
        </strong>
        <strong className="mb-2">
          {price}
          <span className="ml-1">원</span>
        </strong>
      </li>
    </>
  );
};

export default ProductListItem;
