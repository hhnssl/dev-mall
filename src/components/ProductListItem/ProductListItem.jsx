// import { useSelector } from 'react-redux';

const ProductListItem = ({ image, storeName, productName, price }) => {
  // const products = useSelector((state) => state.product.productList);

  return (
    <>
      <li className="flex w-1/2 flex-col items-start  px-2 text-[0.8rem]">
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
