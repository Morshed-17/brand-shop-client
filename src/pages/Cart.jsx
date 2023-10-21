import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import CartCard from "../components/CartCard/CartCard";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState(null);
  const [total, setTotal] = useState(0);
  const cart = useLoaderData();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brand-shop-server-blush-iota.vercel.app/mycart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Product deleted");
          // remove the product form ui
          const remainingProducts = products.filter(prod => prod._id !== id)
          setProducts(remainingProducts)
        }
      });
      }
    });
  };
 
  useEffect(() => {
    const filterCart = cart.filter((prod) => {
      return prod.user === user.uid;
    });
    if (filterCart.length > 0) {
      setProducts(filterCart);
      console.log(filterCart);
      const totalCount = products?.reduce(
        (accumulator, prod) => accumulator + parseInt(prod.phone.price),
        0
      );
      setTotal(totalCount);
    }
  }, [total]);
  return (
    <>
      {products ? (
        <div>
          <div className="p-4 max-w-xl mx-auto mt-16">
            <div className=" shadow-lg rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-gray-200">
                <h1 className="text-lg font-bold">Shopping Cart </h1>
                <span className="text-gray-600">
                  ({products?.length} items)
                </span>
              </div>
              <div className="p-4">
                {products?.map((prod) => (
                  <CartCard
                    key={prod._id}
                    phone={prod.phone}
                    id={prod._id}
                    handleDelete={handleDelete}
                  ></CartCard>
                ))}
              </div>
              <div className="px-4 py-3 bg-gray-200">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">Total:</span>
                  <span className="font-bold text-lg">{total}$</span>
                </div>
                <button className="btn btn-neutral w-full">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-xl text-center my-60">No products found</p>
      )}
    </>
  );
};

export default Cart;
