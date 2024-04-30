import React, { useEffect, useState } from "react";
import { MagicMotion } from "react-magic-motion";
import { useAppDispatch, useAppSelector } from "../components/redux/hooks";

import { getShopProduct } from "../components/slice/shop";
import { useNavigate } from "react-router-dom";
const Shop: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [categoria, setCategoria] = useState("");
  const [valueRangue, setVAlueRangue] = useState("");
  const [page, setPage] = useState(1);

  const count = useAppSelector((state) => state.shop);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getShopProduct());
  }, []);
  const navigate = useNavigate();
  const categorySet = new Set();

  const reinicio = () => {
    window.location.reload();
  };
  for (let i = 0; i < count.data.length; i++) {
    const valor = count.data[i].category;
    categorySet.add(valor);
  }
  const datos = count.data
    .filter(
      ({ category }) =>
        categoria === "" || category.toLowerCase().trim().includes(categoria)
    )
    .filter(
      ({ title }) =>
        searchText === "" ||
        title.toLowerCase().trim().includes(searchText.toLowerCase().trim())
    )
    .filter(
      ({ price }) =>
        valueRangue === "" || parseInt(price) <= parseInt(valueRangue)
    );
  const categoriasUnicas = Array.from(categorySet);
  //   const categiaSin=Array.from(new Set(count))
  const charactersPerPage = 12;
  const lastCharacterIndex = page * charactersPerPage; //15;
  const firstCharacterIndex = lastCharacterIndex - charactersPerPage;

  const charactersPaginated = datos.slice(
    firstCharacterIndex,
    lastCharacterIndex
  );
  const totalPgaginas = Math.ceil(datos.length / charactersPerPage);
  const pagNumber = [];
  for (let i = 1; i <= totalPgaginas; i++) {
    pagNumber.push(i);
  }

  return (
    <div className="container mx-auto pt-[8em] px-2">
      <div className="h-full w-full  rounded-md md:rounded-lg bg-[#C6D8C0] p-5 md:p-10 mb-5">
        <div className="grid grid-cols-2 px-2 gap-4">
          <div className="grid grid-cols-3 col-span-2 md:col-span-1">
            <label
              htmlFor="searchInput"
              style={{ fontWeight: "bold", fontSize: "1.2em" }}
              className="col-span-1 text-[#75C470]"
            >
              Search
            </label>
            <input
              className="col-span-2"
              id="searchInput"
              placeholder="Mens Casual"
              type="text"
              maxLength={70}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              style={{
                backgroundColor: "white",
                lineHeight: 1.25,
                width: "100%",
                padding: "0.5rem 0.75rem",
                borderRadius: "0.5rem",
                display: "block",
                fontSize: "0.875rem",
              }}
            />
          </div>
          <div className="grid grid-cols-3 col-span-2 md:col-span-1">
            <label
              htmlFor="searchInput"
              style={{ fontWeight: "bold", fontSize: "1.2em" }}
              className="col-span-1 text-center text-[#75C470]"
            >
              Price{" "}
              <label className="bg-white py-1 px-2 text-[#75C470] rounded-lg">
                {" "}
                {">"}
                {valueRangue}
              </label>
            </label>
            <input
              min={1}
              max={1000}
              className="col-span-2"
              type="range"
              value={valueRangue}
              onChange={(e) => setVAlueRangue(e.target.value)}
              style={{ background: '#75C470' }}
            />
          </div>
        </div>
        <MagicMotion
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 20,
            mass: 1.1,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "1rem",
              borderRadius: 12,
              margin: "1rem 0",
              overflow: "hidden",
            }}
          >
            <button
              style={{
                fontSize: "1.3em",
                fontWeight: 500,
                width: "100%",
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#75C470",
              }}
              onClick={() => setIsOpen(!isOpen)}
            >
              Category
              <svg
                key="exclude"
                style={{
                  transform: `rotate(${isOpen ? 180 : 0}deg)`,
                  transition: "320ms ease-in-out",
                }}
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 10L15.6714 21L27.5 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {isOpen && (
              <div
                style={{
                  gap: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1rem",
                }}
              >
                <div className="grid grid-cols-4 md:gap-2 gap-4">
                  {categoriasUnicas.map((res) => (
                    <button
                      onClick={() => setCategoria(res)}
                      key={res.id}
                      className=" text-[1.1em] col-span-2  md:col-span-1 text-center cursor-pointer md:mx-0 mx-auto w-[150px] rounded-lg  text-white bottom-1 py-2 px-3 bg-[#75C470] duration-500 hover:bg-black transition-all "
                    >
                      {res}
                    </button>
                  ))}
                  <button
                    onClick={() => reinicio()}
                    className=" text-[1.1em] col-span-2  md:col-span-1 text-center cursor-pointer md:mx-0 mx-auto w-[150px] rounded-lg  text-white bottom-1 py-2 px-3 bg-[#75C470] duration-500 hover:bg-black transition-all "
                  >
                    all products
                  </button>
                </div>
              </div>
            )}
          </div>
        </MagicMotion>
        <MagicMotion>
          <div className=" grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 cursor-pointer">
            {charactersPaginated
              .filter(
                ({ category }) =>
                  categoria === "" ||
                  category.toLowerCase().trim().includes(categoria)
              )
              .filter(
                ({ title }) =>
                  searchText === "" ||
                  title
                    .toLowerCase()
                    .trim()
                    .includes(searchText.toLowerCase().trim())
              )
              .filter(
                ({ price }) =>
                  valueRangue === "" || parseInt(price) <= parseInt(valueRangue)
              )
              .map((items) => (
                <div
                  onClick={() => navigate(`/store/${items.id}`)}
                  className="col-span-1 bg-white divide-y-2 grid rounded-lg transition-all duration-300 hover:border-[#75C470] border-4"
                  key={items.id}
                >
                  <div className=" h-[34vh] sm:h-[46vh] md:h-[37vh] lg:h-[37vh] xl:h-[42vh] flex items-center rounded-t-lg p-5">
                    <img
                      className="max-h-[30vh] mx-auto"
                      src={items.image}
                      alt=""
                    />
                  </div>
                  <div className="pt-2 grid px-2 gap-1 rounded-b-lg w-full mx-auto ">
                    <h3 className="font-normal w-3/5 overflow-hidden whitespace-nowrap overflow-ellipsis">
                      {items.title}
                    </h3>
                    <h4 className="text-[#C6D8C0]">{items.category}</h4>
                    <h4 className="font-semibold">${items.price}</h4>
                  </div>
                </div>
              ))}
          </div>
        </MagicMotion>

        <nav aria-label="" className="flex justify-center mt-10">
          <ul className="inline-flex -space-x-px text-[1.1em] ">
            <li>
              <a
                onClick={() => setPage(1)}
                className="cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight rounded-l-lg border-r-2 border-white bg-[#75C470] text-white hover:bg-[#8BD27B]"
              >
                Previous
              </a>
            </li>
            {pagNumber.map((number) => (
              <li key={number}>
                <a
                  onClick={() => setPage(number)}
                  className="cursor-pointer flex items-center justify-center px-3 h-8 bg-[#75C470] border-r-2 border-white  text-white hover:bg-[#8BD27B]"
                >
                  {number}
                </a>
              </li>
            ))}
            <li>
              <a
                onClick={() => setPage(totalPgaginas)}
                className="cursor-pointer flex items-center justify-center px-3 h-8 leading-tight bg-[#75C470] text-white hover:bg-[#8BD27B] rounded-e-lg "
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Shop;
