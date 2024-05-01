import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../components/redux/hooks";
import { getCard } from "../components/slice/Card";
import axios from "axios";

// Definir un tipo para la estructura de datos del producto
interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  cantidad: number;
}

const Card: React.FC = () => {
  const [documentoProduct, setDocumentoProduct] = useState<Product[]>([]);
  const card = useAppSelector((state) => state.card);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCard());
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = card.data[0].products as { productId: number; quantity: number }[];
        if (products) {
          const newData: Product[] = await Promise.all(
            products.map(async (productItem) => {
              const response = await axios.get<Product>(
                `https://fakestoreapi.com/products/${productItem.productId}`
              );
              return {
                ...response.data,
                cantidad: productItem.quantity,
              };
            })
          );
          setDocumentoProduct(newData);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [card]);
  
console.log(card.data[0].products)
  const handleCantidadChange = (index: number, newValue: string) => {
    setDocumentoProduct((prevData) => {
      const updatedData = [...prevData];
      updatedData[index].cantidad = parseInt(newValue) || 0; // Ensure it's a number or set to 0
      return updatedData;
    });
  };

  const updateCart = async () => {
    try {
      await axios.put(`https://fakestoreapi.com/carts/user/1`, {
        products: documentoProduct.map((product) => ({
          productId: product.id,
          quantity: product.cantidad,
        })),
      });
      console.log("Cart updated successfully!");
    } catch (error) {
      console.error("Error updating cart:", error);
      // Aquí puedes mostrar un mensaje de error al usuario si la actualización falla
    }
  };

  return (
    <div className="container mx-auto pt-[8em] px-2 min-h-[100vh]">
      <div className="h-full w-full rounded-md md:rounded-lg p-5 md:p-10 mb-5">
        <table className="hidden md:table md:w-full text-sm text-left rtl:text-right text-white overflow-y-auto">
          <thead className="text-center text-xs text-white uppercase bg-[#75C470]">
            <tr>
              <th scope="col" className="px-6 py-3">
                imagen
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody>
            {documentoProduct.map((product, index) => (
              <tr
                key={index}
                className="border-b bg-[#C6D8C0] text-black text-center"
              >
                <td className="px-6 py-4 flex justify-center items-center">
                  <div className="mx-auto w-[80%] py-2 flex items-center justify-center rounded-sm bg-white">
                    <img
                      className="mx-auto h-[5vh] min-w-[5vh]"
                      src={product.image}
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4" style={{ whiteSpace: "nowrap" }}>
                  {product.title}
                </td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4">
                  <input
                    type="number"
                    className="outline-none w-20 p-2 rounded-md"
                    value={product.cantidad}
                    onChange={(e) =>
                      handleCantidadChange(index, e.target.value)
                    }
                  />
                </td>
                <td className="px-6 py-4">
                  {product.price * product.cantidad}
                  <label className="text-[1.4em] ml-1">$</label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Mobile view */}
        <div className="md:hidden grid w-full">
          {documentoProduct.map((product, index) => (
            <div
              key={index}
              className="border-b border-2 divide-y rounded-md mb-2 border-[#C6D8C0] text-black grid"
            >
              <td className="px-6 py-4 ">
                <div className="mx-auto w-[80%] py-2 flex items-center justify-center rounded-sm bg-white">
                  <img
                    className="mx-auto h-[5vh]"
                    src={product.image}
                    alt=""
                  />
                </div>
              </td>
              <td className="px-6 py-4 flex justify-between">
                <b>Product :</b> {product.title}
              </td>
              <td className="px-6 py-4 flex justify-between">
                <b>Price :</b> {product.price}
              </td>
              <td className="px-6 py-4 flex justify-between">
                <b>Product:</b>
                <input
                  type="number"
                  className="outline-none w-20 p-1 border-2 rounded-md border-[#75C470] flex"
                  value={product.cantidad}
                  onChange={(e) =>
                    handleCantidadChange(index, e.target.value)
                  }
                />
              </td>
              <td className="px-6 py-4 flex justify-between">
                <b>Subtotal</b>{" "}
                <label>
                  {product.price * product.cantidad}
                  <label className="text-[1.4em] ml-1">$</label>
                </label>
              </td>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-end py-2">
          <button
            onClick={() => updateCart()}
            className="text-center cursor-pointer md:mx-0 mx-auto w-[150px] text-white bottom-1 py-2 px-3 bg-[#75C470] duration-500 hover:bg-black transition-all"
          >
            Update cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
