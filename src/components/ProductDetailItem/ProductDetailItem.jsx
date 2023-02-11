const ProductDetailItem = ({ productDetail }) => {
  return (
    <div className="mb-10">
      <img className="mb-2 w-full" src={productDetail.image} alt="" />
      <div>
        <span className="mb-1 text-[0.5rem] text-gray-500">
          {productDetail.store_name}
        </span>
        <strong className="mb-2 font-medium  line-clamp-1">
          {productDetail.product_name}
        </strong>
        <strong className="mb-2">
          {productDetail.price}
          <span className="ml-1">원</span>
        </strong>
      </div>
    </div>
  );
};

export default ProductDetailItem;
