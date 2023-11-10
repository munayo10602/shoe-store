import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import { shoesSelector } from "@/store/shoe/selector";

type Props = {};

const ProductGroup = (props: Props) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  const products = useSelector(shoesSelector);

  return (
    <div id="product">
      <h1 id="product-title">Products</h1>
      <div id="product-group">
        {products.map((item) => (
          <div className="product-wrapper" key={item.id}>
            <div>
              <img className="product-image" src={item.imageUrls[0]} alt="" />
              <p className="product-name">{item.name}</p>
            </div>
            <div className="product-average-star">
              {stars.map((star) => (
                <div>
                  {star <= item.averageStar ? (
                    <div>
                      <svg
                        id="color"
                        enable-background="new 0 0 24 24"
                        height="16px"
                        viewBox="0 0 24 24"
                        width="16px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m23.363 8.584-7.378-1.127-3.307-7.044c-.247-.526-1.11-.526-1.357 0l-3.306 7.044-7.378 1.127c-.606.093-.848.83-.423 1.265l5.36 5.494-1.267 7.767c-.101.617.558 1.08 1.103.777l6.59-3.642 6.59 3.643c.54.3 1.205-.154 1.103-.777l-1.267-7.767 5.36-5.494c.425-.436.182-1.173-.423-1.266z"
                          fill="#ffc107"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div>
                      <svg
                        height="16px"
                        viewBox="0 -10 511.98685 511"
                        width="16px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m114.59375 491.140625c-5.609375 0-11.179688-1.75-15.933594-5.1875-8.855468-6.417969-12.992187-17.449219-10.582031-28.09375l32.9375-145.089844-111.703125-97.960937c-8.210938-7.167969-11.347656-18.519532-7.976562-28.90625 3.371093-10.367188 12.542968-17.707032 23.402343-18.710938l147.796875-13.417968 58.433594-136.746094c4.308594-10.046875 14.121094-16.535156 25.023438-16.535156 10.902343 0 20.714843 6.488281 25.023437 16.511718l58.433594 136.769532 147.773437 13.417968c10.882813.980469 20.054688 8.34375 23.425782 18.710938 3.371093 10.367187.253906 21.738281-7.957032 28.90625l-111.703125 97.941406 32.9375 145.085938c2.414063 10.667968-1.726562 21.699218-10.578125 28.097656-8.832031 6.398437-20.609375 6.890625-29.910156 1.300781l-127.445312-76.160156-127.445313 76.203125c-4.308594 2.558594-9.109375 3.863281-13.953125 3.863281zm141.398438-112.875c4.84375 0 9.640624 1.300781 13.953124 3.859375l120.277344 71.9375-31.085937-136.941406c-2.21875-9.746094 1.089843-19.921875 8.621093-26.515625l105.472657-92.5-139.542969-12.671875c-10.046875-.917969-18.6875-7.234375-22.613281-16.492188l-55.082031-129.046875-55.148438 129.066407c-3.882812 9.195312-12.523438 15.511718-22.546875 16.429687l-139.5625 12.671875 105.46875 92.5c7.554687 6.613281 10.859375 16.769531 8.621094 26.539062l-31.0625 136.9375 120.277343-71.914062c4.308594-2.558594 9.109376-3.859375 13.953126-3.859375zm-84.585938-221.847656s0 .023437-.023438.042969zm169.128906-.0625.023438.042969c0-.023438 0-.023438-.023438-.042969zm0 0" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="product-price">{item.price}$</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGroup;
