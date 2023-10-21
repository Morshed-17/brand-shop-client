import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import CartCard from "../components/CartCard/CartCard";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState(null);
  const [total, setTotal] = useState(0)
  const cart = useLoaderData();

  useEffect(() => {
    const filterCart = cart.filter((prod) => {
      return prod.user === user.uid;
    });
    setProducts(filterCart)
    console.log(filterCart);
    const totalCount = products?.reduce((accumulator, prod) => accumulator + parseInt(prod.phone.price), 0)
    setTotal(totalCount)

  }, [total]);
  return (
    <div>
      <div className="p-4 max-w-xl mx-auto mt-16">
        <div className=" shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-gray-200">
            <h1 className="text-lg font-bold">Shopping Cart </h1>
            <span className="text-gray-600">({products?.length} items)</span>
          </div>
          <div className="p-4">
            {
                products?.map(prod => <CartCard key={prod._id} phone={prod.phone}></CartCard>)
            }
            
          </div>
          <div className="px-4 py-3 bg-gray-200">
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">Total:</span>
              <span className="font-bold text-lg">{total}$</span>
            </div>
            <button className="btn btn-neutral w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
