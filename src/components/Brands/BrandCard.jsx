import { useNavigate } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BrandCard = ({brand}) => {

    const {_id,name, image} = brand
    const navigate = useNavigate()
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div data-aos="zoom-in" data-aos-duration="1000" onClick={()=>navigate(`/phones/${name}`)} className="flex justify-center border rounded-lg shadow-md bg-white p-6 cursor-pointer hover:scale-[102%] duration-200">
            <img className=" h-[150px]" src={image} alt="" />
        </div>
    );
};

export default BrandCard;