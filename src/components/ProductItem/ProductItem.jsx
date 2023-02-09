const ProductItem = () => {
  return (
    <>
      <li className="flex w-1/2 flex-col items-start  px-2 text-[0.8rem]">
        <img
          className="mb-2 w-full"
          src="https://openmarket.weniv.co.kr/media/products/2023/02/06/IMG_1085.PNG"
          alt=""
        />
        <span className="mb-1 text-[0.5rem] text-gray-500">
          우당탕탕 라이캣의 실험실
        </span>
        <strong className="mb-2 font-medium  line-clamp-1">
          Hack Your Life 개발자 노트북 파우치
        </strong>
        <strong className="mb-2">
          29,000<span className="ml-1">원</span>
        </strong>
      </li>
      <li className="flex w-1/2 flex-col items-start  px-2 text-[0.8rem]">
        <img
          className="mb-2 w-full"
          src="https://openmarket.weniv.co.kr/media/products/2023/02/06/IMG_1085.PNG"
          alt=""
        />
        <span className="mb-1 text-[0.5rem] text-gray-500">
          우당탕탕 라이캣의 실험실
        </span>
        <strong className="mb-2 font-medium  line-clamp-1">
          Hack Your Life 개발자 노트북 파우치
        </strong>
        <strong className="mb-2">
          29,000<span className="ml-1">원</span>
        </strong>
      </li>
    </>
  );
};

export default ProductItem;
