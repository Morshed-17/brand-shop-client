import { useContext, useState } from "react";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import {AiOutlineStar,AiFillStar  } from 'react-icons/ai'
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
const ProductDetail = () => {
  const phone = useLoaderData();
  const {user} = useContext(AuthContext)
  const { _id, image, name, price, rating, description, brand, type } =
    phone || {};
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const newCart =  {
    phone,
    user:user.uid
  } 
  const handleAddtoCart = () => {
    console.log(newCart);
    fetch(`https://brand-shop-server-rk92t5zp3-morsheds-projects.vercel.app/mycart`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newCart)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Product added to cart")
});

  }

  console.log(phone);
  return (
    <div className="md:flex items-start justify-center py-12">
      <div className=" lg:w-2/5 md:block hidden">
        <img
          className="w-full"
          alt="img of a girl posing"
          src={image}
        />
      </div>
      <div className="md:hidden">
        <img
          className="w-full"
          alt="img of a girl posing"
          src={image}
        />
      </div>
      <div className=" md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b  pb-6">
          <p className="text-sm leading-none ">
            {brand}
          </p>
          <h1
            className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							
							mt-2
						"
          >
            {name}
          </h1>
        </div>
        <div className="py-4 border-b  flex items-center justify-between">
          <p className="text-base leading-4 ">Colours</p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none ">
              Select Color Variant
            </p>
            <div
              className="
								w-6
								h-6
								bg-gradient-to-b
								from-gray-900
								to-indigo-500
								ml-3
								mr-4
								cursor-pointer
							"
            ></div>
            <svg
              className="cursor-pointer"
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L1 9"
                stroke="#4B5563"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="py-4 border-b  flex items-center justify-between">
          <p className="text-base leading-4 ">Pirce:</p>
          <div className="flex items-center justify-center">
            <p className="text-lg leading-none  mr-3"><b>{price} $</b></p>
            <svg
              className="cursor-pointer"
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L1 9"
                stroke="#4B5563"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
    <button onClick={handleAddtoCart} className="btn btn-neutral w-full">Add to Cart</button>
        <div>
          <p className="xl:pr-48 text-base lg:leading-tight leading-normal  mt-7">
            {description}
          </p>
          <div className="text-2xl md:text-2xl text-orange-400 mt-4">
            <Rating
              emptySymbol={<AiOutlineStar />}
              fullSymbol={<AiFillStar/>}
              initialRating={rating}
              readonly
            />
          </div>
          
        </div>
        <div>
          <div className="border-t border-b py-4 mt-7 ">
            <div
              onClick={() => setShow(!show)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="text-base leading-4 ">
                Shipping and returns
              </p>
              <button
                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                aria-label="show or hide"
              >
                <svg
                  className={"transform " + (show ? "rotate-180" : "rotate-0")}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L5 5L1 1"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                "pt-4 text-base leading-normal pr-12 mt-4  " +
                (show ? "block" : "hidden")
              }
              id="sect"
            >
              You will be responsible for paying for your own shipping costs for
              returning your item. Shipping costs are nonrefundable
            </div>
          </div>
        </div>
        <div>
          <div className="border-b py-4 ">
            <div
              onClick={() => setShow2(!show2)}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="text-base leading-4 ">Contact us</p>
              <button
                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                aria-label="show or hide"
              >
                <svg
                  className={"transform " + (show2 ? "rotate-180" : "rotate-0")}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L5 5L1 1"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                "pt-4 text-base leading-normal pr-12 mt-4  " +
                (show2 ? "block" : "hidden")
              }
              id="sect"
            >
              If you have any questions on how to return your item to us,
              contact us.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
