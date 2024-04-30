import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Product: React.FC = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState([]);
  const [productoCategoria, setProductoCategoria] = useState([]);
  const [eslogaCategory, setEsloganCategory] = useState("");
const navigate=useNavigate()
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProducto(res.data));
  }, [id]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${producto.category}`)
      .then((res) => setProductoCategoria(res.data));

    if (producto.category === "men's clothing") {
      setEsloganCategory("Elevate your style with every step");
    }
    if (producto.category === "jewelery") {
      setEsloganCategory("Where every shine counts");
    }
    if (producto.category === "electronics") {
      setEsloganCategory("Innovation that accompanies you");
    }
    if (producto.category === "women's clothing") {
      setEsloganCategory("Find your power in each garment");
    }
  }, [producto.category]);
  
  return (
    <div className="container mx-auto pt-[8em] px-2">
      <div className="h-full w-full  rounded-md md:rounded-lg bg-[#C6D8C0] p-5 md:p-10 mb-5">
        <div className="grid grid-cols-4 ">
          <div className="col-span-4 md:col-span-2 relative mx-auto mb-4 bg-white p-10 w-full rounded-lg">
            <img
              className="max-h-[40vh] w-auto mx-auto "
              src={producto.image}
              alt=""
            />
          </div>
          <div className="col-span-4 md:col-span-2 px-5 md:pt-10">
            <h5 className=" mb-2">{eslogaCategory}</h5>
            <h2 className="mb-2 text-[1.5em] ">{producto.title}</h2>
            <h5 className="mb-1 text-[1.3em]">$ {producto.price}</h5>
            <p className="text-[1.1em] ">{producto.description}</p>
            <div className="flex gap-2 my-2">
              <input
                className="px-2 overflow-hidden outline-none"
                type="number"
              />
              <button onClick={()=>navigate("/card")} className="text-center cursor-pointer md:mx-0 mx-auto w-[150px] text-white bottom-1 py-2 px-3 bg-[#75C470] duration-500 hover:bg-black transition-all ">
                Add to cart
              </button>
            </div>
          </div>
          <div className="col-span-4 my-10">
            <h2 className="text-[1.5em]">Related products</h2>
            <div className=" mt-5 grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 cursor-pointer">
              {productoCategoria.filter(
                ({ id }) => id !== producto.id,
              ).map((items) => (
                <div
                  onClick={() => navigate(`/store/${items.id}`)}
                  className="col-span-1"
                  key={items.id}
                >
                  <div className="bg-white h-[27vh] sm:h-[30vh] md:h-[30vh] lg:h-[30vh] xl:h-[32vh] flex items-center border-[#C6D8C0] border-2 rounded-t-lg p-5">
                    <img
                      className="max-h-[23vh] mx-auto"
                      src={items.image}
                      alt=""
                    />
                  </div>
                  <div className="bg-white grid px-2 gap-1 rounded-b-lg w-[98.7%] mx-auto">
                    <h3 className="font-normal w-3/5 overflow-hidden whitespace-nowrap overflow-ellipsis">
                      {items.title}
                    </h3>
                    <h4 className="text-[#C6D8C0]">{items.category}</h4>
                    <h4 className="font-semibold">${items.price}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
