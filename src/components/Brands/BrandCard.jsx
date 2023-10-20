import { useNavigate } from "react-router";


const BrandCard = ({brand}) => {
    const {_id,name, image} = brand
    const navigate = useNavigate()
    return (
        <div onClick={()=>navigate(`/brands/${name}`)} className="flex justify-center border rounded-lg shadow-md bg-white p-6 cursor-pointer hover:scale-[102%] duration-200">
            <img className=" h-[150px]" src={image} alt="" />
        </div>
    );
};

export default BrandCard;