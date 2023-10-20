import { useNavigate } from "react-router-dom";

const PhoneCard = ({ phone }) => {
  const { _id,image, name, price, rating, description, brand, type } = phone || {};
  const navigate = useNavigate()
  return (
    <div>
      <div className=" flex flex-col  shadow-md w-96 rounded-xl bg-clip-border">
        <div className="   mx-4 overflow-hidden border rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 p-4">
          <img
            className="h-[200px] mx-auto" 
            src={image}
            layout="fill"
          />
        </div>
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {name}
          </h5>
          <div className="flex justify-between items-center">
          <p className="block font-sans text-lg antialiased  leading-relaxed text-inherit">
                Brand: {brand}
          </p>
          <p className="block font-sans text-lg antialiased  leading-relaxed text-inherit">
                {type}
          </p>
          </div>
          <p className="block font-sans text-lg antialiased  leading-relaxed text-inherit">
                Price: {price}$
          </p>
          <p className="block font-sans text-lg antialiased  leading-relaxed text-inherit">
                Rating: {rating}⭐
          </p>
        </div>
        <div className="p-6 pt-0 flex gap-4 justify-center">
        <button onClick={() => navigate(`/phone/${_id}`)} className="btn btn-neutral flex-1">Details 📃</button>
          <button className="btn btn-outline">Update 🖋️</button>
          
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
