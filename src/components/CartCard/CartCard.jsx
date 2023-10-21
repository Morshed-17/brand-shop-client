import { toast } from "react-toastify";


const CartCard = ({phone, id, handleDelete}) => {
    const {image, name, price} = phone
    
    return (
        <div className="flex items-center mb-4">
              <img
                className="h-16 w-16 object-contain rounded-lg mr-4"
                src={image}
                alt="Product"
              />
              <div className="flex-1">
                <h2 className="text-lg font-bold">{name}</h2>
                <span className="">{price}$</span>
              </div>
              <button onClick={() =>handleDelete(id)} className=" hover:text-red-500">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 13H5v-2h14v2z" />
                </svg>
              </button>
        </div>
    );
};

export default CartCard;