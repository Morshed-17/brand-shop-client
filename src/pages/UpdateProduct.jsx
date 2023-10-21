import { useState } from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";


const UpdateProduct = () => {
    const data = useLoaderData()
    const [brand, setBrand] = useState(data.brand);
  const [type, setType] = useState(data.type);
  

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    console.log(image, name, price, rating, description, brand, type);
    if(!image || !name || !name || !price || !rating || !description || !brand || !type){
      return toast.error('Please fill all the inforamtion field')
    }
    const newProduct = {
      image,
      name,
      price,
      rating,
      description,
      brand,
      type,
    };
    
    fetch(`https://brand-shop-server-rk92t5zp3-morsheds-projects.vercel.app/phone/${data._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount > 0){
            toast.success("Updated successfuly");
            form.reset()
        }
      });
  };
    return (
        <form onSubmit={handleSubmit}>
      <h2 className="text-3xl font-bold text-center mb-6">Update: {data.name}</h2>
      {/* row 1 */}
      <div className="flex flex-col md:flex-row  gap-6">
        <div className="md:w-1/2">
          <label className="" htmlFor="Image">
            Image
          </label>
          <input
            className="w-full rounded-md px-3 py-2 mt-2 border"
            type="text"
            name="image"
            id=""
            defaultValue={data.image}
            placeholder="Photo URL"
          />
        </div>
        <div className="md:w-1/2">
          <label htmlFor="name">Name</label>
          <input
            className="w-full rounded-md px-3 py-2 mt-2 border"
            type="text"
            name="name"
            defaultValue={data.name}
            id=""
            placeholder="Name"
          />
        </div>
      </div>
      {/* row 2 */}
      <div className="flex flex-col md:flex-row  gap-6 mt-6">
        <div className="md:w-1/2">
          <label className="" htmlFor="Image">
            Brand Name
          </label>
          <select
            onChange={handleBrandChange}
            value={brand}
            className="py-2 px-3 rounded-lg border w-full mt-2"
          >
            <option>Apple</option>
            <option>Samsung</option>
            <option>Xiaomi</option>
            <option>Huawei</option>
            <option>Oppo</option>
            <option>Vivo</option>
          </select>
        </div>
        <div className="md:w-1/2">
          <label className="" htmlFor="Image">
            Product Type
          </label>
          <select
            onChange={handleTypeChange}
            value={type}
            className="py-2 px-3 rounded-lg border w-full mt-2"
          >
            <option>Phone</option>
            <option>Computer</option>
            <option>Headphone</option>
          </select>
        </div>
      </div>
      {/* row 1 */}
      <div className="flex flex-col md:flex-row  gap-6 mt-6">
        <div className="md:w-1/2">
          <label className="" htmlFor="Image">
            Price
          </label>
          <input
            className="w-full rounded-md px-3 py-2 mt-2 border"
            type="text"
            name="price"
            defaultValue={data.price}
            id=""
            placeholder="Product Price"
          />
        </div>
        <div className="md:w-1/2">
          <label htmlFor="rating">Rating</label>
          <input
            className="w-full rounded-md px-3 py-2 mt-2 border"
            type="text"
            name="rating"
            defaultValue={data.rating}
            id=""
            placeholder="Rating 4.5/5"
          />
        </div>
      </div>
      <div className="mt-2">
        <label htmlFor="rating">Short Description</label>
        <input
          className="w-full rounded-md px-3 py-2 mt-2 border"
          type="text"
          name="description"
          defaultValue={data.description}
          id=""
          placeholder="Write product description"
        />
      </div>
      <input
        type="submit"
        className="btn btn-neutral mt-6 w-full"
        value={"Update"}
      />
    </form>
    );
};

export default UpdateProduct;